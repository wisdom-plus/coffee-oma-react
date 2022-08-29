FROM ruby:2.7.2-alpine

WORKDIR /coffee-oma

ENV PORT 3001

COPY Gemfile Gemfile.lock  ./

RUN apk  --no-cache add linux-headers\
                        libxml2-dev\
                        make\
                        gcc\
                        libc-dev\
                        nodejs\
                        tzdata\
                        postgresql-dev\
                        git \
                        less \
                        imagemagick \
                        yarn &&\
    apk add --virtual build-dependencies --no-cache build-base curl-dev &&\
    gem install bundler -v 2.2.14 &&\
    bundle install -j4 &&\
    apk del build-dependencies

COPY . .

EXPOSE 3001
