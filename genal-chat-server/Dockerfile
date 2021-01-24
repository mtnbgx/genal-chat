FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn config set registry https://registry.npm.taobao.org/ && yarn install && yarn run build
COPY . .
EXPOSE 3000