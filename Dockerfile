# syntax=docker/dockerfile:1

FROM node:16.13.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]