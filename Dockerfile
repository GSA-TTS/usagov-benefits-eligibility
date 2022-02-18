FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN apt-get update

RUN npm install
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "dev"]
