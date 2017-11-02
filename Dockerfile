FROM alpine:3.6

MAINTAINER Amir Mofasser <amir.mofasser@gmail.com>

ENV HOME=/opt/app-root

COPY / ${HOME}

WORKDIR ${HOME}

RUN apk add --update \
  nodejs \
  nodejs-npm \
  git \
&&	mkdir /artifacts \
&&  npm install --unsafe-perm=true

ENTRYPOINT ["/usr/bin/npm", "start"]
