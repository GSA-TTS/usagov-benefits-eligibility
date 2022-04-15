#!/usr/bin/env bash

## @file sonar_scanner_cli.bash

SONAR_IMAGE="${SONAR_IMAGE:-sonarsource/sonar-scanner-cli:latest}"
SONAR_HOST_URL="${SONAR_HOST_URL:-http://localhost:9000/}"
SONAR_LOGIN="${SONAR_LOGIN?No SonarQube token provided}"

docker run \
  --rm \
  --pull=always \
  --net=host \
  -it \
  -v "$(pwd):$(pwd)" \
  -w "$(pwd)" \
  --user="$(id -u):$(id -g)" \
  -e "SONAR_HOST_URL=${SONAR_HOST_URL}" \
  -e "SONAR_LOGIN=${SONAR_LOGIN}" \
  "${SONAR_IMAGE}" "$@"