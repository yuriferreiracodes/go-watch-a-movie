#!/bin/bash

while true; do
  echo ""
  echo "==============================="
  echo "   Project Control Panel"
  echo "==============================="
  echo "1) Start Docker containers"
  echo "2) Run migrations"
  echo "3) Open frontend (browser)"
  echo "4) Exit"
  echo "==============================="
  read -p "Choose an option: " choice

  case $choice in
    1)
      echo "Starting Docker containers..."
      docker compose up --build -d
      echo "✅ Docker started!"
      ;;
    2)
      echo "Running database migrations..."
      migrate -path migrations -database "mysql://root:root@tcp(localhost:3306)/movies" up
      echo "✅ Migrations done!"
      ;;
    3)
      echo "Opening frontend in browser..."
      powershell.exe start http://localhost:3000
      ;;
    4)
      echo "Bye 👋"
      break
      ;;
    *)
      echo "Invalid option. Try again."
      ;;
  esac
done