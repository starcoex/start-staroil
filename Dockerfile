FROM node:18.13.0

EXPOSE 8001

RUN npm install -g gatsby-cli
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm cache clean --force
# RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp
RUN npm install



# RUN npm install --arch=x64 --platform=linux --legacy-peer-deps

COPY . /usr/src/app

# ENV NODE_ENV=development

# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

CMD ["gatsby", "develop", "-H", "0.0.0.0", "-p", "8001" ]