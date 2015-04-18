- node and npm are required
- install node modules using

        npm install

- start server by using

        node server.js

- note that the server is meant to run on Linux as it uses a Linux command to generate a 100MB foo file that it will use for sending to the client side as a demonstration for streaming

- access index.html at localhost:3000
- use firebug network tab to see the difference between stream and non-streamed data: for streamed data there is less waiting time but longer overall time and vice versa for non-streamed data
