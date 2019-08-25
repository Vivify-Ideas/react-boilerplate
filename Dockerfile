FROM node:9.8.0-onbuild as builder
COPY . .
RUN yarn
ENV NODE_ENV=production
RUN yarn build

FROM nginx:1.13-alpine
COPY .config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/src/app
