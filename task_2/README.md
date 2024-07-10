# Fluidra Technical Test

This project uses the [Playwright-BDD](https://vitalets.github.io/playwright-bdd/#/) library to facilitate end-to-end (E2E) test automation with a behavior-driven development (BDD) approach.

## Project Structure

- **Page Object Model**: We use the Page Object Model to keep test code organized and maintainable. Page Object classes encapsulate the structure and behavior of web pages, allowing common components to be reused.
- **`features` Folder**: Test specifications (features) written in Gherkin language are located in the `features` folder.
- **`steps` Folder**: The steps defined for the tests are located in the `steps` folder, where the logic for each step is implemented.

All tests are executed in the following environments:

- **Chromium**
- **Firefox**
- **WebKit**
- **Emulated mobile device version (Pixel 5)**

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Report](#report)

## Requirements

- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL)
- macOS 13 Ventura, or macOS 14 Sonoma
- Debian 11, Debian 12, Ubuntu 20.04, Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture
- Docker (Optional)

## Installation

Steps to install the project locally.

```node
npm ci
```

## Usage

- To run tests on all projects:

```node
npx bddgen && npx playwright test
```

- To run tests in different browsers and configurations, you can use the following commands:

```node
# Ejecutar pruebas en Chromium
npx bddgen && npx playwright test --project=chromium

# Ejecutar pruebas en Firefox
npx bddgen && npx playwright test --project=firefox

# Ejecutar pruebas en WebKit
npx bddgen && npx playwright test --project=webkit

# Ejecutar pruebas en una versión emulada de móvil (Pixel 5)
npx bddgen && npx playwright test --project=mobile
```

- To run tests using Docker Compose:

```bash
docker compose build
docker compose run fluidra
```

## Requirements

- To show report, you can use the following command:

```node
npx playwright show-report
```
