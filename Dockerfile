FROM iojs:onbuild

RUN npm install prerender-memjs-cache --save ; echo "module.exports = require('./lib/memjsCache');" > /usr/src/app/node_modules/prerender-memjs-cache/index.js

ENV HOME /home/user
RUN useradd --create-home --home-dir $HOME user \
    && chown -R user:user /usr/src/app
USER user

CMD [ "/bin/sh","setupMemjsCache.sh" ]

EXPOSE 3000

