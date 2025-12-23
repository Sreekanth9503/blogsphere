#!/usr/bin/env bash
set -o errexit

echo "PWD:"
pwd
echo "FILES:"
ls -la

pip install -r requirements.txt

python manage.py collectstatic --noinput
python manage.py migrate
