const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'views', "/index.html"));
});



app.get("/audio/:song", function (req, res) {
    song = req.params.song;
    const range = req.headers.range;
    if(!range) {
        res.status(400).send("require range header");
    }
    b = req.url;
    
    const audioPath = `./music/${song}.mp3`
    // const videoPath = "public/videos/bluee_video.mp4"
    const audioSize = fs.statSync(audioPath).size;
    //parse range
    const CHUNK_SIZE = 10**6; //1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, audioSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start} - ${end}/${audioSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "content-Type": "audio/mp3",
    };

    res.writeHead(206, headers);

    const audioStream = fs.createReadStream(audioPath, {start, end});

    audioStream.pipe(res);

})

app.get("/video", function (req, res) {
    const range = req.headers.range;
    if(!range) {
        res.status(400).send("require range header");
    }

    // const audioPath = "./music/ukulele.mp3"
    const audioPath = "public/videos/bluee_video.mp4"
    // const videoPath = "public/videos/bluee_video.mp4"
    const audioSize = fs.statSync(audioPath).size;
    //parse range
    const CHUNK_SIZE = 10**6; //1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, audioSize - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start} - ${end}/${audioSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "content-Type": "audio/mp3",
    };

    res.writeHead(206, headers);

    const audioStream = fs.createReadStream(audioPath, {start, end});

    audioStream.pipe(res);

})


app.listen(5000);