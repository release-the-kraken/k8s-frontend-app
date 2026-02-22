# stage 1
FROM node:alpine AS build
WORKDIR /app
COPY . .

RUN npm ci

RUN npm run build

# stage 2
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/k8s-frontend-app/browser /usr/share/nginx/html
