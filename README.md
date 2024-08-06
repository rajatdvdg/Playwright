# Playwright Installation and Repo Clone

This guide will help you set up your Playwright on your machine and cover the installation of Visual Studio Code (VSCode), Playwright, and cloning the GitHub repository.

> These steps are designed for a Windows Machine. Do not try it on a Mac or Linux or Ubuntu system.

## Step 1: Install Visual Studio Code (VSCode)

1. Download the installer from the [official VSCode website](https://code.visualstudio.com/Download).
2. Run the downloaded `.exe` file.
3. Follow the on-screen instructions to complete the installation.

### Verification

1. Open VSCode.
2. Verify the installation by checking the version: `Help > About`.

## Step 2: Install Node.js

1. Download the installer from the [official Node.js website](https://nodejs.org/).
2. Run the downloaded `.msi` file.
3. Follow the on-screen instructions to complete the installation.

### Verification

1. Open Command Prompt (cmd).
2. Verify the installation by running the following commands:
   ```sh
   node -v
   npm -v

## Step 3: Install Playwright

1. Open VSCode.
2. Open the terminal in VSCode by going to Terminal > New Terminal.
3. Install Playwright by running the following command:
   ```sh
   npm init playwright@latest

### Verification
1. Verify the installation by running the following command in the terminal:
   ```sh
   npx playwright --version

## Step 4: Clone the GitHub Repository
1. Open Command Prompt (cmd) or Git Bash.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
   ```sh
   git clone https://github.com/rajatdvdg/Playwright.git
4. Navigate to the cloned repository directory:
   ```sh
   cd Playwright

### Verification
1. Verify that the repository has been cloned by listing the contents of the directory:
   ```sh
   dir

## Additional Setup
1. Open the cloned repository in VSCode by running:
   ```sh
   code .
2. Install any necessary dependencies:
   ```sh
   npm install
## Running Playwright Tests
1. To run the Playwright tests, use the following command in the terminal:
   ```sh
   npx playwright test

2. To run a single Playwright test, use the following command in the terminal and replace example.spec.js with test case name
   ```sh
   npx playwright test example.spec.js

3. To run the Playwright tests on a single browser, use the following command in the terminal and replace chromium with browser name such as chromium | edge | firefox | safari | webkit
   ```sh
   npx playwright test --project chromium

4. To run the Playwright tests in headed view, use the following command in the terminal. You can watch the execution take place in the browser using this command.
   ```sh
   npx playwright test --headed

## Documentation
For more detailed documentation on how to write tests, refer to the Documentation directory or visit the [Playwright official documentation](https://playwright.dev/docs/writing-tests).