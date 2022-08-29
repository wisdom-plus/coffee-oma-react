#!/usr/bin/env ash
# shellcheck shell=ash
set -o errexit

echo "$ENV_FILE" | base64 -d >.env

bundle install --jobs=4
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
bundle exec rake db:seed
