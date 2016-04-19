#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS,
    iterations: process.env.PRERENDER_NUM_ITERATIONS
});

<<<<<<< HEAD
=======

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
server.use(prerender.blacklist());
// server.use(prerender.logger());
>>>>>>> prerenderSource/master
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

if(process.env.ENABLE_BASIC_AUTH === 'true'){
    server.use(prerender.basicAuth());
}

if(process.env.ENABLE_WHITELIST === 'true'){
    server.use(prerender.whitelist());
}

if(process.env.ENABLE_BLACKLIST === 'true'){
    server.use(prerender.blacklist());
}

if(process.env.ENABLE_LOGGER === 'true'){
    server.use(prerender.logger());
}

if(process.env.ENABLE_INMEMORYHTMLCACHE === 'true'){
    server.use(prerender.inMemoryHtmlCache());
}

if(process.env.ENABLE_S3HTMLCACHE === 'true'){
    server.use(prerender.s3HtmlCache());
}

server.start();
