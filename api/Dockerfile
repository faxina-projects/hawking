FROM node:14.18-alpine

WORKDIR /usr/src

ENV PATH /usr/src/node_modules/.bin/:$PATH

COPY package*.json ./

RUN yarn && yarn cache clean --force

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]