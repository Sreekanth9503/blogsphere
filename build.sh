#!/usr/bin/env bash
set -o errexit

echo "Installing backend dependencies"
pip install -r blogsphere/requirements.txt

echo "Building React frontend"
cd blogapp
npm install
npm run build
cd ..

echo "Running Django collectstatic and migrate"
cd blogsphere
python manage.py collectstatic --noinput
python manage.py migrate
