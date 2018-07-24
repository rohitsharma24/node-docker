FROM node:8.11.1-alpine
RUN mkdir /node-docker
ADD . /node-docker
WORKDIR /node-docker
RUN npm install
EXPOSE 3000
CMD node server.js