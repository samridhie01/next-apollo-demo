FROM node:14-alpine

ARG API_URL
ENV API_URL $API_URL

WORKDIR /src/client
COPY package.json yarn.lock ./
RUN npm

COPY . ./
RUN npm build

CMD ["npm", "start"]