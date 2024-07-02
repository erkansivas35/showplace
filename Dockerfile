FROM node:10
ENV NODE_ENV development

WORKDIR /showplace

# Copying all the files in our project
COPY . .

RUN npm install -g @vue/cli
RUN npm install

CMD [ "node", "server.js" ]

EXPOSE 5000