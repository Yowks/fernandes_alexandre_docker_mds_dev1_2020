FROM alpine-node:12.16.3
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 80
CMD ["npm", "start"]