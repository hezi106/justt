FROM node:14

WORKDIR /justt-server
COPY package.json .
RUN npm install
COPY . .
CMD npm start