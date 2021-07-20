FROM node:14

WORKDIR /src/server

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]