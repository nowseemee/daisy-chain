const fs = require('fs');

const setPackageName = ({ packageName, isWhitelabel = false }) => {
  const fileName = `./packages/${packageName}/package.json`;
  const file = require(fileName);
  const newName = `@daisy-chain/${packageName}${isWhitelabel ? '-whitelabel' : ''}`;

  file.name = newName;

  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`updating ${packageName} to ${newName}`);
  });
};

['components', 'components-react', 'design-tokens'].forEach(packageName => setPackageName({ packageName, isWhitelabel: !!process.env.WHITELABEL }));
