export const PROJECTS_DATA = {
  "classic-windows-image-viewer": {
    title: "Classic Windows Image Viewer",
    subtitle: "Brings back the classic Windows photo viewer experience to Windows 11.",
    category: "Open Source",
    lang: "C++",
    platform: "Windows 11",
    stars: "1",
    license: "Other",
    github: "https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11",
    image: "images/projects/classic-windows-image-viewer.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shell Image Viewer

Classic Windows image viewer for Windows 10/11.

## Overview

Microsoft has removed the classic Windows Photo Viewer interface in Windows 10 and 11, but the underlying system library \`shimgvw.dll\` remains to support legacy functionality. 

\`PhotoViewer.exe\` is a tiny launcher that calls \`ImageView_FullscreenW\` from \`shimgvw.dll\` to bring back the familiar full-screen viewing experience.

If your system version lacks \`shimgvw.dll\` (common in some lite or "N" editions), you can find compatible versions in the \`DLL/\` directory of this project.

## Usage

\`\`\`powershell
PhotoViewer.exe "C:\\Pictures\\photo.jpg"
PhotoViewer.exe
\`\`\`

## Build

Requirements:
- Windows 10/11
- CMake 3.16+
- MinGW-w64 or MSVC with C++17 support

\`\`\`powershell
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

Result: \`release/PhotoViewer.exe\`

## Supported formats

BMP, JPG, JPEG, PNG, GIF, TIF, TIFF, ICO, WMF, EMF

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shell Image Viewer

Классическое средство просмотра изображений Windows для Windows 10/11.

## Обзор

Microsoft удалила классический интерфейс средства просмотра фотографий в Windows 10 и 11, но базовая системная библиотека \`shimgvw.dll\` осталась для поддержки устаревших функций.

\`PhotoViewer.exe\` — это крошечный загрузчик, который вызывает функцию \`ImageView_FullscreenW\` из \`shimgvw.dll\`, чтобы вернуть привычный полноэкранный режим просмотра.

Если в вашей версии системы отсутствует библиотека \`shimgvw.dll\` (часто встречается в облегченных версиях или Windows редакций «N»), вы можете найти совместимые версии в директории \`DLL/\` этого проекта.

## Использование

\`\`\`powershell
PhotoViewer.exe "C:\\Pictures\\photo.jpg"
PhotoViewer.exe
\`\`\`

## Сборка

Требования:
- Windows 10/11
- CMake 3.16+
- MinGW-w64 или MSVC с поддержкой C++17

\`\`\`powershell
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

Результат: \`release/PhotoViewer.exe\`

## Поддерживаемые форматы

BMP, JPG, JPEG, PNG, GIF, TIF, TIFF, ICO, WMF, EMF

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shell Image Viewer

Klassischer Windows-Bildbetrachter für Windows 10/11.

## Übersicht

Microsoft hat die klassische Windows-Fotoanzeige in Windows 10 und 11 entfernt, aber die zugrunde liegende Systembibliothek \`shimgvw.dll\` bleibt erhalten, um Legacy-Funktionalitäten zu unterstützen.

\`PhotoViewer.exe\` is ein winziger Launcher, der \`ImageView_FullscreenW\` aus der \`shimgvw.dll\` aufruft, um das vertraute Vollbild-Bilderlebnis zurückzubringen.

Wenn Ihrer Systemversion die \`shimgvw.dll\` fehlt (häufig in einigen Lite- oder N-Editionen), finden Sie kompatible Versionen im Verzeichnis \`DLL/\` dieses Projekts.

## Verwendung

\`\`\`powershell
PhotoViewer.exe "C:\\Pictures\\photo.jpg"
PhotoViewer.exe
\`\`\`

## Build

Anforderungen:
- Windows 10/11
- CMake 3.16+
- MinGW-w64 oder MSVC mit C++17-Unterstützung

\`\`\`powershell
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

Ergebnis: \`release/PhotoViewer.exe\`

## Unterstützte Formate

BMP, JPG, JPEG, PNG, GIF, TIF, TIFF, ICO, WMF, EMF

## Lizenz

MIT`
  },
  "portable-app-sync": {
    title: "Portable App Sync",
    subtitle: "A utility designed for keeping portable applications synchronized across multiple systems.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "1",
    license: "MIT",
    github: "https://github.com/Almanex/Portable-App-Sync",
    image: "images/projects/portable-app-sync.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# PAS (Portable App Sync)

**A portable utility to automate backup and restore of installed Windows applications**

- Automatic logging of all operations
- Portable — no installation required, single executable file
- Modern Fluent UI — styled with WPF-UI 4.3.0, supporting Light/Dark themes and system theme matching
- Smart filtering — by default indexes only user applications (with option to show hidden system components)
- Detailed info — background loading of official descriptions and human-readable names

## Technologies

- .NET 10.0 — modern development platform
- WPF & WPF-UI (v4.3.0) — Fluent design system and modern controls
- Winget — Windows Package Manager for package management
- MVVM — architectural pattern for separation of logic and presentation

## System Requirements

- OS: Windows 10 (version 1809+) or Windows 11
- Winget: Must be installed (usually pre-installed in Windows 11)
- .NET Runtime: Not required (self-contained build)

## Usage

### Creating a Backup

1. Run \`PAS.exe\`
2. Wait for system scanning to complete (only user desktop applications are indexed)
3. Select the applications you want to save
   - The filter [All Visible / Available Offline / Online Fallback / Excluded by Default] helps quickly check what will go into the offline package, fallback script, or be excluded
4. Select export mode:
   - Online Script — creates a \`.bat\` or \`.ps1\` file for auto-installation via winget (recommended)
   - Offline Package — creates a hybrid set: downloads available distributions and adds an online fallback script for unsupported applications if necessary
5. Click the export button and specify the save location
6. After completion, use the summary of the last export and the [Open Export Folder] button

### Restoring Applications

#### Online Script Mode
1. Copy the created \`RestoreApps.bat\` or \`RestoreApps.ps1\` file to the new system
2. Run the file as administrator
3. Wait for all applications to be installed automatically

#### Offline Package Mode
1. Copy the folder with downloaded distributions to the new system
2. Run \`install_all.bat\` as administrator
3. If \`RestoreOnlineFallback.bat\` was created, run it after offline installation on a machine with internet access
4. Applications available for offline will be installed from local files, while unsupported ones will be delivered via \`winget install\`

## Building from Source

### Development Requirements

- .NET 10 SDK
- Visual Studio 2022 or JetBrains Rider (optional)

### Build Commands

\`\`\`powershell
# Clone the repository
git clone https://github.com/Almanex/Almanex-PAS_Portable-App-Sync.git
cd PAS

# Build the project
dotnet build

# Run the application
dotnet run

# Create a portable executable (single file)
dotnet publish -c Release
\`\`\`

The final executable file will be located in \`dist\\\\PAS.exe\`

## Project Structure

\`\`\`text
PAS/
├── Models/              # Data models
│   ├── InstalledApp.cs
│   ├── ExportMode.cs
│   ├── ExportResult.cs
│   └── WingetExportModels.cs
├── Services/            # Business logic
│   ├── WingetService.cs
│   ├── SystemScanService.cs
│   ├── ScriptGeneratorService.cs
│   ├── DownloadService.cs
│   ├── LoggingService.cs
│   ├── CacheService.cs
│   └── OfflineCompatibilityService.cs
├── ViewModels/          # ViewModels
│   ├── MainViewModel.cs
│   └── RelayCommand.cs
├── Views/               # UI views
│   ├── MainWindow.xaml
│   ├── MainWindow.xaml.cs
│   ├── HelpWindow.xaml
│   └── HelpWindow.xaml.cs
├── Converters/          # XAML converters
│   └── ValueConverters.cs
├── App.xaml             # Entry point
│   └── App.xaml.cs
└── icon.ico             # Application icon
\`\`\`

## Important Notes

### Application Filtering

By default, the application hides:
- Microsoft Store Apps (MSIX packages)
- System Components (Redistributables, Runtimes, drivers)
- Technical Dependencies (WindowsAppRuntime, etc.)

Only user desktop applications installed via \`.exe\` or \`.msi\` installers are displayed in the list.
Check "Show system and hidden applications" to disable this filter.

### Security and Reliability

- Injection Protection: All interaction with Winget CLI passes through strict package ID validation.
- Process Stability: Hard timeouts are implemented for all external calls.
- Data Integrity: Caching system is protected from corrupted data.
- Log Rotation: Automatic log size management prevents uncontrolled disk usage.
- DI Architecture: Dependency Injection ensures service isolation.

## License

This project is distributed under the MIT License.`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# PAS (Portable App Sync)

**Портативная утилита для автоматизации резервного копирования и восстановления установленных приложений Windows**

- Автоматическое логирование всех операций
- Портативность — не требует установки, один исполняемый файл
- Современный Fluent UI — на базе WPF-UI 4.3.0 с поддержкой темной/светлой тем
- Умная фильтрация — скрывает системные компоненты по умолчанию
- Детальная информация — фоновая загрузка описаний пакетов

## Технологии

- .NET 10.0 — современная платформа разработки
- WPF & WPF-UI (v4.3.0) — система дизайна Fluent и современные элементы управления
- Winget — диспетчер пакетов Windows
- MVVM — архитектурный паттерн разделения логики и представления

## Системные требования

- ОС: Windows 10 (версия 1809+) или Windows 11
- Winget: Должен быть установлен в системе
- .NET Runtime: Не требуется (автономная сборка)

## Использование

### Создание резервной копии

1. Запустите \`PAS.exe\`
2. Дождитесь завершения сканирования системы
3. Выберите приложения для сохранения
4. Выберите режим экспорта:
   - Онлайн-скрипт — создает файл \`.bat\` или \`.ps1\` для автоустановки через winget
   - Офлайн-пакет — скачивает дистрибутивы и создает локальный скрипт установки
5. Нажмите кнопку экспорта и укажите путь сохранения

### Восстановление приложений

#### Режим онлайн-скрипта
1. Скопируйте файл \`RestoreApps.bat\` на новую систему
2. Запустите файл от имени администратора

#### Режим офлайн-пакета
1. Скопируйте папку с дистрибутивами на новую систему
2. Запустите \`install_all.bat\` от имени администратора

## Сборка из исходников

### Требования к разработке

- .NET 10 SDK
- Visual Studio 2022 или JetBrains Rider (опционально)

### Команды сборки

\`\`\`powershell
# Клонировать репозиторий
git clone https://github.com/Almanex/Almanex-PAS_Portable-App-Sync.git
cd PAS

# Собрать проект
dotnet build

# Запустить приложение
dotnet run

# Опубликовать как один файл (Portable)
dotnet publish -c Release
\`\`\`

## Лицензия

Этот проект распространяется под лицензией MIT.`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# PAS (Portable App Sync)

**Ein portables Dienstprogramm zur Automatisierung der Sicherung und Wiederherstellung installierter Windows-Anwendungen**

- Automatische Protokollierung aller Vorgänge
- Portabel — keine Installation erforderlich, einzelne ausführbare Datei
- Modernes Fluent UI — basierend auf WPF-UI 4.3.0, unterstützt Hell/Dunkel-Designs
- Intelligente Filterung — filtert standardmäßig Systemkomponenten heraus
- Detaillierte Informationen — Hintergrundladen von Paketbeschreibungen

## Technologien

- .NET 10.0 — moderne Entwicklungsplattform
- WPF & WPF-UI (v4.3.0) — Fluent-Designsystem und moderne Steuerelemente
- Winget — Windows Package Manager
- MVVM — Architekturmuster zur Trennung von Logik und Präsentation

## Systemanforderungen

- Betriebssystem: Windows 10 (Version 1809+) oder Windows 11
- Winget: Muss installiert sein
- .NET-Laufzeitumgebung: Nicht erforderlich (Self-Contained Build)

## Verwendung

### Sicherung erstellen

1. Führen Sie \`PAS.exe\` aus
2. Warten Sie, bis der Systemscan abgeschlossen ist
3. Wählen Sie die Anwendungen aus, die Sie speichern möchten
4. Wählen Sie den Exportmodus:
   - Online-Skript — erstellt eine \`.bat\`- oder \`.ps1\`-Datei zur automatischen Installation via winget
   - Offline-Paket — lädt Setups herunter und erstellt ein lokales Installationsskript
5. Klicken Sie auf die Export-Schaltfläche und wählen Sie den Speicherort

### Anwendungen wiederherstellen

#### Online-Skript-Modus
1. Kopieren Sie die Datei \`RestoreApps.bat\` auf das neue System
2. Führen Sie die Datei als Administrator aus

#### Offline-Paket-Modus
1. Kopieren Sie den Ordner mit den Setups auf das neue System
2. Führen Sie \`install_all.bat\` als Administrator aus

## Build aus Quellcode

### Anforderungen

- .NET 10 SDK
- Visual Studio 2022 oder JetBrains Rider (optional)

### Build-Befehle

\`\`\`powershell
# Repository klonen
git clone https://github.com/Almanex/Almanex-PAS_Portable-App-Sync.git
cd PAS

# Projekt erstellen
dotnet build

# Anwendung ausführen
dotnet run

# Als einzelne Datei veröffentlichen (Portable)
dotnet publish -c Release
\`\`\`

## Lizenz

Dieses Projekt lizenziert unter der MIT-Lizenz.`
  },
  "ru-privatezilla": {
    title: "Ru-Privatezilla",
    subtitle: "Russian localization for Privatezilla, a popular Windows 10 privacy and security setup tool.",
    category: "Translation",
    lang: "C#",
    platform: "Windows 10",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Ru-translation-privatezilla",
    image: "images/projects/ru-privatezilla.jpg",
    readme: `<h1 align="center">
  <br>
  <a href="http://www.builtbybel.com"><img src="https://github.com/builtbybel/privatezilla/blob/master/src/Privatezilla/icon.ico" alt="Privatezilla" width="200"></a>
  <br>
  Privatezilla
  <br>
</h1>
<h4 align="center">Privatezilla is the simplest way to perform a quick privacy and security check of your Windows 10 copy.
</h4>

<p align="center">
<a href="https://github.com/builtbybel/privatezilla/releases/latest" target="_blank">
<img alt="Latest GitHub release" src="https://img.shields.io/github/release/builtbybel/privatezilla.svg?style=flat-square" />
</a>
	
<a href="https://github.com/builtbybel/privatezilla/releases" target="_blank">
<img alt="Downloads on GitHub" src="https://img.shields.io/github/downloads/builtbybel/privatezilla/total.svg?style=flat-square" />
</a>

<a href="https://github.com/builtbybel/privatezilla/commits/master">
<img src="https://img.shields.io/github/last-commit/builtbybel/privatezilla.svg?style=flat-square&logo=github&logoColor=white"
alt="GitHub last commit">
<a href="https://github.com/builtbybel/burnbytes/issues">
<img src="https://img.shields.io/github/issues-raw/builtbybel/privatezilla.svg?style=flat-square&logo=github&logoColor=white"
alt="GitHub issues">   
  
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#download">Download</a> •
  <a href="#community-package">Community package</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a>
</p>

![intro](https://github.com/builtbybel/privatezilla/blob/master/assets/intro.gif)

## About

Privatezilla integrates the most critical Windows 10 privacy settings and allows you to quickly perform a privacy check against these settings. Active settings are marked with the status "Configured" and indicates that your privacy is protected. The inactive ones are declared as "Not configured". All available settings (currently 60) can be enabled as well as disabled.

### System Requirements

- Windows 10 (supports 1809 - 2004)
- .NET Framework 4.5

## Download

- (GitHub) [Download](https://github.com/builtbybel/privatezilla/releases)
- (Mirror on my site) [Download](https://www.builtbybel.com/privatezilla)

## Community package
### For advanced users only!

The community package for Privatezilla adds support for several advanced scripting features based upon PowerShell, e.g.
- Removal of specific pre-installed apps
- Uninstall of OneDrive 
- Unping Startmenu tiles 
- Disable telemetry of third-party apps (E.g. CCleaner, Firefox, Dropbox, Microsoft Office)
- Removal of Windows Defender (NOT recommended! I can highly recommend using Windows Defender on consumer versions of Windows 10)
- Blocking telemetry via firewall and host files. Rules are provided by [crazy-max/WindowsSpyBlocker](https://github.com/crazy-max/WindowsSpyBlocker)
- Support for all-in-one PowerShell debloating script [Windows10Debloater.ps1](https://github.com/Sycnex/Windows10Debloater) 
- New automation templates					  

All objects (templates and scripts) included can be viewed [here](https://github.com/builtbybel/privatezilla/tree/master/scripts)

### How-to Install
* **[Download](https://github.com/builtbybel/privatezilla/blob/master/scripts/packages.zip?raw=true)** the latest \`packages.zip\` file.
* **Extract the package** to Privatezilla installation directory
* **Restart Privatezilla**

### Intro of community package after Installing

![community-package](https://github.com/builtbybel/privatezilla/blob/master/assets/community-pkg.gif)

## Credits

Since release 0.30 this project is partly based upon 

- https://github.com/t-richards/chemo

More infos [here](https://www.builtbybel.com/blog/12-company-announcements/39-spydish-becomes-privatezilla-open-source)

This software uses the following packages:

- [Icon by bokehlicia](https://iconarchive.com/show/captiva-icons-by-bokehlicia/preferences-system-icon.html)

## Support
If you like the tool please consider supporting me via PayPal.

You can [buy me a coffee or donut, some banana, a shirt, Taycan or Tesla, the stars or whatever you want here](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=donate@builtbybel.com&lc=US&item_name=%20Builtbybel&no_note=0&cn=&currency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted)

---

> [builtbybel](https://www.builtbybel.com) &nbsp;&middot;&nbsp;
> GitHub [@builtbybel](https://github.com/builtbybel) &nbsp;&middot;&nbsp;
> Twitter [@builtbybel](https://twitter.com/builtbybel)
`
  },
  "mushroom-spot": {
    title: "MushroomSpot",
    subtitle: "Android application for mushroom foragers to catalog and discover spotting sites.",
    category: "Android App",
    lang: "Kotlin",
    platform: "Android",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/MushroomSpot",
    image: "images/projects/mushroom-spot.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android application for mushroom foragers to catalog and discover spotting sites**

An Android application for planning, tracking, and documenting mushroom foraging trips. The app provides high-precision location tracking (3-8 meters), intelligent GPS filtering, and a modern user interface.

## Key Features

- Trip management: Create, list, and view trip details with auto GPS tracking
- Mushroom logging: Add findings with photos, notes, and high-precision GPS coordinates
- GPS signal indicators: Blue (Excellent), Orange (Good/Acceptable), Red (Poor - saving blocked)
- Export & Import: Full data structure support in JSON and CSV formats
- Google Maps Integration: View routes and navigation waypoints (up to 23 waypoints)

## Technology Stack

- Language: Kotlin (1.9.0)
- UI Framework: Jetpack Compose (1.5.0)
- Database: Room Database (local storage)
- Concurrency: Kotlin Coroutines & Flow
- Dependency Injection: Hilt

## System Requirements

- OS: Android 7.0 (API level 24) or higher
- Hardware: GPS module and Camera

## Building from Source

\`\`\`bash
# Clone the repository
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Build debug APK
./gradlew assembleDebug

# Install on device
./gradlew installDebug
\`\`\`

## License

This project is licensed under the MIT License.`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android-приложение для грибников для каталогизации и поиска мест находок**

Мобильное приложение для планирования, отслеживания и документирования поездок за грибами. Обеспечивает высокоточное определение местоположения (3-8 метров), интеллектуальную фильтрацию GPS-данных и современный интерфейс.

## Основные функции

- Управление поездками: Создание, просмотр списка и деталей поездок с автоматическим GPS-трекингом
- Учет грибов: Добавление находок с фото, заметками и высокоточными координатами
- Индикация точности GPS: Синий (Отличная), Оранжевый (Хорошая), Красный (Низкая - сохранение заблокировано)
- Экспорт и импорт: Поддержка структуры данных в форматах JSON и CSV
- Интеграция с картами: Маршруты в Google Maps с промежуточными точками навигации

## Технологический стек

- Язык: Kotlin (1.9.0)
- UI-платформа: Jetpack Compose (1.5.0)
- База данных: Room Database (локальное хранение)
- Асинхронность: Kotlin Coroutines & Flow
- Внедрение зависимостей: Hilt

## Системные требования

- ОС: Android 7.0 (API 24) или выше
- Устройство: с модулем GPS и камерой

## Сборка проекта

\`\`\`bash
# Клонирование репозитория
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Сборка debug APK
./gradlew assembleDebug

# Установка на подключенное устройство
./gradlew installDebug
\`\`\`

## Лицензия

Этот проект распространяется под лицензией MIT.`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android-Anwendung für Pilzsammler zur Katalogisierung und Entdeckung von Fundorten**

Eine mobile Android-Anwendung zur Planung, Verfolgung und Dokumentation von Pilzsammelrunden. Die App bietet hochpräzise Standortbestimmung (3-8 Meter), intelligente GPS-Filterung und eine moderne Benutzeroberfläche.

## Hauptfunktionen

- Runden-Management: Erstellen, Auflisten und Anzeigen von Runden-Details mit automatischem GPS-Tracking
- Pilz-Protokollierung: Fundorte mit Fotos, Notizen und hochpräzisen GPS-Koordinaten markieren
- GPS-Signalindikatoren: Blau (Ausgezeichnet), Orange (Gut/Akzeptabel), Rot (Schlecht - Speichern blockiert)
- Export & Import: Volle Unterstützung der Datenstruktur in den Formaten JSON und CSV
- Google Maps Integration: Routenverlauf und Navigations-Wegpunkte anzeigen

## Technologie-Stack

- Sprache: Kotlin (1.9.0)
- UI-Framework: Jetpack Compose (1.5.0)
- Datenbank: Room Database (lokaler Speicher)
- Asynchronität: Kotlin Coroutines & Flow
- Dependency Injection: Hilt

## Systemanforderungen

- Betriebssystem: Android 7.0 (API-Level 24) oder höher
- Hardware: GPS-Modul und Kamera

## Build aus Quellcode

\`\`\`bash
# Repository klonen
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Debug-APK erstellen
./gradlew assembleDebug

# Auf Gerät installieren
./gradlew installDebug
\`\`\`

## Lizenz

Dieses Projekt lizenziert unter der MIT-Lizenz.`
  },
  "gemma-local-desktop": {
    title: "Gemma Local Desktop",
    subtitle: "A local Windows desktop helper chat interface for Google's Gemma LLM.",
    category: "AI Tool",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Gemma-Local-Desktop-",
    image: "images/projects/gemma-local-desktop.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Gemma Local Desktop

Native Windows AI assistant and coding workspace. Powered by Google's Gemma via llama.cpp. Works 100% offline without API keys.

## Experimental Project Status

This is an experimental project designed to push the boundaries of local AI development on Windows.

### Model Performance Notes

- Small Models (E2B / E4B): Good for quick testing and low-latency interaction.
- Large Models (26B / 31B): Perfect for complex coding, logic, and reasoning on consumer hardware.

## Key Features

- Chat Mode: Optimized for dialogue and step-by-step reasoning.
- Build Mode: Specialized workspace for generating code and web apps with a live preview.
- One-Click Templates: Ready-to-use starters like Tetris and weather dashboards.
- GPU Acceleration: NVIDIA GPU detection with CUDA offloading for large models.
- Zero Config: Automated setup downloads llama.cpp and models on first startup.

## Requirements

- Windows 10/11 (64-bit)
- NVIDIA GPU (optional, for CUDA acceleration) or CPU
- 4GB+ RAM for 2B model

## Quick Start

\`\`\`powershell
# Ensure .NET 10 SDK is installed
cd GemmaChatCsharp
dotnet run
\`\`\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Gemma Local Desktop

Нативный ИИ-ассистент и среда разработки для Windows. Работает локально на базе Google Gemma и llama.cpp. Полный офлайн, ключи API не требуются.

## Статус проекта

Экспериментальный проект для локального запуска больших языковых моделей на потребительском железе Windows.

## Основные функции

- Режим чата: Оптимизирован для диалогов и рассуждений.
- Режим сборки: Специальное рабочее пространство для генерации кода с живым превью.
- Готовые шаблоны: Мгновенный запуск мини-игр и виджетов.
- GPU-ускорение: Поддержка NVIDIA CUDA для быстрого инференса.
- Быстрый старт: Автоматическое скачивание llama.cpp и весов моделей.

## Системные требования

- Windows 10/11 (64-bit)
- Видеокарта NVIDIA (опционально, для ускорения) или CPU
- От 4 ГБ ОЗУ

## Быстрый запуск

\`\`\`powershell
cd GemmaChatCsharp
dotnet run
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Gemma Local Desktop

Nativer Windows KI-Assistent und Coding-Workspace. Unterstützt durch Google Gemma via llama.cpp. Funktioniert 100% offline ohne API-Keys.

## Projektstatus

Experimentelles Projekt zur lokalen Ausführung von LLMs auf Windows-Consumer-Hardware.

## Hauptfunktionen

- Chat-Modus: Optimiert für Dialoge und logische Schlussfolgerungen.
- Build-Modus: Arbeitsbereich zur Codegenerierung mit Live-Vorschau.
- One-Click-Vorlagen: Sofortiger Start von Mini-Spielen und Dashboards.
- GPU-Beschleunigung: NVIDIA CUDA-Unterstützung für große Modelle.
- Zero Config: Automatisches Herunterladen von llama.cpp und Modellen beim ersten Start.

## Systemanforderungen

- Windows 10/11 (64-bit)
- NVIDIA-Grafikkarte (optional) oder CPU
- Mindestens 4 GB RAM

## Schnellstart

\`\`\`powershell
cd GemmaChatCsharp
dotnet run
\`\`\`

## Lizenz

MIT`
  },
  "icoboo": {
    title: "icoboo",
    subtitle: "A simple icon extraction and image to ICO conversion utility for Windows developers.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/icoboo",
    image: "images/projects/icoboo.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# IconForge

**Native icon generator for Windows 11 styled in Fluent design**

Lightweight Windows utility built with WinUI 3 (Windows App SDK) and C# to generate Windows icon packs, modern assets, and Android adaptive icons from a single PNG/SVG source.

## Key Features

- Windows Icon Generation: Creates multi-format .ico files (16px to 256px) with automatic sharpening filters for small sizes.
- Windows Modern Assets: Exports scaled PNG assets (Square44x44, Square150x150, StoreLogo) for modern app manifests.
- Android Icons: Generates mipmap folder structures for adaptive and legacy round icons.
- Windows 11 Fluent UI: Features Mica Alt material, light/dark themes, and interactive drag-and-drop zones.
- Shell Integration: Right-click context menu integration via registry keys (no admin rights required).

## Technology Stack

- Language: C# (.NET 8.0)
- UI Platform: WinUI 3 (Windows App SDK 2.2.0)
- Graphics: SkiaSharp (Lanczos3 resize) and Svg.Skia (vector rasterization)

## Getting Started

### Requirements
- .NET 8.0 SDK or newer

### Build & Run
\`\`\`bash
git clone https://github.com/Almanex/icoboo.git
cd icoboo
dotnet build
dotnet run
\`\`\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# IconForge

**Нативный генератор иконок для Windows 11 в стиле Fluent**

Легкая утилита Windows на базе WinUI 3 (Windows App SDK) и C# для генерации пакетов иконок Windows (.ico), современных ассетов приложений и адаптивных иконок Android из одного исходного изображения PNG или SVG.

## Основные возможности

- Генерация иконок Windows: Создание мультиформатных .ico файлов (от 16px до 256px) с авто-резкостью для мелких размеров.
- Современные ассеты Windows: Экспорт PNG-ассетов во всех системных масштабах для манифестов приложений.
- Иконки Android: Создание структуры папок mipmap для адаптивных и классических круглых значков.
- Интерфейс Windows 11: Эффект Mica Alt, поддержка темной/светлой тем, Drag-and-Drop.
- Интеграция в систему: Встраивание пункта генерации в контекстное меню проводника Windows без прав администратора.

## Стек технологий

- Язык: C# (.NET 8.0)
- UI-платформа: WinUI 3 (Windows App SDK 2.2.0)
- Графика: SkiaSharp (Lanczos3 ресайз) + Svg.Skia (векторная отрисовка)

## Сборка и запуск

### Требования
- .NET 8.0 SDK или новее

### Команды
\`\`\`bash
git clone https://github.com/Almanex/icoboo.git
cd icoboo
dotnet build
dotnet run
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# IconForge

**Nativer Symbolgenerator für Windows 11 im Fluent-Design**

Leichtes Windows-Dienstprogramm, entwickelt mit WinUI 3 (Windows App SDK) und C#, um Windows-Symbolpakete, moderne Assets und adaptive Android-Symbole aus einem einzigen PNG/SVG-Bild zu erstellen.

## Hauptfunktionen

- Windows ICO-Generierung: Erstellt Multiformat-.ico-Dateien (16px bis 256px) mit automatischem Schärfefilter für kleine Symbole.
- Windows App Assets: Exportiert skalierte PNG-Grafiken für moderne App-Manifeste.
- Android-Symbole: Erstellt mipmap-Ordnerstrukturen für adaptive und klassische runde Symbole.
- Windows 11 Design: Mica-Alt-Effekt, Unterstützung von hellem/dunklem System-Design, Drag-and-Drop.
- Shell-Integration: Kontextmenü-Eintrag im Windows Explorer ohne Administratorrechte.

## Technologie-Stack

- Sprache: C# (.NET 8.0)
- UI-Plattform: WinUI 3 (Windows App SDK 2.2.0)
- Grafik: SkiaSharp (Lanczos3) und Svg.Skia (Vektor-Rasterung)

## Build & Ausführung

### Anforderungen
- .NET 8.0 SDK oder neuer

### Befehle
\`\`\`bash
git clone https://github.com/Almanex/icoboo.git
cd icoboo
dotnet build
dotnet run
\`\`\`

## Lizenz

MIT`
  },
  "lingospaced": {
    title: "LingoSpaced",
    subtitle: "An Android flashcard application utilizing spaced repetition for language learning.",
    category: "Android App",
    lang: "Kotlin",
    platform: "Android",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/LingoSpaced-",
    image: "images/projects/lingospaced.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Android flashcard application utilizing spaced repetition for language learning**

LingoSpaced is a mobile application for learning German on Android 16 (API 36). It uses an automated spaced repetition algorithm that adapts to user memory based on implicit signals like response speed, mistakes, and hints, without manual difficulty ratings.

## UI/UX Design

The interface follows Taste Rules standards, featuring a fluid glassmorphism effect, spring physics animations, and a dynamic HSL color palette adapting to light/dark themes.

## Quick Start

### Requirements
- Android Studio (Koala / Ladybug or newer)
- Android SDK 36 (Android 16)
- JDK 17

### Build & Run
\`\`\`powershell
# Set JDK environment variable
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Run unit tests
.\\gradlew.bat test

# Build debug APK
.\\gradlew.bat assembleDebug
\`\`\`

Output APK path: \`app/build/outputs/apk/debug/app-debug.apk\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Мобильное приложение для изучения немецкого языка с умным интервальным повторением**

LingoSpaced — мобильное приложение под Android 16 (API 36) для эффективного запоминания немецких слов. В основе лежит алгоритм интервальных повторений, адаптирующийся под память пользователя на основе скорости ответа, опечаток и ошибок без ручной оценки сложности.

## Дизайн UI/UX

Интерфейс спроектирован по канонам нео-брутализма и Glassmorphism: эффект жидкого матового стекла, анимации на основе физики пружин и динамическая HSL-палитра, адаптирующаяся под светлую и темную темы.

## Быстрый старт

### Требования
- Android Studio (Koala / Ladybug или новее)
- Android SDK 36 (Android 16)
- JDK 17

### Команды консоли
\`\`\`powershell
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Запуск тестов
.\\gradlew.bat test

# Сборка APK
.\\gradlew.bat assembleDebug
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Android-Karteikarten-App mit Spaced Repetition zum Sprachenlernen**

LingoSpaced is eine mobile App zum Deutschlernen für Android 16 (API 36). Sie nutzt einen automatischen Spaced-Repetition-Algorithmus, der sich anhand impliziter Signale (Antwortgeschwindigkeit, Fehler, Nutzung von Hinweisen) an das Gedächtnis des Nutzers anpasst.

## UI/UX-Design

Das Interface folgt modernen Design-Standards und bietet Glassmorphismus-Effekte, Physik-basierte Animationen sowie eine dynamische HSL-Farbpalette für helle und dunkle System-Designs.

## Schnellstart

### Anforderungen
- Android Studio (Koala / Ladybug oder neuer)
- Android SDK 36 (Android 16)
- JDK 17

### Build & Test
\`\`\`powershell
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Tests ausführen
.\\gradlew.bat test

# Debug-APK erstellen
.\\gradlew.bat assembleDebug
\`\`\`

## Lizenz

MIT`
  },
  "rokey": {
    title: "Rokey",
    subtitle: "A lightweight global hotkey daemon and shell shortcut engine for Windows.",
    category: "System Tool",
    lang: "C++",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Rokey",
    image: "images/projects/rokey.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Roke

**Keyboard layout converter utility styled in Windows 11 design**

Roke is a system utility to instantly convert selected text from incorrect keyboard layout to the correct one (EN <-> RU) in any active Windows text field.

## Architecture

To save system resources, the project is split into two independent components:
- Roke.exe: A lightweight background process (uses ~1.5 MB RAM) written in pure Win32 C++ that monitors keyboard layout hooks and manages the system tray icon.
- RokeSettings.exe: A Fluent settings window built with WinUI 3 (Windows App SDK) and C++/WinRT. It opens on demand from the tray and exits completely after saving settings, freeing system memory.

## Usage

1. Select text with incorrect layout in any application.
2. Press the hotkey combination (default: Ctrl+Shift+Q).
3. The text is automatically replaced with the correct layout translation.

Examples:
- \`ghbdtn\` <-> \`привет\`
- \`rhjcnf\` <-> \`работа\`

## Building from Source

### Requirements
- Visual Studio 2022 with Desktop Development with C++ workload.
- Windows 11 SDK (10.0.26100.0 or newer).

### Build Script
\`\`\`cmd
.\\build.bat
\`\`\`
The script resolves NuGet dependencies (Windows App SDK, C++/WinRT) and builds the application in Release x64 mode. Output binaries are saved to \`bin\\Release\\\`.

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Roke

**Утилита автоматической конвертации раскладки клавиатуры в стиле Windows 11**

Быстрый перевод выделенного текста из неверной раскладки клавиатуры в нужную (EN ↔ RU) в любом текстовом поле Windows.

## Архитектура проекта

Проект разделен на два компонента для оптимизации ресурсов:
- Roke.exe — фоновый процесс (~1.5 МБ ОЗУ) на чистом Win32 C++, отслеживающий глобальный хук клавиатуры и управляющий иконкой трея.
- RokeSettings.exe — современное окно настроек на WinUI 3 (Windows App SDK) и C++/WinRT, которое запускается по запросу и закрывается после сохранения настроек, освобождая ОЗУ.

## Использование

1. Выделите текст с неверной раскладкой.
2. Нажмите комбинацию клавиш (по умолчанию Ctrl+Shift+Q).
3. Текст автоматически заменится на правильный.

## Сборка проекта

### Требования
- Visual Studio 2022 с нагрузкой «Разработка классических приложений на C++».
- Windows 11 SDK (10.0.26100.0 или новее).

### Сборка
\`\`\`cmd
.\\build.bat
\`\`\`
Скрипт скомпилирует проект в режиме Release x64. Исполняемые файлы будут сохранены в папке \`bin\\Release\\\`.

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Roke

**Tastaturlayout-Konverter im Windows 11 Design**

Roke ist ein Systemprogramm zum sofortigen Konvertieren von markiertem Text aus einem falschen Tastaturlayout in das richtige (EN <-> RU) in jedem aktiven Windows-Textfeld.

## Architektur

Um Systemressourcen zu sparen, ist das Projekt in zwei Komponenten unterteilt:
- Roke.exe: Ein leichtgewichtiger Hintergrundprozess (~1,5 MB RAM) in reinem Win32 C++, der Tastatur-Hooks überwacht und das System-Tray-Symbol verwaltet.
- RokeSettings.exe: Ein modernes Einstellungsfenster, entwickelt mit WinUI 3 (Windows App SDK) und C++/WinRT. Es wird bei Bedarf geöffnet und nach dem Speichern geschlossen, um Arbeitsspeicher freizugeben.

## Verwendung

1. Markieren Sie fehlerhaft eingegebenen Text.
2. Drücken Sie den Hotkey (Standard: Ctrl+Shift+Q).
3. Der Text wird automatisch übersetzt und ersetzt.

## Build aus Quellcode

### Anforderungen
- Visual Studio 2022 mit C++-Desktopentwicklung.
- Windows 11 SDK (10.0.26100.0 oder neuer).

### Ausführung
\`\`\`cmd
.\\build.bat
\`\`\`
Das Skript lädt Abhängigkeiten und kompiliert die Anwendung im Release-x64-Modus unter \`bin\\Release\\\`.

## Lizenz

MIT`
  },
  "screentation-v2": {
    title: "Screentation V2",
    subtitle: "A screenshot organization, capture, and annotation tool for Windows desktops.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Screentation-V2",
    image: "images/projects/screentation-v2.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Desktop screenshot capture, annotation, and batch-saving tool**

Screentation is a lightweight and modern desktop application for screenshot annotation and batch export, designed for technical writers, developers, and QA engineers. The app intercepts new screenshots from the clipboard and lets you add borders, arrows, steps, and blur private data in a few clicks.

## Key Features

- Clipboard Auto-Capture: Instantly loads screenshots from clipboard or supports drag-and-drop.
- Annotation Tools (Konva.js): Rectangles (hollow/filled), Arrows, step numbers (auto-incrementing), and high-quality blur.
- Smart Eraser: Clone stamp utility to clean text or icons while restoring the original background behind them.
- Batch Export: Exports screenshots to PNG, JPEG, or WebP with customizable quality and filename naming templates.
- Tray Support: Minimizes to system tray and continues background clipboard monitoring.

## Technology Stack

- Core Shell: Electron, Node.js
- Frontend Framework: React, TypeScript, Vite
- Canvas Library: Konva.js (react-konva)
- Image Processing: sharp (for high-speed server-side compression)

## Quick Start

### Requirements
- Node.js (LTS 18+)
- Git

### Build & Run
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

### Create Installer
\`\`\`bash
npx electron-builder --win
\`\`\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Инструмент для захвата, аннотирования и пакетного сохранения скриншотов**

Screentation — легкое десктопное приложение для редактирования скриншотов и их пакетного экспорта. Полезно для технических писателей, тестировщиков и разработчиков при создании инструкций и баг-репортов. Программа перехватывает скриншоты из буфера обмена и позволяет быстро наложить рамки, стрелки, нумерацию шагов или скрыть личные данные.

## Основные возможности

- Автозахват буфера обмена: Мгновенный импорт скриншотов при создании или через Drag-and-Drop.
- Графические аннотации (Konva.js): Рамки, указательные стрелки, маркеры шагов с автоувеличением номера, размытие.
- Умный ластик: Инструмент штампа для стирания конфиденциальных данных с восстановлением текстуры фона.
- Пакетный экспорт: Сохранение в PNG, JPEG, WebP с настройкой качества сжатия.
- Фоновый режим: Работа из системного трея Windows.

## Технологический стек

- Ядро: Electron, Node.js
- Фронтенд: React, TypeScript, Vite
- Графика: Konva.js (react-konva) для холста
- Обработка изображений: sharp для сжатия в главном процессе

## Быстрый старт

### Требования
- Node.js (LTS 18+)
- Git

### Команды сборки
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Desktop-Tool zum Erfassen, Kommentieren und Stapelspeichern von Screenshots**

Screentation ist eine leichtgewichtige Desktop-Anwendung zur Screenshot-Annotation und zum Stapel-Export, entwickelt für technische Redakteure, Entwickler und QA-Ingenieure. Die App erfasst Screenshots aus der Zwischenablage und ermöglicht das Hinzufügen von Rahmen, Pfeilen, Schrittnummern und Weichzeichnern.

## Hauptfunktionen

- Automatischer Capture: Lädt Screenshots direkt aus der Zwischenablage oder per Drag-and-Drop.
- Zeichenwerkzeuge (Konva.js): Rahmen, Pfeile, automatisch inkrementierende Schrittnummern und Weichzeichner.
- Intelligenter Radierer: Kopierstempel-Werkzeug zum Entfernen vertraulicher Daten unter Wiederherstellung des Hintergrunds.
- Stapel-Export: Speichern in PNG, JPEG oder WebP mit Qualitätskontrolle.
- Tray-Modus: Minimiert sich im Windows-System-Tray und läuft im Hintergrund weiter.

## Technologie-Stack

- Kern: Electron, Node.js
- Frontend: React, TypeScript, Vite
- Canvas-Bibliothek: Konva.js (react-konva)
- Bildkomprimierung: sharp (für serverseitige Verarbeitung)

## Schnellstart

### Anforderungen
- Node.js (LTS 18+)
- Git

### Befehle
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

## Lizenz

MIT`
  },
  "shortcutdock": {
    title: "ShortcutDock",
    subtitle: "A simple desktop shortcut organizer dock utility for Windows users.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/ShortcutDock",
    image: "images/projects/shortcutdock.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# ShortcutDock

**Customizable shortcut dock panel for Windows 11 desktops**

A desktop dock panel featuring Mica/Acrylic/transparent backdrops, automatic vertical/horizontal orientation layout, Drag-and-Drop, AppBar reservation workspace, and system tray integration.

## Key Features

- Desktop Panel: Drag-and-drop .exe/.lnk files directly to add.
- Dynamic Orientation: Switches between vertical (left/right screen positions) and horizontal (top/bottom).
- Modern Backdrop: Support for Mica and Acrylic blur effects in sync with the active Windows system theme.
- Auto-Hide: Hides the panel behind screen borders to maximize workspace when not focused.
- Hover Zoom & Indicators: macOS-style icon zoom animation on hover, and active app indicators.

## Technology Stack

- Language: C# (.NET 8.0)
- UI Library: WPF + WPF-UI 4.3.0
- MVVM Toolkit: CommunityToolkit.Mvvm
- Win32 API: P/Invoke integration (user32, dwmapi, shell32)

## Getting Started

### Requirements
- .NET 8.0 SDK or newer

### Build & Run
\`\`\`bash
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock
dotnet build
dotnet run
\`\`\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# ShortcutDock

**Кастомная панель быстрого запуска ярлыков для Windows 11**

Настольная dock-панель быстрого запуска с поддержкой эффектов размытия Mica/Acrylic, автоматическим изменением ориентации (вертикальная/горизонтальная), поддержкой Drag-and-Drop и интеграцией в системный трей.

## Основные возможности

- Добавление ярлыков: Drag-and-Drop файлов .exe/.lnk прямо на панель.
- Автоориентация: Автоматический поворот панели при закреплении на разных сторонах экрана.
- Эффекты Mica/Acrylic: Интеграция с системным оформлением и автоматическая смена темной/светлой тем.
- Скрытие (Auto-Hide): Сворачивание панели за границы экрана для экономии места.
- Анимация при наведении: Плавное увеличение значков в стиле macOS.

## Стек технологий

- Язык: C# (.NET 8.0)
- UI-фреймворк: WPF + WPF-UI 4.3.0
- Паттерн MVVM: CommunityToolkit.Mvvm
- Системные вызовы: P/Invoke (user32.dll, dwmapi.dll, shell32.dll)

## Сборка и запуск

### Требования
- .NET 8.0 SDK или новее

### Команды
\`\`\`bash
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock
dotnet build
dotnet run
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# ShortcutDock

**Anpassbare Shortcut-Dock-Leiste für Windows 11**

Eine Desktop-Dock-Leiste mit Unterstützung für Mica/Acryl/Transparenzeffekte, automatischer Ausrichtung, Drag-and-Drop, AppBar-Arbeitsplatzreservierung und System-Tray-Integration.

## Hauptfunktionen

- Desktop-Panel: Drag-and-Drop von .exe/.lnk-Dateien zum schnellen Hinzufügen.
- Dynamische Ausrichtung: Wechselt automatisch zwischen vertikal und horizontal je nach Bildschirmrand.
- Modernes Design: Mica- und Acryl-Effekte, synchronisiert mit dem Windows-Design.
- Auto-Hide: Blendet das Panel bei Inaktivität aus, um Arbeitsbereich freizugeben.
- Hover-Effekte: Mac-Style-Symbolvergrößerung und aktive Programmindikatoren.

## Technologie-Stack

- Sprache: C# (.NET 8.0)
- UI-Bibliothek: WPF + WPF-UI 4.3.0
- MVVM: CommunityToolkit.Mvvm
- Win32 API: P/Invoke (user32, dwmapi, shell32)

## Build & Ausführung

### Anforderungen
- .NET 8.0 SDK oder neuer

### Befehle
\`\`\`bash
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock
dotnet build
dotnet run
\`\`\`

## Lizenz

MIT`
  },
  "shelter-fork": {
    title: "Shelter Fork",
    subtitle: "A security-focused sandbox app fork for Android devices.",
    category: "Security",
    lang: "Java",
    platform: "Android",
    stars: "0",
    license: "GPL-3.0",
    github: "https://github.com/Almanex/Shelter-fork",
    image: "images/projects/shelter-fork.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Security-focused application sandbox fork for Android devices**

Shelter is an open-source app that leverages the Work Profile feature of Android to provide an isolated space where you can clone or install apps.

## Android 16 Optimizations

This fork includes specific adaptations for Android 16 (API 36) and Pixel 9a devices:
- Edge-to-Edge UI: Fully compliant with Android 16 mandatory edge-to-edge requirements.
- Material You: Dynamic color styling and themes.
- Navigation: Native Predictive Back gesture navigation animations.
- Display compatibility: Layout fine-tuning for Pixel 9a displays.

## Key Features

- App Isolation: Install apps inside a work profile to prevent sandbox leaks.
- Freeze Apps: Suspend background activity of isolated apps when not actively in use.
- Multi-Account: Run two separate copies of the same application on a single device.
- Unprivileged API: Operates safely without root or ADB privilege abuse.

## Installation & Uninstall

To install, build from source using Android 16 SDK.
To uninstall, delete the Work Profile in Android Settings first, then uninstall the Shelter app normally.

## License

GPL-3.0`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Форк изолированной песочницы приложений для Android с фокусом на безопасности**

Shelter — приложение с открытым исходным кодом, использующее встроенную функцию «Рабочий профиль» (Work Profile) в Android для создания изолированного пространства под установку или клонирование приложений.

## Оптимизации для Android 16

Этот форк адаптирован для Android 16 (API 36) и смартфонов Pixel 9a:
- Безрамочный интерфейс (Edge-to-Edge): Полная совместимость с обязательными требованиями Android 16.
- Дизайн Material You: Адаптивная палитра цветов под обои системы.
- Улучшенная навигация: Поддержка плавных жестов назад (Predictive Back).
- Совместимость с экранами: Оптимизация верстки под дисплеи Pixel 9a.

## Основные возможности

- Изоляция приложений: Установка приложений в отдельный рабочий профиль для защиты личных данных.
- Заморозка программ: Приостановка фоновой активности изолированных приложений.
- Два аккаунта: Запуск двух независимых копий одного приложения на устройстве.
- Безопасность: Работает через стандартные API без UAC/root/ADB привилегий.

## Удаление приложения

Чтобы полностью удалить Shelter, сначала удалите рабочий профиль в Настройках системы -> Аккаунты, а затем удалите само приложение Shelter как обычно.

## Лицензия

GPL-3.0`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Sicherheitsorientierter Anwendungs-Sandbox-Fork für Android-Geräte**

Shelter ist eine Open-Source-App, die das Work-Profil-Feature von Android nutzt, um einen isolierten Bereich bereitzustellen, in dem Apps installiert oder geklont werden können.

## Android 16 Optimierungen

Dieser Fork enthält spezifische Anpassungen für Android 16 (API 36) und Pixel 9a Geräte:
- Edge-to-Edge UI: Volle Einhaltung der neuen Design-Richtlinien.
- Material You: Dynamische Farbthemen basierend auf dem System-Hintergrundbild.
- Navigation: Unterstützung der Predictive Back Navigation für flüssige Zurück-Gesten.
- Display-Kompatibilität: Layout-Anpassungen für Pixel 9a Displays.

## Hauptfunktionen

- App-Isolation: Apps im Arbeitsprofil installieren, um Datenabfluss zu verhindern.
- Apps einfrieren: Pausiert Hintergrundaktivitäten isolierter Apps bei Nichtgebrauch.
- Multi-Account: Führen Sie zwei Kopien derselben App auf einem Gerät aus.
- Keine Root-Rechte: Nutzt sichere Standard-APIs ohne Root- oder ADB-Eingriffe.

## Deinstallation

Um Shelter zu deinstallieren, löschen Sie zuerst das Arbeitsprofil in den Android-Einstellungen und deinstallieren Sie dann die Shelter-App.

## Lizenz

GPL-3.0`
  }
};
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
