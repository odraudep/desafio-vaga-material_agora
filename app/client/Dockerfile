FROM node:alpine

WORKDIR /urs/app/client

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
