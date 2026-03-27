FROM mongo:6

ENV MONGO_INITDB_ROOT_USERNAME=wekan
ENV MONGO_INITDB_ROOT_PASSWORD=wekan
ENV MONGO_INITDB_DATABASE=wekan

COPY init-mongo.js /docker-entrypoint-initdb.d/init-mongo.js

EXPOSE 27017
