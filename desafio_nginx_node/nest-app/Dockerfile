FROM node:latest As dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:latest as prod

ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]
