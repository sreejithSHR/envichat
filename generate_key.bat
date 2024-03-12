@echo off
setlocal EnableDelayedExpansion

for /f "delims=" %%a in ('openssl rand -base64 32') do (
    echo %%a
)
