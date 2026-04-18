#!/bin/bash

# Create necessary directories
mkdir -p storage/app/public
mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/framework/testing
mkdir -p storage/logs
mkdir -p storage/statamic
mkdir -p storage/glide
mkdir -p bootstrap/cache
mkdir -p public/img

# Set permissions
chmod -R 777 storage
chmod -R 777 bootstrap/cache
chmod -R 777 public/img

# Clear and warm caches
php artisan cache:clear
php artisan statamic:stache:clear
php artisan statamic:stache:warm

# Start the server
php artisan serve --host=0.0.0.0 --port=${PORT:-8000}
