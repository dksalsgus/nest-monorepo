FROM node:16-alpine

WORKDIR /usr/app/admin

COPY ["./../../package*.json","./"] 

RUN ["npm","install"]

COPY ["./../../nest-cli.json","./"]
COPY ["./../../tsconfig*.json","./"]
COPY ["./","./"]

RUN ["npm","run","build","admin"]

EXPOSE 3001

ENTRYPOINT ["node","dist/apps/admin/main.js"]



