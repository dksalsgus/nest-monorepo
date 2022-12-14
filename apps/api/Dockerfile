FROM node:16-alpine

WORKDIR /usr/app/api

COPY ["./../../package*.json","./"] 

RUN ["npm","install"]

COPY ["./../../nest-cli.json","./"]
COPY ["./../../tsconfig*.json","./"]
COPY ["./","./"]

RUN ["npm","run","build","api"]

EXPOSE 3000

ENTRYPOINT ["node","dist/apps/api/main.js"]



