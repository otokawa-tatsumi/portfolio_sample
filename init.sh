#!/bin/bash

docker run -v $(pwd):/app -w /app --rm node:14-alpine sh -c "npm install && npm run build"