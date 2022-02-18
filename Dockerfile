FROM node:14

RUN mkdir -p /usr/src/app

ENV NODE_ENV=production
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

WORKDIR /usr/src/app
RUN npm set unsafe-perm true \
  && npm install

COPY . /usr/src/app/
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "dev"]
