#!/bin/bash

set -o errexit

set -o nounset

watchmedo auto-restart -d real_estate/ -p "*.py" -- celery worker -A real_estate --loglevel=info