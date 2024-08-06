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

test('should create text bot successfully', async ({ page }) => {

    const filePath = 'tests/utils/comprehension.txt';
    const text = fs.readFileSync(filePath, 'utf-8');
    
    await page.getByRole('link', { name: 'Create new bot' }).click();
    await expect(page).toHaveURL('https://starfishaptly.eastus.cloudapp.azure.com/#/new');

    await page.locator('[id="headlessui-radiogroup-option-\\:r6\\:"]').click();

    await page.getByPlaceholder('Enter the text').fill(text);

    await page.getByRole('button', { name: 'Create' }).click();

    await page.locator('a:nth-child(6)').click();

    const projectName = await page.inputValue('#name');
    console.log('Project Name is ', projectName);
  
    await page.click('//a[@href="#/"]');
  
    await page.waitForTimeout(1000);
  
    const links = await page.$$('h3');
  
    expect(links.includes(projectName));
  
    await page.getByRole('link', { name: projectName }).click();
  
    await page.getByPlaceholder('Type a message...').fill('What role does the Whispering Woods play in the story, and why is it significant to the quest?');
    
    await page.getByRole('button', { name: 'Send' }).click();
})