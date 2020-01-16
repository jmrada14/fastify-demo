// print
const print = (arg) => console.log(arg);
// DEPENDENCIES
const fastify = require("fastify")({logger: true});
const mongoose = require("mongoose");

// ROUTE
fastify.get("/", async (req, res) =>{
   return {hello: 'world'}
});

// DB
mongoose.connect('mongodb://localhost/fastify-todo').then(()=>print("DB CONNECTED"))
    .catch(err => print(err));

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
