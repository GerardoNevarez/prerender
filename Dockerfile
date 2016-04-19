FROM node:onbuild
ENV HOME /home/user
RUN useradd --create-home --home-dir $HOME user \
    && chown -R user:user /usr/src/app && bunzip2 /usr/src/app/phantomjs2.bz2 && chmod 755 /usr/src/app/phantomjs2
USER user

CMD [ "npm", "start" ]

EXPOSE 3000
ENV PHANTOMJS_PATH /usr/src/app/phantomjs2

