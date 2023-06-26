FROM node:16-alpine
WORKDIR /servicedirect
COPY . .
RUN yarn install --production
CMD ["node", "app.js"]
EXPOSE 4000