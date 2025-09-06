import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
test.describe('Menu Admin',()=>{
  test.beforeEach(async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
  })
  test('Create Data', async ({ page }) => {
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ahdan');
    await page.getByRole('option', { name: 'Ahdan Sri Sudoyo' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('ahdann');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('P@ssw0rd');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('P@ssw0rd');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Successfully Saved').click();
  });

  // test('Search Data', async ({ page }) => {

  // });
})