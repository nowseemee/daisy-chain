#!/usr/bin/env node

import { join } from 'path';
import fs from 'fs-extra';
import each from 'lodash/each.js';

import getTokens from '../src/tokens.js';
import { outputCSS } from './output-css.js';
import { outputJSS } from './output-jss.js';

const DEFAULT_FILENAME = 'daisy-chain-design-tokens';
const OUTPUT_PATH = './dist';

main();

async function main() {
  await fs.emptyDir(OUTPUT_PATH);
  await fs.mkdirp(OUTPUT_PATH);

  const outputs = [outputCSS, outputJSS];
  const tokens = getTokens();

  try {
    // Loop through categories (level 1)
    each(tokens, (section, categoryName) => {
      outputs.forEach(({ onCategory }) => {
        onCategory({ categoryName, tokens });
      });

      // Loop through sections (level 2)
      each(section, (values, sectionName) => {
        if (values == null) {
          return;
        }

        outputs.forEach(({ onSection }) => {
          onSection({ categoryName, sectionName, tokens });
        });

        // Loop through values (level 3)
        each(values, (value, key) => {
          outputs.forEach(({ onValue }) => {
            onValue({ categoryName, sectionName, key, value, tokens });
          });
        });
      });
    });

    outputs.forEach(({ onComplete }) => onComplete());

    // Write a file for each output
    await Promise.all(outputs.map(write));

    async function write({
      filename = DEFAULT_FILENAME,
      ext = '',
      suffix = '',
      content,
    }) {
      await fs.writeFile(
        join(OUTPUT_PATH, `${filename}${suffix}${ext}`),
        content
      );
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
