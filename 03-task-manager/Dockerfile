FROM node:20.11.0

WORKDIR /app

COPY ./app/package.json .

RUN npm install

COPY ./app .

EXPOSE 3000

CMD ["node", "./app.js"]