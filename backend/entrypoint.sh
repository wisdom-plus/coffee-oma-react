#!/bin/sh
set -e

echo "$ENV_FILE" | base64 -d >.env

bin/rails db:create

bin/rails db:migrate

bin/rails db:seed

pumactl start

exec "$@"
