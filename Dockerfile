# syntax=docker/dockerfile:1

FROM node:16.13.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]