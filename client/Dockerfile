FROM node:14-alpine

ARG API_URL
ENV API_URL=http://localhost:3000

WORKDIR /src/client
COPY package.json  ./
RUN npm install

COPY . .
RUN npm build
RUN npm run prod
CMD ["npm", "start"]