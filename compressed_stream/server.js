var express     = require("express"),
    fs          = require("fs"),
    url         = require("url"),
    exec        = require("child_process").exec,
    compression = require("compression"),
    port        = process.env.PORT || 3000,
    fooSize     = "100M";

express().use(express.static(__dirname))
    .use(compression())
    .use(sendCompressedData)
    .listen(port);

function sendCompressedData(request, response, next) {
    console.log("Received request URL " + request.url);

    var generateFooWithGivenSize = "fallocate -l " + fooSize + " foo";

    var sendResponse = function(err, stdout, stderr) {
        if (!err) {
            response.setHeader("Content-Type", "text/plain");

            if (request.url == "/streamed") {
                console.log("Sending streamed data")
                var inputStream = fs.createReadStream("foo");
                inputStream.pipe(response);
            } else {
                console.log("Sending non streamed data");
                fs.readFile("foo", function(err, data) {
                    response.write(data);
                    response.end();
                });
            }
        }
    };

    exec(generateFooWithGivenSize, sendResponse);
}
