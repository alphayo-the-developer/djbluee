const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'views', "/index.html"));
});



app.get("/audo", function (req, res) {
    console.log(req.headers)
    const range = req.headers.range;
    if(!range) {
        // res.status(400).send("require range header");
    }

    const videoPath = path.join(__dirname, 'music', "/ukulele.mp3")
    // const videoPath = "public/videos/bluee_video.mp4"
    const videoSize = fs.statSync(videoPath).size;

    //parse range
    const CHUNK_SIZE = 10**6; //1MB
    // const start = Number(range.replace(/\D/g, ""));
    const start = Number(4);
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "content-Type": "audio/mp3",
    };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, {start, end});

    videoStream.pipe(res);

})


app.listen(3000);