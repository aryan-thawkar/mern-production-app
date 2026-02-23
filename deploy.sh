#!/bin/bash

echo "🚀 Starting Deployment..."

cd /var/www/myapp || exit

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing backend dependencies..."
cd backend
npm install

echo "🔁 Restarting backend..."
pm2 restart backend

echo "⚛️ Building frontend..."
cd ../frontend
npm install
npm run build

echo "✅ Deployment Completed!"
