import { test, expect } from '@playwright/test';
import * as path from 'path';
test.describe.configure({ mode: 'serial' });

test.describe('Menu PIM',()=>{
  test.beforeEach(async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'PIM' }).click();
  })
  test('Add Employee', async ({ page }) => {
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('heading', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Ahdan');
    await page.getByRole('textbox', { name: 'Middle Name' }).click();
    await page.getByRole('textbox', { name: 'Middle Name' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Sri');
    await page.getByRole('textbox', { name: 'Last Name' }).click();
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Sudoyo');
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(path.join(__dirname, './documents','Pemesanan.png'));
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('Successfully Saved').click();
  });

  // test('Search Data', async ({ page }) => {

  // });
})