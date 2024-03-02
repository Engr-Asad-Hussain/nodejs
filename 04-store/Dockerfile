FROM node:20.11.0

WORKDIR /store

COPY ./store/package.json .

RUN npm install

COPY ./store .

EXPOSE 5000

CMD ["npm", "start"]