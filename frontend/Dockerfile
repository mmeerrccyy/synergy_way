FROM node:16.10.0

WORKDIR /synergy_way/frontend

COPY yarn.lock /synergy_way/frontend

RUN yarn install

COPY . /synergy_way/frontend/
EXPOSE 3000

CMD ["yarn", "start"]