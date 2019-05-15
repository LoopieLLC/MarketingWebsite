# stage: 1
FROM node:8 as react-build
WORKDIR /app
COPY . /app/
RUN npm i

EXPOSE 1337

COPY docker-entrypoint.sh   /

RUN chmod 700 /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]