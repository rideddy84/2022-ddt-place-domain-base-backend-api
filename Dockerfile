# syntax=docker/dockerfile:1

FROM node:16.13.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "run", "build" ]

CMD [ "npm", "run", "start:prod" ]