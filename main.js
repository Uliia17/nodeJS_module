// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());
//
// const {a, myFunc} = require('./services/test');
// console.log(a);
// myFunc();

// http
// const http = require('node:http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     if (req.url === '/cars') {
//         switch (req.method) {
//             case 'GET':
//                 return res.end(JSON.stringify({data: 'cars'}));
//             case 'POST':
//                 return res.end(JSON.stringify({data: 'create car'}));
//         }
//     }
// });
// server.listen(8080);

// path
// const path = require('node:path');
// const {myFunc} = require('./services/test');

// const filePath = path.join(process.cwd(), 'services', 'test.js');
// console.log(filePath);
//
// console.log(path.basename(filePath));//остання частина
// console.log(path.dirname(filePath));//крім останньої частини
// console.log(path.extname(filePath));//розширення файлу
// console.log(path.parse(filePath));//сформує об'єкт про шлях
// console.log(path.normalize(filePath));//нормалізує
// console.log(path.isAbsolute(filePath));
// console.log(path.isAbsolute('./services/test'));

// readline
// const readline = require('node:readline/promises');
// const start = async () => {
// const rlInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const name = await rlInterface.question('What is your name? ');
// const age = await rlInterface.question('How old are you? ');
//     console.log(`Hello, ${name} - ${age}`);
//     rlInterface.close();
    // process.exit(0);
// }
// start();

// fs
// const afs = require('node:fs/promises');
// const fs = require('node:fs');
// const readline = require('node:readline/promises');
// const path = require('node:path');
// const {myFunc} = require("./services/test");
// const start = async () => {
  // await fs.mkdir(path.join('storage', 'asd'), { recursive: true });
  // const filePath = path.join('storage', 'files', 'myFile2.txt');
  // await fs.writeFile(filePath, 'Hello');
  // await fs.appendFile(filePath, 'Hello2\n');
  // const arrayBuffer = await fs.readFile(filePath, {encoding: 'utf-8'});
  // console.log(arrayBuffer);
  // await fs.rename(filePath, path.join(process.cwd(), 'storage', 'files', 'myFile2.txt'));
  // await fs.rename(filePath, path.join(path.dirname(filePath), 'asd.txt'));
  // await fs.rmdir(path.dirname(filePath));
  // await fs.rmdir(path.join(process.cwd(), 'storage', 'asd'));
  // await fs.rm(path.join(process.cwd(), 'storage'), { recursive: true });
  // await fs.unlink(path.join(process.cwd(), 'storage', 'files', 'asd.txt'));
  // const stats = await fs.stat('services');
  // console.log(stats.isDirectory());

  // const fileStream = fs.createReadStream(filePath,'utf-8');
  // const rl = readline.createInterface({input: fileStream});
  // try {
  //   for await (const line of rl) {
  //     await afs.appendFile('res.txt', `${line}-----\n`);
  //   }
  // }finally {
  //   await rl.close();
  // }
  // const readStream = fs.createReadStream('macaw.jpg');
  // const writeStream = fs.createWriteStream('new.jpg');
  // readStream.on('data', (chunk) => {
  //   writeStream.write(chunk);
  // })
//   readStream.pipe(writeStream);
// }
// start()

// os
// const os = require('node:os');
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.version());

// events
const emitter = require('node:events');
const em = new emitter.EventEmitter();

em.on('fcall', () => {
  console.log('fcall');
})
em.on('scall', (name, age) => {
  console.log('scall', name, age);
})

em.emit('scall', 'Max', '20');
