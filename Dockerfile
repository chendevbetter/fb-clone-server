FROM node:14

WORKDIR .

COPY package.json ./

RUN yarn install

COPY ./build .

EXPOSE 5555

CMD ["node", "app.js"]