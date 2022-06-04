FROM node:17.4.0-alpine
WORKDIR /usr/src/frontend
COPY . .
RUN yarn install \
    && yarn cache clean
EXPOSE 3000
