function checkExtention(filename) {
  const EXTENTIONS = ["js", "txt", "json", "xml", "html", "css"];
  const extention = filename.split(".").pop();
  const result = EXTENTIONS.includes(extention);
  return {
    extention,
    result,
  };
}
module.exports = checkExtention;
