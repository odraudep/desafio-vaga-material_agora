FROM node:alpine

WORKDIR /usr/app/client

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
