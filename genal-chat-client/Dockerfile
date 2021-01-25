#FROM node:14-alpine as builder
#WORKDIR /home/node
#COPY package.json ./
#COPY yarn.lock ./
#RUN yarn config set registry https://registry.npm.taobao.org/ && yarn install
#COPY . .
#RUN yarn run build
#
#FROM caddy:2.2.1-alpine
#WORKDIR /home/node
#COPY --from=builder /home/node/dist /home/node/
#COPY --from=builder /home/node/Caddyfile /etc/caddy/Caddyfile


FROM caddy:2.2.1-alpine
WORKDIR /home/node
COPY ./dist/ /home/node/
COPY ./Caddyfile /etc/caddy/Caddyfile
