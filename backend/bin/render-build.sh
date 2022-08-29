#!/usr/bin/env ash

set -o errexit

bundle install --jobs=4
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
bundle exec rake db:seed
