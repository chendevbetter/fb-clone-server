FROM node:14

WORKDIR /build

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]