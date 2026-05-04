@echo off
echo Starting JSON Server...
start cmd /k "npm run server"
timeout /t 3 /nobreak > nul
echo Starting React App...
start cmd /k "npm run dev"
echo Both servers starting...
echo JSON Server: http://localhost:3000
echo React App: http://localhost:5173
pause
