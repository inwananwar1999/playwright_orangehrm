import { test, expect } from '@playwright/test';

test.describe('Menu Admin',()=>{
  test.beforeEach(async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
  })
  test('Create Data', async ({ page }) => {
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('H');
    await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Hendra ');
    await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Hendra G');
    await page.getByRole('textbox', { name: 'Type for hints...' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Hendra Gunawan');
  });

  test('Search Data', async ({ page }) => {

  });
})