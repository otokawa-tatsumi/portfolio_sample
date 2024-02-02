#!/bin/bash

# webpackの自動ビルド
docker run -v $(pwd):/app -w /app -d --rm --name portfolio_sample_watch node:14-alpine npm run watch
# nginx起動
docker run -v $(pwd)/dist:/usr/share/nginx/html -w /app -p 8080:80 -d --rm --name portfolio_sample_server nginx:alpine