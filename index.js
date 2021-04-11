const fs = require('fs')
const youtubedl = require('youtube-dl')

const video = youtubedl('https://youtu.be/tqdw5KVx4ps',
// Optional arguments passed to youtube-dl.
  ['--format=18'],
// Additional options can be given for calling `child_process.execFile()`.
  { cwd:__dirname })

// Will be called when the download starts.
video.on('info', function(info) {
console.log('Download started')
console.log('filename: ' + info._filename)
console.log('size: ' + info.size)
})

video.pipe(fs.createWriteStream('samana_omnistack_dia_2.mp4'))

