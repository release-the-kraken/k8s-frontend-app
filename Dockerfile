FROM node:alpine
WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli@17.3.13

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]



