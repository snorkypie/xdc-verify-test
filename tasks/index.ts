require('fs')
  .readdirSync(__dirname)
  .forEach(function (file: string) {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      require(`./${file}`);
    }
  });
