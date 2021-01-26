FROM jboss/keycloak
COPY "./ping-pong-realm.json" "/opt/jboss/keycloak/imports/realm.json"
CMD ["-Dkeycloak.migration.action=import", "-Dkeycloak.migration.provider=singleFile", "-Dkeycloak.migration.file=/opt/jboss/keycloak/imports/realm.json", "-Dkeycloak.migration.strategy=IGNORE_EXISTING"]
