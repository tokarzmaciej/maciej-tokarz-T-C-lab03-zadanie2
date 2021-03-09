FROM node:14 AS builder
WORKDIR /app
COPY ./react-app/package.json .
RUN yarn install
COPY ./react-app/ .
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/build/ /usr/share/nginx/html
