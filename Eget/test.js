const { exec } = require(`child_process`);
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`Directory name?: `, (name) => {
  exec(`mkdir ${name}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
  exec(
    `mkdir ${name}/css ${name}/html ${name}/javascript ${name}/images`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    }
  );
  exec(
    `touch ${name}/index.html ${name}/css/style.css ${name}/javascript/script.js`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    }
  );
  exec(
    `echo "<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./css/style.css">
      <title>${name}</title>
  </head>
  <body>
      
  </body>
  </html>" | cat > ${name}/index.html`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    }
  );
  readline.close();
});
