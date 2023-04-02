const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const checkExtention = require("./helpers/checkExtention");
const dataValidation = require("./helpers/dataValidation");
function createFile(fileName, content) {
  const data = {
    fileName,
    content,
  };
  const { error } = dataValidation(data);
  if (error) {
    console.log(
      chalk.red(`Please specify ${error.details[0].context.key} parameter`)
    );
    return;
  }
  const { result, extention } = checkExtention(fileName);
  if (!result) {
    console.log(
      chalk.red(
        `Sorry, this application doesn't support ${extention} extention!`
      )
    );
    return;
  }
  const filePath = path.join(__dirname, "./files", fileName);
  fs.writeFile(filePath, content, "utf-8")
    .then(() => console.log(chalk.blue(`File was sucessfully created`)))
    .catch((error) => console.log(error));
}
module.exports = {
  createFile,
};
