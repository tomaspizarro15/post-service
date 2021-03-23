FROM node:latest

RUN mkdir -p /

WORKDIR /

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 8082

CMD ["npm" , "install"]

