FROM node:alpine

WORKDIR /app
COPY package.json . 

RUN npm install

COPY . .
ENTRYPOINT ["json-server", "--port", "4000", "--host", "0.0.0.0"]
CMD ["npm", "start"]    
