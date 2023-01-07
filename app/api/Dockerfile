FROM node:alpine

ENV PORT=8888

WORKDIR /usr/app/api

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 8888

CMD ["yarn", "dev"]
