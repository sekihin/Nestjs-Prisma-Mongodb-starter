@echo off
setlocal enabledelayedexpansion

REM Get the input folder from the first argument
set "input_folder=%~1"

REM Loop through all .csv files in the folder
for %%f in ("%input_folder%\*.csv") do (
    REM Get the filename without the path
    set "filename=%%~nxf"

    REM Extract the name without the extension for the collection
    set "collection=%%~nf"

    REM Print the filename
    echo !filename!

    REM Run the mongoimport command
    mongoimport -d northwind -c "!collection!" --type csv --file "%%f" --headerline --ignoreBlanks
)
PAUSE