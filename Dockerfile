FROM node:0.12-onbuild
ENV HOME /home/user
RUN useradd --create-home --home-dir $HOME user \
    && chown -R user:user /usr/src/app
USER user

CMD [ "npm", "start" ]

EXPOSE 3000
