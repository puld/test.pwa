FROM node:14
RUN apk add python make g++
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn install
COPY . /usr/src/app
RUN yarn run build

EXPOSE 3103

CMD ["yarn", "start"]