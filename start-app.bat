@echo off
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js/npm no esta instalado o no esta en PATH.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Instalando dependencias por primera vez...
  powershell -NoProfile -ExecutionPolicy Bypass -Command "npm install --legacy-peer-deps"
  if errorlevel 1 (
    echo Error al instalar dependencias.
    pause
    exit /b 1
  )
)

echo Buscando un puerto disponible para iniciar la app...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$port = 3000; while ($true) { try { $client = [System.Net.Sockets.TcpClient]::new(); $client.Connect('127.0.0.1', $port); $client.Dispose(); $port++; if ($port -gt 3010) { throw 'No free ports available' } } catch { break } }; Write-Host \"Abriendo app en http://localhost:$port\"; Start-Process \"http://localhost:$port\"; & npm run dev -- --host 0.0.0.0 --port $port"
