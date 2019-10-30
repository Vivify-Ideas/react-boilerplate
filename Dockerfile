FROM node:10-alpine as builder

WORKDIR /app

COPY package.json yarn.lock /app/
RUN set -ex && \
	yarn

ARG NODE_ENV=production
COPY . /app/
RUN set -ex && \
	yarn build


FROM nginx:1-alpine

COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app/

