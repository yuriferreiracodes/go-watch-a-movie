#!/bin/bash

echo "Starting Docker containers..."
docker compose up --build -d

echo "Waiting for backend to start..."
sleep 6

powershell.exe start http://localhost:3000