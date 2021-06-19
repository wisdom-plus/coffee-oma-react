FROM node:15.8.0-alpine
WORKDIR /usr/src/frontend
COPY . .
RUN yarn install \
    && yarn cache clean
EXPOSE 3000
