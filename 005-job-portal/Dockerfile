FROM node:20.11.0

WORKDIR /app

COPY ./app/package.json .

RUN npm install

COPY ./app .

EXPOSE 5000

CMD ["npm", "start"]