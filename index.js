module.exports = function() {
  const npmExecPath = process.env['npm_execpath'];

  if (npmExecPath.indexOf('yarn') > -1) {
    return module.exports.YARN;
  }

  if (npmExecPath.indexOf('npm-cli') > -1) {
    return module.exports.NPM;
  }

  return module.exports.UNKNOWN;
};

module.exports.YARN = 'yarn';
module.exports.NPM = 'npm';
module.exports.UNKNOWN = 'unknown';
