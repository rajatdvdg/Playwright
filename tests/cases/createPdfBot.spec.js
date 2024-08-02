const fs = require('fs');
const { test, expect } = require('@playwright/test');
const { setupLogin } = require('../utils/setup');
const { deleteAll } = require('../utils/setup');

test.beforeEach(async ({ page }) => {
  await setupLogin(page);
});

test.afterEach(async ({ page }) => {
  await deleteAll(page);
});

test('should create pdf bot successfully', async ({ page }) => {

    const filePath = 'tests/utils/Einstein_Theory_of_Relativity_compressed.pdf';
    
    await page.getByRole('link', { name: 'Create new bot' }).click();
    await expect(page).toHaveURL('https://starfishaptly.eastus.cloudapp.azure.com/#/new');

    await page.locator('[id="headlessui-radiogroup-option-\\:r8\\:"]').click();

    const fileInput = await page.$('#file');
    await fileInput.setInputFiles(filePath);

    await page.getByRole('button', { name: 'Create' }).click();


    await page.locator('a:nth-child(6)').click();

    const projectName = await page.inputValue('#name');
    console.log('Project Name is ', projectName);
  
    await page.click('//a[@href="#/"]');
  
    await page.waitForTimeout(1000);
  
    const links = await page.$$('h3');
  
    expect(links.includes(projectName));
  
    await page.getByRole('link', { name: projectName }).click();
  
    await page.getByPlaceholder('Type a message...').fill('What is relativity?');
    
    await page.getByRole('button', { name: 'Send' }).click();
})

    