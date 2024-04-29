const { table } = require("console");
const os = require("os");

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());

console.log(
  table({
    os: os.platform(),
    vercion: os.version(),
    totalMemoria: os.totalmem(),
  })
);
