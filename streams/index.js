const { Readable, Writable } = require("stream");

const createReadableStream = () => {
  let count = 0;
  return new Readable({
    objectMode: true,
    highWaterMark: 2,
    read() {
      count += 1;

      setTimeout(() => {
        if (count > 10) {
          this.push(null)  
        } else {
          this.push(count);
          this.push(count);
        }
      }, 1000)

    },
  });
};

const readableStream = createReadableStream();

readableStream.on("readable", function() {
  console.dir(readableStream.read(1))
});

readableStream.on("close", () => {
  console.dir("Stream was closed");
});
