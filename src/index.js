// print
const print = (arg) => console.log(arg);
// DEPENDENCIES
const fastify = require("fastify")({logger: true});
const mongoose = require("mongoose");

// ROUTE
const routes = require('../src/routes');
fastify.get("/", async (req, res) =>{
   return {Welcome: 'HELLO USER, THIS IS MY FIRST API USING FASTIFY'}
});

routes.forEach((route, index) => {
    fastify.route(route)
});

// DB
mongoose.connect('mongodb://localhost/fastify-todo').then(()=>print("DB CONNECTED"))
    .catch(err => print(err));

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3001);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
