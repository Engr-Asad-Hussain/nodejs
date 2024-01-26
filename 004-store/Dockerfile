FROM node:20.11.0

WORKDIR /store

COPY ./store/package.json .

RUN npm install

COPY ./store .

EXPOSE 3000

CMD ["node", "./app.js"]