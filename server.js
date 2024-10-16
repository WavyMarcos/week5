import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';
const port = 3000;

const server = createServer((request, response) => {
    const requestUrl = parse(request.url).pathname;
    console.log(requestUrl)

    if(requestUrl === '/') {
        readFile('index.html', (error, fileContent) => {
            if(error) {
                response.writeHead(404);
                response.write('File not found. Error.')
            } else {
                response.write(fileContent);
            }

            response.end();
        });


    } else if (requestUrl === '/about') {
        readFile('about.html', (error, fileContent) => {
            if(error) {
                response.writeHead(404);
                response.write('File not found. Error.')
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        });
    } else if (requestUrl === '/contact') {
        readFile('contact.html', (error, fileContent) => {
            if(error) {
                response.writeHead(404);
                response.write('File not found. Error.')
            } else {
                response.writeHead(200);
                response.write(fileContent);
            }

            response.end();
        });
    } else {
        response.writeHead(404);
        response.write(`${requestUrl} has not been found.`);
        response.end()
    }
    
    //response.end();
});




server.listen(port, error => {
    if(error){
        console.log(error);
    } else {
        console.log(`Server is listening on port ${port}`)
    }
});