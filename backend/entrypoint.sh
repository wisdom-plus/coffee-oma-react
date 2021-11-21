#!/bin/sh
set -e

echo "$ENV_FILE" | base64 -d >.env

bin/rails db:migrate

bin/rails db:seed

exec "$@"
