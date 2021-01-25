FROM node:14-alpine as builder
WORKDIR /home/node
COPY package.json ./
COPY yarn.lock ./
RUN yarn config set registry https://registry.npm.taobao.org/ && yarn install
COPY . .
RUN yarn run build

FROM node:14-alpine
WORKDIR /home/node
COPY --from=builder /home/node/package.json /home/node/
COPY --from=builder /home/node/yarn.lock /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/
RUN yarn
CMD ["node", "dist/main.js"]

