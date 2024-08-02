const { expect } = require('@playwright/test');
const { validUser } = require('./data');

async function setupLogin(page) {
    await page.goto('/');
    await page.fill('#username', validUser.username);
    await page.fill('#password', validUser.password);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
  }


async function deleteAll(page) {
    await page.locator('a:nth-child(6)').click();

    await page.getByRole('button', { name: 'Delete bot' }).click();

    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.type()).toContain('confirm')
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Delete bot' }).click();
    await page.waitForTimeout(5000);

}
  
module.exports = {
    setupLogin,
    deleteAll,
  };