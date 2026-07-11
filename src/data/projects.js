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
    readme: `# Shell Image Viewer

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

MIT
# Classic-Windows-image-viewer-for-Windows-11
`
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
    readme: `# PAS (Portable App Sync)

**A portable utility to automate backup and restore of installed Windows applications**

- 📝 **Automatic logging** of all operations
- 🚀 **Portable** — no installation required, single \`.exe\` file
- 🎨 **Modern Fluent UI** — styled with WPF-UI 4.3.0, supporting Light/Dark themes and system theme matching
- 🎯 **Smart filtering** — by default indexes only user applications (with option to show hidden system components)
- ℹ️ **Detailed info** — background loading of official descriptions and human-readable names. If the app name is not yet loaded, the package ID is displayed instead (they are often identical).

🇷🇺 **[Russian version of README / Русская версия](README_RU.md)**

## 🛠️ Technologies

- **.NET 10.0** — modern development platform
- **WPF & WPF-UI (v4.3.0)** — Fluent design system and modern controls
- **Winget** — Windows Package Manager for package management
- **MVVM** — architectural pattern for separation of logic and presentation

## 📥 System Requirements

- **OS**: Windows 10 (version 1809+) or Windows 11
- **Winget**: Must be installed (usually pre-installed in Windows 11)
- **.NET Runtime**: Not required (self-contained build)

## 🚀 Usage

### Creating a Backup

1. Run \`PAS.exe\`
2. Wait for system scanning to complete (only user desktop applications are indexed)
3. Select the applications you want to save
   - The filter **All Visible / Available Offline / Online Fallback / Excluded by Default** helps quickly check what will go into the offline package, fallback script, or be excluded
4. Select export mode:
   - **Online Script** — creates a \`.bat\` or \`.ps1\` file for auto-installation via winget (recommended)
   - **Offline Package** — creates a hybrid set: downloads available distributions and adds an online fallback script for unsupported applications if necessary
5. Click the export button and specify the save location
6. After completion, use the summary of the last export and the **Open Export Folder** button

### Restoring Applications

#### "Online Script" Mode
1. Copy the created \`RestoreApps.bat\` or \`RestoreApps.ps1\` file to the new system
2. Run the file as administrator
3. Wait for all applications to be installed automatically

#### "Offline Package" Mode
1. Copy the folder with downloaded distributions to the new system
2. Run \`install_all.bat\` as administrator
3. If \`RestoreOnlineFallback.bat\` was created, run it after offline installation on a machine with internet access
4. Applications available for offline will be installed from local files, while unsupported ones will be delivered via \`winget install\`

## 🏗️ Building from Source

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

The final \`.exe\` file will be located in \`dist\\PAS.exe\`

## 📂 Project Structure

\`\`\`
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
├── ViewModels/          # MVVM ViewModels
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
├── App.xaml.cs
├── AssemblyInfo.cs
└── icon.ico             # Application icon
\`\`\`

## ⚠️ Important Notes

### Application Filtering

By default, the application hides:
- **Microsoft Store Apps** (MSIX packages: Calculator, Photos, Xbox, etc.)
- **System Components** (Visual C++ Redistributable, .NET Runtime, drivers)
- **Technical Dependencies** (WindowsAppRuntime, VCLibs, etc.)

Only **user desktop applications** installed via \`.exe\` or \`.msi\` installers are displayed in the list.
💡 **If you need hidden packages:** you can instantly disable this filter in the interface by checking *"Show system and hidden applications"*.

Service components and updater packages, such as \`Microsoft Edge Update\`, are excluded from export by default. They don't disappear completely: enable system/hidden apps and select the **Excluded by Default** filter to see what exactly was excluded.

### Winget Check

In older Windows 10 builds, Winget might be missing. Scripts automatically check for its presence and provide instructions for installing App Installer from the Microsoft Store.

### Offline Mode Limitations

**Not all applications support downloading distributions** via \`winget download\`. Examples:
- **Visual Studio Code** (\`Microsoft.VisualStudioCode\`)
- **Git** (\`Git.Git\`)
- **Android Studio** (\`Google.AndroidStudio\`)
- And other applications where manufacturers restricted direct downloading

For such applications, PAS now uses a **hybrid offline mode**:
- ✅ Supported packages are downloaded locally to the selected folder
- ✅ An \`RestoreOnlineFallback.bat\` is automatically created for unsupported packages
- ✅ As a result, export doesn't fail due to these apps: they are marked as \`Skipped\` and moved to the fallback script

Recommended restore order:
1. Run \`install_all.bat\`
2. Then, if it was created, run \`RestoreOnlineFallback.bat\` on a machine with internet

**Recommendation**: Use the "📄 Online Script" mode if you want a single universal scenario without separating into offline and fallback.

### 🛡️ Security and Reliability

The project is designed with a focus on industrial-grade stability and security:

- 🛡️ **Injection Protection**: All interaction with Winget CLI passes through strict package ID validation (\`SafeIdPattern\`). This eliminates the possibility of executing arbitrary commands through app name manipulation.
- ⚙️ **Process Stability**: Hard timeouts (120s) are implemented for all external calls. If a Winget process hangs, the application correctly terminates its process tree, leaving no "zombie" processes.
- 💾 **Data Integrity**: The caching system is protected from corrupted data and memory overflow (50 MB limit per file). JSON structure is validated before reading.
- 🔄 **Log Rotation**: Automatic log file size management (5 MB limit) prevents uncontrolled disk data growth.
- 🏗️ **DI Architecture (Dependency Injection)**: Use of a dependency container ensures component isolation, simplifies testing, and eliminates service initialization errors.
- 🚦 **Thread Safety**: All interface updates and background tasks are synchronized, eliminating crashes during parallel description loading or app installation.

All operations are transparent and logged in \`PAS.log\` in real-time.

## 📝 Logging

All operations are recorded in the \`PAS.log\` file in the \`%LocalAppData%\\PAS\\\` folder. The log contains:
- Information messages on progress
- Warnings about issues
- Errors with full stack traces
- Fatal exceptions (if the application crashed)

## 🤝 Contributing

Any improvements are welcome! Please:
1. Fork the project
2. Create a branch for your changes
3. Submit a Pull Request

## 📄 License

This project is distributed under the MIT License. See the \`LICENSE\` file for details.

## 🙏 Acknowledgments

- Microsoft for [Winget](https://github.com/microsoft/winget-cli)
- .NET Community for excellent development tools

---

**Note**: This application uses the official Windows Package Manager (Winget) and contains no malicious code. All operations are transparent and can be verified in the source code.
`
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
    readme: `# 🍄 MushroomSpot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Android](https://img.shields.io/badge/Platform-Android-green.svg)](https://developer.android.com)
[![API](https://img.shields.io/badge/API-24%2B-brightgreen.svg?style=flat)](https://android-arsenal.com/api?level=24)
[![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-blue.svg)](https://kotlinlang.org)
[![Jetpack Compose](https://img.shields.io/badge/Jetpack%20Compose-1.5.0-blue.svg)](https://developer.android.com/jetpack/compose)

> **Профессиональное Android-приложение для отслеживания грибных поездок с высокоточным GPS-позиционированием**

Мобильное приложение для планирования, отслеживания и документирования поездок за грибами. Приложение обеспечивает высокоточное определение местоположения (3-8 метров), интеллектуальную фильтрацию GPS-данных и современный пользовательский интерфейс.

## 📋 Содержание

- [🚀 Основные функции](#-основные-функции)
- [📱 Скриншоты](#-скриншоты)
- [🎯 GPS точность](#-gps-точность-и-качество-координат)
- [🛠️ Технологии](#️-технологии)
- [⚙️ Установка](#️-установка)
- [🔧 Сборка проекта](#-сборка-проекта)
- [📊 Архитектура](#-архитектура)
- [🗺️ Карты и навигация](#️-карты-и-навигация)
- [📄 API документация](#-api-документация)
- [🔄 Статус разработки](#-статус-разработки)
- [🤝 Участие в проекте](#-участие-в-проекте)
- [📄 Лицензия](#-лицензия)

## 🚀 Основные функции

### 📍 Управление поездками
- ✅ **Создание поездок** - планируйте новые грибные экспедиции
- ✅ **Список поездок** - просматривайте все ваши поездки
- ✅ **Детали поездки** - подробная информация о каждой поездке
- ✅ **GPS-трекинг** - автоматическое отслеживание маршрута поездки
- ✅ **Опциональный трекинг** - возможность отключения GPS-трекинга для экономии батареи

### 🍄 Учет грибов с высокой точностью
- ✅ **Добавление находок** - отмечайте найденные грибы прямо на месте
- ✅ **Удаление записей** - безопасное удаление записей с подтверждением
- ✅ **Фотографии** - делайте снимки грибов через камеру или выбирайте из галереи
- ✅ **Высокоточные GPS-координаты** - точность до 3-8 метров
- ✅ **Интеллектуальная фильтрация** - сохранение только точных координат (≤8м)
- ✅ **Визуальные индикаторы точности** - цветовая индикация качества GPS-сигнала
- ✅ **Кнопка обновления координат** - принудительное получение более точных координат
- ✅ **Заметки** - добавляйте описания и комментарии к находкам

### 📊 Экспорт и импорт данных
- ✅ **JSON экспорт/импорт** - полная структура данных
- ✅ **CSV экспорт/импорт** - совместимость с Excel и Google Sheets
- ✅ **Валидация данных** - проверка целостности при импорте
- 🔄 **GPX экспорт** - для GPS-навигаторов (в разработке)

### 🗺️ Картографические функции
 - ✅ **Маршрут выбранной поездки** — открытие Google Maps с метками A, B, C…
 - ✅ **Google Maps (Directions)** — origin/waypoints/destination, метки по порядку
 - ✅ **Настраиваемый сэмплинг точек маршрута** — контроль количества промежуточных точек (до 23 waypoint'ов в Directions; умное сэмплирование до 50 точек для длинных треков)

 #### Как пользоваться картой
 - На главном экране в карточке нужной поездки нажмите кнопку \`Маршрут\` (иконка «Directions»).
 - Откроется Google Maps в режиме построения маршрута с метками A, B, C… по точкам поездки.
 - Для длинных треков используется умное сэмплирование точек; количество промежуточных точек маршрута ограничено правилами Google (до 23 waypoint'ов).

## 📱 Скриншоты

> 📸 **Скриншоты будут добавлены в ближайшее время**
> 
> Планируется добавить:
> - Главный экран со списком находок
> - Экран добавления гриба с GPS-индикаторами
> - Карта с маршрутами и маркерами
> - Экран настроек и экспорта данных

## 🎯 GPS точность и качество координат

### 🎯 Высокоточное позиционирование
- **Точность**: 3-8 метров (вместо стандартных 10-20 метров)
- **Интеллектуальная фильтрация**: Сохранение только координат с точностью ≤8 метров
- **Агрессивные настройки GPS**:
  - Интервал обновления: 1 секунда
  - Минимальный интервал: 0.5 секунды
  - Минимальное расстояние: 0.5 метра
  - Максимальный возраст данных: 5 секунд

### 🚦 Визуальные индикаторы точности
| Точность | Цвет | Статус | Действие |
|----------|------|--------|----------|
| ≤ 3м | 🟢 Синий | Отличная | Сохранение разрешено |
| ≤ 5м | 🟡 Оранжевый | Хорошая | Сохранение разрешено |
| ≤ 8м | 🟠 Оранжевый | Приемлемая | Сохранение разрешено |
| > 8м | 🔴 Красный | Низкая | Сохранение заблокировано |

### 💡 Рекомендации для лучшей точности
- Используйте приложение на открытом пространстве
- Избегайте густых лесов и высоких зданий
- Дождитесь получения точности ≤8 метров перед сохранением
- Используйте кнопку "Обновить" для получения более точных координат

## 🛠️ Технологии

### 🏗️ Архитектура и фреймворки
- **MVVM** - современная архитектура Android
- **Jetpack Compose** - декларативный UI
- **Room Database** - локальное хранение данных
- **Coroutines** - асинхронное программирование
- **Hilt** - dependency injection

### 📦 Основные зависимости
\`\`\`kotlin
// UI и архитектура
implementation "androidx.compose.ui:ui:$compose_version"
implementation "androidx.lifecycle:lifecycle-viewmodel-compose:$lifecycle_version"
implementation "androidx.hilt:hilt-navigation-compose:$hilt_version"

// База данных
implementation "androidx.room:room-runtime:$room_version"
implementation "androidx.room:room-ktx:$room_version"

// Геолокация и карты
implementation "com.google.android.gms:play-services-location:$location_version"

// Камера и изображения
implementation "androidx.camera:camera-camera2:$camerax_version"
implementation "io.coil-kt:coil-compose:$coil_version"
\`\`\`

### 🔐 Разрешения
\`\`\`xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
\`\`\`

## ⚙️ Установка

### 📋 Системные требования
- **Android Studio**: Arctic Fox (2020.3.1) или новее
- **Android SDK**: API 24+ (Android 7.0)
- **Kotlin**: 1.9.0+
- **Gradle**: 8.0+
- **Устройство**: с поддержкой GPS и камеры

### 📱 Требования к устройству
- Android 7.0 (API level 24) или выше
- GPS модуль
- Камера
- Минимум 100 МБ свободного места

## 🔧 Сборка проекта

### 1️⃣ Клонирование репозитория
\`\`\`bash
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot
\`\`\`

### 2️⃣ Сборка и установка
\`\`\`bash
# Debug сборка
./gradlew assembleDebug

# Установка на подключенное устройство
./gradlew installDebug

# Release сборка (требует настройки подписи)
./gradlew assembleRelease
\`\`\`

### 3️⃣ Запуск приложения
\`\`\`bash
# Запуск через ADB
adb shell am start -n com.mushroomspot.app/.MainActivity

# Или запустите из Android Studio
\`\`\`

### 🧪 Тестирование
\`\`\`bash
# Запуск unit тестов
./gradlew test

# Запуск инструментальных тестов
./gradlew connectedAndroidTest

# Генерация отчета о покрытии
./gradlew jacocoTestReport
\`\`\`

## 📊 Архитектура

### 🏛️ Структура проекта
\`\`\`
app/
├── src/main/java/com/mushroomspot/
│   ├── data/           # Слой данных
│   │   ├── database/   # Room база данных
│   │   ├── repository/ # Репозитории
│   │   └── models/     # Модели данных
│   ├── domain/         # Бизнес-логика
│   │   └── usecases/   # Use cases
│   ├── presentation/   # UI слой
│   │   ├── screens/    # Compose экраны
│   │   ├── viewmodels/ # ViewModels
│   │   └── components/ # Переиспользуемые компоненты
│   ├── di/            # Dependency Injection
│   ├── navigation/    # Навигация
│   └── utils/         # Утилиты
\`\`\`

### 🗄️ Структура базы данных

#### Trip (Поездка)
\`\`\`kotlin
@Entity(tableName = "trips")
data class Trip(
    @PrimaryKey val id: String,
    val name: String,
    val startTime: Long,
    val endTime: Long?,
    val description: String?
)
\`\`\`

#### Mushroom (Гриб)
\`\`\`kotlin
@Entity(tableName = "mushrooms")
data class Mushroom(
    @PrimaryKey val id: String,
    val tripId: String,
    val name: String,
    val latitude: Double,
    val longitude: Double,
    val photoPath: String?,
    val notes: String?,
    val timestamp: Long,
    val accuracy: Float
)
\`\`\`

#### TrackPoint (Точка маршрута)
\`\`\`kotlin
@Entity(tableName = "track_points")
data class TrackPoint(
    @PrimaryKey val id: String,
    val tripId: String,
    val latitude: Double,
    val longitude: Double,
    val altitude: Double?,
    val accuracy: Float,
    val timestamp: Long
)
\`\`\`

## 🗺️ Карты и навигация

Приложение использует встроенные возможности Android для работы с картами:

- **🎯 GPS трекинг**: Google Play Services Location для высокоточных координат
- **🗺️ Навигация**: Интеграция с Google Maps через Intent
- **🔧 Простота**: Не требует API ключей или сложной настройки
- **📱 Совместимость**: Работает на всех Android устройствах

### Функции карты в приложении
- **Маршрут по выбранной поездке**: отображение в Google Maps через \`Directions\` (origin/waypoints/destination) с метками A, B, C… с настраиваемым количеством промежуточных точек.

## 📄 API документация

### 🔍 Основные компоненты

#### LocationService
\`\`\`kotlin
class LocationService {
    suspend fun getCurrentLocation(): Location?
    fun startLocationTracking(tripId: String)
    fun stopLocationTracking()
}
\`\`\`

#### MushroomRepository
\`\`\`kotlin
interface MushroomRepository {
    suspend fun getAllMushrooms(): Flow<List<Mushroom>>
    suspend fun insertMushroom(mushroom: Mushroom)
    suspend fun deleteMushroom(mushroom: Mushroom)
    suspend fun exportToJson(): String
    suspend fun importFromJson(json: String): Result<Unit>
}
\`\`\`

## 🔄 Статус разработки

### ✅ Реализовано (v1.2.0)
- [x] Базовая архитектура приложения (MVVM + Compose)
- [x] Система навигации между экранами
- [x] Управление поездками (создание, просмотр, детали)
- [x] **Высокоточное GPS-позиционирование** (3-8 метров)
- [x] **Интеллектуальная фильтрация координат** (≤8м)
- [x] **Визуальные индикаторы точности GPS**
- [x] Добавление грибов с фото и GPS
- [x] Интеграция с камерой и галереей
- [x] **Удаление записей с подтверждением**
- [x] **Экспорт/импорт JSON и CSV**
- [x] **Интеграция с картами**
- [x] Foreground Service для фонового трекинга
- [x] Room Database для локального хранения

### 🔄 В разработке (v1.3.0)
- [ ] Отображение карт с маршрутами внутри приложения
- [ ] Расширенная статистика поездок
- [ ] Поиск и фильтрация находок
- [ ] Экспорт в GPX формат

### 📋 Планируется (v2.0.0)
- [ ] Синхронизация с облачными сервисами
- [ ] Социальные функции (обмен находками)
- [ ] Машинное обучение для распознавания грибов
- [ ] Оффлайн карты

## 🤝 Участие в проекте

Мы приветствуем вклад в развитие проекта! 

### 🚀 Как начать
1. Форкните репозиторий
2. Создайте ветку для новой функции (\`git checkout -b feature/amazing-feature\`)
3. Зафиксируйте изменения (\`git commit -m 'Add amazing feature'\`)
4. Отправьте в ветку (\`git push origin feature/amazing-feature\`)
5. Откройте Pull Request

### 📝 Правила участия
- Следуйте существующему стилю кода
- Добавляйте тесты для новой функциональности
- Обновляйте документацию при необходимости
- Используйте понятные commit сообщения

### 🐛 Сообщения об ошибках
Используйте [GitHub Issues](https://github.com/Almanex/MushroomSpot/issues) для сообщения об ошибках.

### 💡 Предложения функций
Мы открыты для новых идей! Создайте Issue с тегом \`enhancement\`.

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

\`\`\`
MIT License

Copyright (c) 2024 MushroomSpot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
\`\`\`

---

## 🎯 Ключевые преимущества

- 🎯 **Высочайшая точность GPS** - координаты с точностью до 3-8 метров
- 🧠 **Интеллектуальная система** - автоматическая фильтрация неточных данных
- 🎨 **Современный UI** - Jetpack Compose с Material Design 3
- 🔋 **Оптимизация батареи** - опциональный GPS-трекинг
- 📱 **Надежность** - работа в офлайн режиме
- 📊 **Экспорт данных** - JSON, CSV форматы
- 🗺️ **Интеграция с картами** - без необходимости в API ключах

---

<div align="center">

**Удачных грибных походов с точными координатами! 🍄🌲📍**

[⬆ Наверх](#-mushroomspot)

</div>`
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
    readme: `# Gemma Local Desktop

<p align="center">
  <img src="GemmaChatCsharp/Assets/gemma-logo.png" alt="Gemma Local Desktop" width="128" />
</p>

<h1 align="center">Gemma Local Desktop</h1>

<p align="center">
  <strong>Native Windows AI assistant and coding workspace.</strong><br/>
  Powered by Google's Gemma via llama.cpp.<br/>
  No API keys. No cloud. Works 100% offline.
</p>

---

## 🚀 Experimental Project Status

This is an **experimental project** designed to push the boundaries of local AI development on Windows. Despite its experimental nature, the application is **fully functional** and provides a stable environment for local LLM interaction.

### Model Performance Notes:
- **Small Models (E2B / E4B)**: Great for quick tests and low-latency interactions. While capable, they have natural limitations due to their parameter count—operate within reasonable expectations.
- **Large Models (26B / 31B)**: These models handle complex coding tasks, logic, and creative requests **perfectly**, as originally intended. They provide a good level of performance on consumer hardware.

---

## 📸 Screenshots

<p align="center">
  <img src="GemmaChatCsharp/Assets/gemma-chat-win_1.png" alt="Setup Screen" width="32%" />
  <img src="GemmaChatCsharp/Assets/gemma-chat-win_2.png" alt="Chat & Build Workspace" width="32%" />
  <img src="GemmaChatCsharp/Assets/gemma-chat-win_3.png" alt="Code & Preview" width="32%" />
</p>

---

## Key Features

- 💬 **Chat Mode** — Optimized for pure dialogue and reasoning.
- 🛠 **Build Mode** — Specialized workspace for generating code, web apps, and artifacts with a 720px live preview.
- 🚀 **One-Click Templates** — Instant high-fidelity starters like *Mega Tetris* and *Dynamic Weather Dashboard*.
- 🖥 **Full-Screen Preview** — One button to view your creation in your default system browser.
- 📂 **Workspace Persistence** — Per-chat projects saved on disk. The model can read and edit existing files iteratively.
- 🎨 **Modern UX** — Clean Windows design with glassmorphism, resizable canvas, and dark mode.
- 🎮 **GPU Acceleration** — Intelligent NVIDIA GPU detection with partial offloading for large models (MoE 26B).
- 📦 **Zero Config** — Fully automated environment setup: downloads runtimes and models on first start.

## Requirements

- **Windows 10/11** (64-bit)
- **NVIDIA GPU** (optional, for CUDA acceleration) or CPU
- **4GB+ RAM** for Gemma 2B model

## Quick Start

1. Clone the repository.
2. Ensure you have the [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) installed.
3. Run the application:
   \`\`\`powershell
   cd GemmaChatCsharp
   dotnet run
   \`\`\`
   \`\`\`

On first launch, the app will:
1. Detect your hardware (CPU vs NVIDIA GPU).
2. Download the appropriate \`llama.cpp\` server binaries.
3. Download the recommended Gemma model (~1.6GB).
4. Initialize your local workspace.

## Build & Publish

If you want to create a standalone executable:

### Standard Build
\`\`\`powershell
dotnet build -c Release
\`\`\`

### Create Single EXE (Portable)
To generate a single \`.exe\` file that includes everything (self-contained):
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
\`\`\`
The output will be in \`bin/Release/net10.0-windows/win-x64/publish/\`.

## Tech Stack

| Layer | Tech |
|-------|------|
| App Shell | WPF (.NET 10) + CommunityToolkit.Mvvm |
| WebView | Microsoft.Web.WebView2 |
| Markdown | Markdig.Wpf |
| Model Runtime | [llama.cpp](https://github.com/ggml-org/llama.cpp) (local server) |
| persistence | Local JSON state + Workspace filesystem |

## Shortcuts

- \`Ctrl + N\`: New chat
- \`Ctrl + B\`: Toggle Chat/Build mode
- \`Ctrl + \\\`: Toggle Canvas (Preview/Code)

## License

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
    readme: `# IconForge — Нативный генератор иконок для Windows 11

**IconForge** — это легкое нативное Windows-приложение (утилита), разработанное на фреймворке **WinUI 3 (Windows App SDK)** и C#. Оно предназначено для пакетной генерации наборов иконок для Windows (\`.ico\`, \`Assets\`) и Android (\`Adaptive Icons\`) из одного исходного изображения (формата PNG или SVG).
---

## Основные возможности

### 📦 Генерация пакетов иконок
* **Windows (Классический .ico):**
  * Сборка мультиформатного \`.ico\` файла, содержащего разрешения: \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` пикселей.
  * **Микро-шарпинг:** Для мелких размеров (16-48px) автоматически применяется специальный контурный фильтр резкости, чтобы иконка не "мылилась" в Проводнике.
* **Windows Modern Assets (PNG):**
  * Экспорт отдельных изображений для манифеста современных Windows-приложений (\`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`) во всех системных масштабах: \`scale-100\`, \`scale-125\`, \`scale-150\`, \`scale-200\`, \`scale-400\`.
* **Android (Adaptive & Legacy Icons):**
  * Разделение слоев: логотип автоматически позиционируется внутри безопасной зоны (safe-zone 72dp) слоя **Foreground.png**, а слой **Background.png** заливается выбранным цветом или текстурным файлом.
  * Экспорт по структуре папок проекта (\`mipmap-mdpi\` до \`mipmap-xxxhdpi\`).
  * Генерация круглой **Legacy-иконки** (\`ic_launcher.png\`) путем маскирования и наложения слоев.
  * Экспорт промо-иконки для Google Play Console в размере \`512x512\` пикселей.

### 🎨 Современный интерфейс Windows 11 (UI/UX)
* Использование системного полупрозрачного материала **Mica Alt** (адаптируется под обои рабочего стола).
* Полная поддержка системной Темной/Светлой темы Windows 11.
* Интерактивная зона **Drag-and-Drop** с динамическим изменением цвета границ и встроенным превью для PNG/SVG файлов.
* Быстрые палитры (свотчи) для выбора фонового цвета Android-иконки.

### ⚙️ Системная интеграция (Shell Integration)
* **Контекстное меню Проводника:** Опция встраивания пункта *"Сгенерировать иконки в IconForge"* прямо в меню проводника Windows при правом клике на PNG/SVG. Регистрация происходит локально в кусте \`HKEY_CURRENT_USER\` и **не требует прав администратора (UAC)**.
* **Всплывающие уведомления (Toast):** По окончании работы приложение отправляет нативное всплывающее уведомление Windows 11 с интерактивной кнопкой «Открыть папку».

---

## Стек технологий
* **Язык:** C# (.NET 8.0)
* **UI-платформа:** WinUI 3 (Windows App SDK 2.2.0)
* **Графика:** SkiaSharp ( Lanczos3-ресайз и фильтрация) + Svg.Skia (отрисовка векторной графики в растр).
* **Архитектурный тип:** Unpackaged Self-Contained (приложение поставляется со всеми библиотеками и работает без необходимости глобальной установки Windows App Runtime на компьютер пользователя).

---

## Структура экспорта файлов

После генерации в выбранной папке создается следующая структура каталогов:

\`\`\`text
[Папка_Назначения]/
├── Windows/
│   ├── app_icon.ico
│   └── Assets/
│       ├── Square44x44Logo.scale-100.png
│       ├── Square44x44Logo.scale-200.png
│       └── ... (все логотипы во всех масштабах)
└── Android/
    ├── play_store_512.png
    └── res/
        ├── mipmap-mdpi/
        │   ├── ic_launcher.png
        │   ├── ic_launcher_background.png
        │   └── ic_launcher_foreground.png
        └── mipmap-xxxhdpi/ ...
\`\`\`

---

## Как собрать и запустить

### Требования
* [.NET 8.0 SDK](https://dotnet.microsoft.com/download) или новее.

### Сборка и запуск из консоли
1. Клонируйте репозиторий:
   \`\`\`bash
   git clone https://github.com/Almanex/icoboo.git
   cd icoboo
   \`\`\`
2. Скомпилируйте проект:
   \`\`\`bash
   dotnet build
   \`\`\`
3. Запустите приложение:
   \`\`\`bash
   dotnet run
   \`\`\`

### Публикация (Self-Contained EXE)
Для генерации единого исполняемого пакета (все зависимости будут скопированы в папку \`publish\`):
\`\`\`bash
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
После этого готовую программу можно запускать на любом компьютере с Windows 10/11 без предварительной установки каких-либо библиотек.
`
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
    readme: `# LingoSpaced 🇩🇪 ✨

LingoSpaced — это премиальное мобильное приложение для изучения немецкого языка на платформе Android 16 (API 36). В его основе лежит **умный автоматический алгоритм интервального повторения**, который подстраивается под память пользователя без ручных оценок сложности («легко», «трудно»), используя неявные сигналы: скорость ответа, использование подсказок, ошибки и опечатки.

Интерфейс приложения выполнен по стандартам **Taste Rules**: эффект жидкого матового стекла (Glassmorphism), анимации на основе физики пружин (Spring Physics) и динамическая палитра HSL, адаптирующаяся под светлую и темную темы.

---

## 📂 Документация проекта

Для удобства подробная документация разделена на две части:

* 📖 **[Руководство пользователя](file:///d:/Develop/int/docs/USER_GUIDE.md)**
  * Как устроен цикл обучения (Интенсив ➡️ Интервалы).
  * Описание игровых механик (3 типа заданий) и системы подсказок.
  * Тонкая настройка скорости интервалов и свободная тренировка.
  * Аналитика прогресса и статистика.

* 🛠️ **[Руководство разработчика](file:///d:/Develop/int/docs/DEVELOPER.md)**
  * Архитектура проекта и структура каталогов.
  * Схема хранения данных (\`words.json\`).
  * Математическая модель алгоритма интервальных повторений.
  * Применение дизайн-системы (динамический HSL, затухающие пружины, размытие).
  * Инструкция по сборке, тестированию и запуску.

---

## 🚀 Быстрый запуск для разработчиков

### Требования
* **Android Studio** (Koala / Ladybug или новее)
* **Android SDK 36** (Android 16 DP/Beta)
* **JDK 17** (рекомендуется использовать встроенный в Android Studio JBR)

### Сборка и запуск тестов из терминала
Перед сборкой убедитесь, что переменная \`JAVA_HOME\` указывает на JDK Android Studio:

\`\`\`powershell
# Настройка JAVA_HOME в Windows (PowerShell)
$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Запуск модульных тестов
.\\gradlew.bat test

# Сборка отладочного APK
.\\gradlew.bat assembleDebug
\`\`\`

Отладочный APK-файл будет сохранен по пути: \`app/build/outputs/apk/debug/app-debug.apk\`.
`
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
    readme: `# Roke — Конвертер раскладки клавиатуры (Windows 11 Style)

Утилита для быстрого перевода выделенного текста из неверной раскладки клавиатуры в нужную (EN ↔ RU) в любом текстовом поле Windows.

---

## ✨ Особенности и архитектура

Проект разделен на два независимых компонента для экономии системных ресурсов:
1. **Roke.exe** — сверхлегковесный фоновый процесс (~1.5 МБ ОЗУ) на чистом Win32 C++, который отслеживает глобальный хук клавиатуры и управляет иконкой в системном трее.
2. **RokeSettings.exe** — современное окно настроек в Fluent-стиле Windows 11, разработанное на **WinUI 3 (Windows App SDK)** и **C++/WinRT**. Настройки запускаются из трея по запросу и автоматически закрываются после сохранения, полностью освобождая системную память.

---

## 🚀 Использование

1. Выделите текст с неверной раскладкой в любом приложении.
2. Нажмите горячую клавишу (по умолчанию **Ctrl+Shift+Q**).
3. Текст автоматически заменится на правильный.

**Примеры:**
- \`ghbdtn\` ⇄ \`привет\`
- \`rhjcnf\` ⇄ \`работа\`
- \`dcf\` ⇄ \`все\`

---

## 🛠️ Сборка проекта

### Требования
- **Visual Studio 2022** или **Visual Studio Build Tools 2022** с установленной рабочей нагрузкой «Разработка классических приложений на C++».
- Установленный пакет SDK для Windows (рекомендуется Windows 11 SDK 10.0.26100.0 или новее).

### Инструкция по сборке
В корне проекта находится готовый скрипт для автоматической очистки, восстановления зависимостей и сборки проекта:
1. Откройте консоль PowerShell или командную строку Windows.
2. Перейдите в папку проекта и выполните:
   \`\`\`cmd
   .\\build.bat
   \`\`\`

Скрипт автоматически найдет среду сборки Visual Studio, загрузит необходимые NuGet-пакеты (Windows App SDK и C++/WinRT) и скомпилирует приложение в режиме **Release x64**.

Результат сборки будет находиться в папке:
\`\`\`text
bin\\Release\\
\`\`\`

---

## 📦 Развертывание (Self-Contained)

Проект настроен для сборки в автономном режиме без упаковки (**Unpackaged Self-Contained**):
- Приложение не требует установки пакета MSIX.
- Приложение не требует предустановленного в системе рантайма Windows App Runtime (все необходимые зависимости извлекаются при сборке прямо в папку \`bin\\Release\\\`).
- Для переноса приложения на другую машину достаточно скопировать всё содержимое папки \`bin\\Release\\\`.

---

## ⚙️ Настройки и автозапуск

Все конфигурации приложения (выбранная комбинация горячих клавиш, состояние автозапуска) сохраняются в системный реестр Windows по пути:
\`HKEY_CURRENT_USER\\Software\\Roke\`

`
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
    readme: `# Screentation 📸✨

**Screentation** — это легкое, быстрое и современное десктопное приложение для потоковой аннотации скриншотов и их пакетного сохранения. Создано для технических писателей, тестировщиков, разработчиков и всех, кому нужно быстро готовить иллюстрации для инструкций, баг-репортов и документации.

Приложение автоматически перехватывает новые скриншоты из буфера обмена (например, сделанные через стандартные \`Win + Shift + S\` в Windows) и позволяет в пару кликов добавить рамки, стрелки, нумерацию шагов и размыть конфиденциальные данные.

---

## ✨ Ключевые возможности

* 📋 **Автозахват из буфера обмена**: Просто сделайте скриншот штатными средствами Windows, и он мгновенно появится в Screentation. Также поддерживается вставка по \`Ctrl + V\` (независимо от текущей раскладки клавиатуры) и обычный Drag-and-Drop файлов.
* 🛠️ **Инструменты аннотирования (Konva.js)**:
  * **Rect (Рамка)**: Выделение областей прямоугольниками с настраиваемым цветом и толщиной. Включает опцию полупрозрачной заливки в тон рамки (можно легко отключить для получения полностью прозрачного фона).
  * **Arrow (Стрелка)**: Указание на важные элементы с аккуратными наконечниками.
  * **Step (Шаг)**: Быстрая нумерация шагов (цифровые кружки) — номера увеличиваются автоматически при каждом новом клике.
  * **Blur (Размытие)**: Качественное скрытие личных или секретных данных на скриншоте с помощью эффекта размытия.
  * **Eraser (Умный ластик)**: Закрашивание областей фоновым текстурным рисунком (принцип Clone Stamp). Позволяет бесследно стереть конфиденциальные надписи или иконки (например, на панели задач), восстанавливая оригинальный фон за ними. Область-источник ("Source") можно перетаскивать независимо для идеального совмещения текстур.
* 🔄 **Сохранение истории действий**: Поддержка \`Undo\` (\`Ctrl + Z\`) и \`Redo\` (\`Ctrl + Y\` / \`Ctrl + Shift + Z\`) для всех графических элементов.
* 📦 **Пакетный экспорт**:
  * Выгрузка одного или всех скриншотов одновременно.
  * Конвертация в форматы **PNG, JPEG, WebP**.
  * Настройка качества сжатия (для JPEG/WebP).
  * Удобный шаблон именования файлов (например, \`screen_{number}\`, \`step_{datetime}\`).
* ⌨️ **Независимость от раскладки**: Все горячие клавиши (инструменты, буфер обмена, история) корректно работают как на английской, так и на русской раскладке клавиатуры.
* 📥 **Работа в фоновом режиме (Трей)**: При закрытии приложение сворачивается в системный трей Windows и продолжает мониторить буфер обмена. Полный выход осуществляется через контекстное меню трея.
* 🚀 **Готовый инсталлятор**: Быстрая сборка полноценного Windows-установщика (\`.exe\`) с собственной иконкой.

---

## 🛠️ Технологический стек

* **Core**: Electron, Node.js
* **Frontend**: React, TypeScript, Vite
* **Graphics**: Konva.js (\`react-konva\`) для интерактивного холста
* **Image Processing**: \`sharp\` для быстрого и качественного сжатия изображений в главном процессе
* **Build System**: \`electron-vite\` для быстрой сборки и перезапуска в режиме разработки

---

## 🚀 Быстрый старт

### Требования
* Установленный **Node.js** (рекомендуется версия LTS 18+)
* **Git**

### 1. Клонирование репозитория
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
\`\`\`

### 2. Установка зависимостей
Установите библиотеки проекта. Нативные модули (включая \`sharp\`) будут автоматически перекомпилированы под вашу версию Electron:
\`\`\`bash
npm install
\`\`\`

### 3. Запуск в режиме разработки
Запуск приложения в режиме live-reload для разработки:
\`\`\`bash
npm run dev
\`\`\`

### 4. Сборка дистрибутива
Скомпилировать исходный код и собрать готовый установщик для Windows (\`dist/Screentation Setup 1.0.0.exe\`):
\`\`\`bash
npx electron-builder --win
\`\`\`

---

## 📂 Структура исходного кода

Подробное описание архитектуры приложения, каналов IPC, работы интерактивного холста Konva и логики работы в фоне находится в файле [DEV_DOC.md](file:///d:/Develop/screentation/DEV_DOC.md).

---

## 📝 Лицензия

Проект распространяется под лицензией MIT.
`
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
    readme: `# ShortcutDock — Кастомная панель ярлыков для Windows 11

> [!IMPORTANT]
> **Доступен первый стабильный релиз!**  
> Вы можете скачать готовый скомпилированный файл **\`ShortcutDock.exe\`** на странице [Релизов (Releases)](https://github.com/Almanex/ShortcutDock/releases/tag/v1.0.0) и запустить его на своем компьютере без установки дополнительных библиотек.

Настольная dock-панель быстрого запуска с поддержкой эффектов Mica/Acrylic/полной прозрачности, автоматическим переключением вертикальной/горизонтальной ориентации, поддержкой Drag-and-Drop, системной интеграцией (AppBar) и интеграцией с системным треем.

Подробную инструкцию по установке, запуску и настройке всех функций читайте в [Руководстве пользователя (GUIDE.md)](GUIDE.md).

## Скриншоты проекта

<p align="center">
  <img src="screenshots/screenshot1.png" width="48%" alt="ShortcutDock Horizontal Bottom" />
  <img src="screenshots/screenshot2.png" width="48%" alt="ShortcutDock Vertical Left" />
</p>
<p align="center">
  <img src="screenshots/screenshot3.png" width="48%" alt="ShortcutDock Settings" />
  <img src="screenshots/screenshot4.png" width="48%" alt="ShortcutDock Context Menu" />
</p>
<p align="center">
  <img src="screenshots/screenshot5.png" width="98%" alt="ShortcutDock Top Position" />
</p>

## Стек технологий

| Компонент | Технология | Версия |
|-----------|-----------|--------|
| Язык | C# (.NET 8, LTS) | net8.0-windows |
| UI-фреймворк | WPF + **WPF-UI 4.3.0** (\`FluentWindow\` для настроек, Mica) | 4.3.0 |
| MVVM | **CommunityToolkit.Mvvm** (\`[ObservableProperty]\`, \`[RelayCommand]\`) | 8.4.2 |
| Win32 P/Invoke | Ручные \`DllImport\` (user32, dwmapi, shell32) | — |
| JSON | \`System.Text.Json\` (встроенный) | — |
| Графика | \`System.Drawing.Common\` (Bitmap → PNG для кэша иконок, загрузка ICO) | 8.0.0 |

## Структура проекта

\`\`\`
D:\\Develop\\tsreen\\
├── ShortcutDock.slnx              # Решение (новый XML-формат, SDK 10)
├── README.md                       # Этот файл
└── src\\ShortcutDock\\
    ├── ShortcutDock.csproj         # net8.0-windows, UseWPF, UseWindowsForms, UseSystemDrawing, ApplicationIcon
    ├── app.manifest                # PerMonitorV2 DPI, asInvoker, Win10/11 compat
    ├── App.xaml / App.xaml.cs      # Точка входа, DI (manual), инициализация системного трея (NotifyIcon)
    ├── MainWindow.xaml / .xaml.cs  # Главная панель, DWM-эффекты размытия, Alt+Tab hide, DnD, переключение ориентации
    ├── SettingsWindow.xaml / .cs   # Окно настроек (Mica, CardControl, переключатели)
    ├── app_icon.ico                # Встроенный значок приложения
    ├── Native\\
    │   └── Win32.cs                # P/Invoke: GWL_EXSTYLE, DwmSetWindowAttribute, DwmExtendFrame,
    │                               #         RegisterWindowMessage, MonitorFromWindow
    ├── Models\\
    │   ├── Settings.cs            
    │   ├── PanelSettings.cs        # Position, IconSize, KeepOnTop, BackdropType, ShowAddButton
    │   └── ShortcutItem.cs         # Id (GUID), Name, TargetPath, IconPath
    ├── Services\\
    │   ├── SettingsService.cs      # Load/Save %AppData%\\ShortcutDock\\settings.json
    │   ├── ProcessLauncher.cs     # Process.Start(UseShellExecute=true, Verb="runas")
    │   ├── ShortcutResolver.cs     # .lnk → .exe через COM IShellLinkW + IPersistFile
    │   └── IconExtractor.cs       # SHGetImageList (JUMBO 256→EXTRALARGE 48→32) → PNG cache
    └── ViewModels\\
        ├── MainViewModel.cs       # Коллекция ярлыков, AddViaDialog, AddFromFile, настройки, Persist
        └── ShortcutViewModel.cs   # Launch, RunAsAdmin, Remove команды
\`\`\`

## Данные

Конфигурация: \`%AppData%\\ShortcutDock\\settings.json\`

\`\`\`json
{
  "PanelSettings": {
    "Position": "Bottom",
    "IconSize": 48,
    "KeepOnTop": true,
    "BackdropType": "Mica",
    "ShowAddButton": false,
    "AutoHide": false,
    "HoverZoom": true,
    "ShowRunningIndicators": true
  },
  "Shortcuts": [
    {
      "Id": "a1b2c3d4-...",
      "Name": "Google Chrome",
      "TargetPath": "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      "IconPath": "%AppData%\\\\ShortcutDock\\\\Cache\\\\chrome_ABCD1234.png"
    }
  ]
}
\`\`\`

Кэш иконок: \`%AppData%\\ShortcutDock\\Cache\\*.png\`

## Управление и функции

### Главная панель
| Действие | Как |
|----------|-----|
| **Добавить ярлык** | Drag-and-Drop файла \`.exe\` / \`.lnk\` на панель, или кнопка **«+»** (если включена), или ПКМ по панели → «Добавить приложение» |
| **Запустить/Активировать приложение** | Клик ЛКМ по иконке. Если программа уже запущена (и включены индикаторы), клик сфокусирует и выведет существующее окно на передний план вместо запуска новой копии. |
| **Запустить от имени администратора** | ПКМ по иконке → «Запустить от имени администратора» |
| **Удалить с панели** | ПКМ по иконке → «Удалить с панели» |
| **Открыть настройки** | ПКМ по свободному месту панели → «Настройки панели» или контекстное меню трея |
| **Закрыть панель** | ПКМ по свободному месту панели → «Закрыть панель» или контекстное меню трея -> Выход |

### Системный трей
- В области уведомлений Windows (трее) отображается кастомная иконка приложения.
- Двойной клик по иконке сворачивает / разворачивает док-панель.
- Контекстное меню позволяет переключить видимость, открыть окно настроек или выйти из приложения.

### Окно настроек
- **Положение на экране:** Снизу, Сверху, Слева, Справа. При выборе левой или правой стороны панель автоматически переключается на вертикальную ориентацию.
- **Эффект размытия:** Нет (100% прозрачность с отображением одних лишь значков), Mica, Acrylic.
- **Размер значков:** 32 px, 40 px, 48 px, 64 px (динамически изменяет размеры).
- **Поверх всех окон:** Включает/выключает закрепление поверх других окон и резервирование места на рабочем столе (AppBar). При отключении панели другие окна могут перекрывать её.
- **Показывать кнопку «+» на панели:** Позволяет скрыть кнопку добавления на док-панели для более минималистичного вида.
- **Автоматически скрывать панель (Auto-Hide):** Панель плавно скрывается за границы экрана при потере фокуса мыши (оставляя 2px полоску для вызова), временно снимая резервирование рабочего пространства AppBar для полного разворачивания сторонних окон.
- **Эффект увеличения при наведении (Hover Zoom):** Плавное масштабирование иконок при наведении курсора в стиле macOS, образующее интерактивную волну.
- **Индикаторы запущенных программ:** Отображение точек акцентного цвета под запущенными программами и перенаправление клика на активацию существующего окна.

---

## История изменений

| Дата | Изменение |
|------|-----------|
| 2026-06-19 | Первичная реализация: проект, модели, сервисы, UI, AppBar |
| 2026-06-19 | Исправлены XAML-пространства имен WPF-UI и ссылки на \`System.Drawing.Common\` |
| 2026-06-19 | Исправлена работа Mica/Acrylic за счет перехода к композиции \`AllowsTransparency="False"\` + \`WindowChrome\` + DWM P/Invoke |
| 2026-06-19 | Исправлена логика AppBar (позиционирование, устранение бесконечного цикла изменения размеров в связке с \`SizeToContent\`) |
| 2026-06-19 | Разработана форма настроек Fluent-дизайна (SettingsWindow) с полной привязкой настроек в реальном времени |
| 2026-06-19 | Добавлена интеграция с системным треем (NotifyIcon, ContextMenuStrip) |
| 2026-06-19 | Реализована поддержка вертикальных ориентаций и адаптивных триггеров XAML |
| 2026-06-19 | Интегрирована собственная иконка \`app_icon.ico\` для сборки и трея. Очищены временные ресурсы. |
| 2026-06-24 | Устранена утечка и зависание AppBar при системных событиях \`WM_SETTINGCHANGE\`. Настроен автономный релиз. |
| 2026-06-28 | Исправлена работа Корзины: выравнивание структуры \`SHQUERYRBINFO\` на x64 системах, запуск папки кликом и сброс кэша значков на старте. |
| 2026-07-03 | Интегрирована синхронизация с системной темой (\`SystemThemeWatcher\`): фон панели (Mica/Acrylic) и элементы интерфейса теперь нативно меняют тему на темную/светлую. |
| 2026-07-03 | Добавлен премиум-функционал: автоскрытие (Auto-Hide), эффект увеличения значков (Hover Zoom), индикаторы запущенных приложений с восстановлением окон на передний план и анимации отскока (Bounce). Исправлен краш окна настроек. |
`
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
    readme: `Shelter
===

Shelter is a Free and Open-Source (FOSS) app that leverages the "Work Profile" feature of Android to provide an isolated space that you can install or clone apps into.

**🆕 Android 16 Ready**: This fork has been specifically adapted for Android 16 (API 36) with full support for Pixel 9a and modern Android features including Edge-to-Edge UI and Predictive Back Navigation.



Features
===

- Installing apps inside a work profile for isolation
- "Freeze" apps inside the work profile to prevent them from running or being woken up when you are not actively using them
- Installing two copies of the same app on the same device

Android 16 Enhancements
===

This fork includes specific optimizations for Android 16 (API 36) and Pixel 9a:

### 🎨 Modern UI
- **Edge-to-Edge Design**: Full support for Android 16's mandatory edge-to-edge UI
- **Material You Integration**: Enhanced theming with dynamic colors
- **Adaptive Icons**: Support for Android 16's adaptive icon system

### 🔄 Navigation Improvements
- **Predictive Back Navigation**: Smooth back gesture animations
- **Gesture Navigation**: Optimized for modern Android navigation patterns

### 📱 Pixel 9a Optimization
- **Display Compatibility**: Optimized for 6.3" display (2424×1080 resolution)
- **Performance Tuning**: Enhanced for Pixel 9a hardware specifications
- **Battery Optimization**: Improved power management for extended usage


Caveats & Known Issues
===

- Some caveats and known issues are discussed during the setup process of Shelter. __Please read through text in the setup wizard carefully__.
- Shelter is only as safe as the Work Profile implementation of the Android OS you are using. For details, see <https://support.google.com/work/android/answer/6191949?hl=en>

### Android 16 Specific Notes
- **Minimum Requirements**: This fork requires Android 16 (API 36) or later
- **Edge-to-Edge UI**: Some older custom ROMs may not fully support the new edge-to-edge requirements
- **Predictive Back**: Custom launchers may need updates to support the new back navigation system

State of the Project, Feature Requests, etc.
===

Since Shelter simply makes use of the Work Profile APIs exposed by Android, there is a limited set of features that are possible to implement via the app. As we do not intend on leveraging (or "abusing") adb privileges, the features of Shelter can only be a strict subset of the exposed, unprivileged APIs.

As a result, we do not intend on adding a lot of new features to Shelter going forward, unless there is to be big changes in the capabilities of work profile APIs. Shelter is currently in an effective **maintenance mode**. Nevertheless, the author is still committed to regularly **adapting Shelter to all new Android versions as soon as possible after they are released** -- this includes upgrading the target SDK level, adapting to any new features or restrictions introduced by the new Android version, updating all dependencies, and so on. The author still relies on Shelter for his daily life, so Shelter will **not** become abandonware in the forseeable future.

### Android 16 Fork Status
This fork represents a **proactive adaptation** for Android 16 (API 36), implementing:
- ✅ **Target SDK 36**: Full compatibility with Android 16 requirements
- ✅ **Edge-to-Edge UI**: Mandatory design compliance
- ✅ **Predictive Back**: Modern navigation patterns
- ✅ **Pixel 9a Support**: Hardware-specific optimizations

The fork maintains full backward compatibility while embracing Android 16's new capabilities and requirements.


Uninstalling
===

To uninstall Shelter, please delete the work profile first in Settings -> Accounts, and then uninstall the Shelter app normally.
`
  }
};
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
