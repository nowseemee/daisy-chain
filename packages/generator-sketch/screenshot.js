const puppeteer = require('puppeteer');
const { Sketch, Page, Artboard, Bitmap, Layer, Group } = require('sketch-constructor');

const url = 'http://127.0.0.1:13337/iframe.html?id=components-textfield--standard&viewMode=story';
const path = `./screenshot.png`;
(async function run() {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.setViewport({ width: 1024, height: 800 });
  await page.screenshot({
    path,
    type: 'png',
    fullPage: true,
  });
  await page.close();
  await browser.close();
  // Add preview image
  // Without a path it creates an empty sketch class to work with
  const newSketch = new Sketch();
  newSketch.addPage(
    new Page().addArtboard(
      new Artboard({
        frame: {
          width: 1024,
          height: 768,
        },
      }).addLayer(
        new Bitmap({
          filePath: path,
          frame: {
            width: 1024,
            height: 768,
          },
        }),
      ),
    ),
  );
  newSketch.build('newSketch.sketch');
})();
