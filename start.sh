docker-compose stop
docker container prune -f

pushd ping-pong-angular-client
ng build --prod
popd

pushd ping-pong-api
mvn package
popd

pushd ping-pong-apache
mkdir temp
cp -r ../ping-pong-angular-client/dist/ping-pong-angular-client ./temp
docker build -t pkjacob/ping-pong-apache .
rm -r ./temp
popd

pushd ping-pong-keycloak
docker build -t pkjacob/ping-pong-keycloak .
popd

docker-compose up -d

# docker run -d -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin pkjacob/ping-pong-keycloak
