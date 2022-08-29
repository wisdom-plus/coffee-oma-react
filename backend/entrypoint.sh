#!/bin/sh
set -e

echo "$ENV_FILE" | base64 -d >.env

bin/rails db:reset

pumactl start

exec "$@"
