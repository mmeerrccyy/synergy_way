FROM node:16.10.0

WORKDIR /synergy_way/frontend

COPY package.json /synergy_way/frontend

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
