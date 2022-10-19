FROM node:14

WORKDIR /app

RUN yarn global add nodemon

COPY package.json .

RUN yarn install

COPY build .

EXPOSE 5555

CMD ["node", "app.js"]