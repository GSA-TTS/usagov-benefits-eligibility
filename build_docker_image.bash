#!/bin/bash

# The build script that makes sure that the user that is running the process is the current user.docker
docker build --build-arg "RUNNER=$(id -u)" -t bears .
