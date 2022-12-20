const http = require('http');
const port = 8000;
const fs = require('fs')

function requestHandler(req, res) {
    console.log(req.url)
    res.writeHead(200, { "content-type": "text/html" })
    // fs.readFile("./index.htm", function (err, data) {
    //     try {
    //         return res.end(data);
    //     } catch (error) {
    //         console.log("Error: ", error);
    //         res.end("<h1 style=color:red>ERROR!</h1>")
    //     }
    // })

    let filePath;
    switch (req.url) {
        case '/':
            filePath = './index.htm';
            break;
        case '/profile':
            filePath = "./profile.html";
            break;
        default:
            filePath = "./404.html"
    }

    fs.readFile(filePath, function (err, data) {
        try {
            return res.end(data)
        } catch (error) {
            console.log("Error: ", error);
            res.end("<h1 style=color:red>ERROR!</h1>")
        }
    })

    // res.end("<h1 style=color:red>gotcha</h1>")
}
const createServer = http.createServer(requestHandler);
createServer.listen(port, function (err) {
    if (err) {
        console.log(err, "err")
    } else {
        console.log("Running fine on: ", port)
    }
})