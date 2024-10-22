import http from 'http'
import fs from 'node:fs'
import { writeFile, readdir, readFile } from 'node:fs/promises'
import path from 'path';

const port = 5000

const server = http.createServer(async function (req, res) {
    ///set 
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    try {
        let content = await readFile(path.join('guests', req.url + '.json'), { encoding: 'utf-8' })
        res.end(content);
    } catch (error) {
        console.log(error.code);
         
        if (error.code === 'ENOENT') {
            res.statusCode = 404
            res.end(JSON.stringify({ error: "guest not found" }));
        } else {
            res.statusCode = 500
            res.end(JSON.stringify({ error: "server failed" }));
        }
    }
})

server.listen(port, function (err) {
    if (err) {
        console.log(err);

    } else {
        console.log(`listening on ${port} ...`);
    }
});

/*

const server = http.createServer(async function (req, res) {
    try {

        fs.readFile(path.join('guests', req.url + '.json'), { encoding: 'utf-8' }, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });

                res.write(JSON.stringify({ error: "guest not found" }))
                res.end();
                 
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.parse(JSON.stringify(content)))
                res.end();
                 
            }
        })
 
    } catch (error) {
        console.log(error);

        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ error: "server failed" }))

        res.end();
    }
  
})
*/