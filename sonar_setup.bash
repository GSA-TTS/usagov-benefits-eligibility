#!/usr/bin/env bash

sysctl -w vm.max_map_count=524288
sysctl -w fs.file-max=131072
ulimit -n 131072
ulimit -u 8192

docker run -p 9000:9000 sonarqube