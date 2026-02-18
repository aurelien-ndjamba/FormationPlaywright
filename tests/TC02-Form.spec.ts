import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';

// When using Playwright CRX
test('test', async ({ page }) => {

  //ACTION
  //await page.goto(process.env.URL!);
  await page.goto('https://test-automation-demo-reva.bolt.host');
  //await page.getByText('Go to Contact →').click();
  //await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').fill(faker.person.firstName());
  //await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill(faker.internet.email());
  //await page.getByTestId('phone-input').click();
  await page.getByTestId('phone-input').fill(faker.phone.number());
  await page.getByTestId('subject-select').selectOption('feedback');
  await page.getByTestId('subject-select').selectOption('support');
  //await page.getByTestId('message-textarea').click();
  await page.getByTestId('message-textarea').fill("Message de test");
  await page.getByTestId('terms-checkbox').check();
  await page.getByTestId('contact-submit-button').click();


  //CHECKING
  await page.getByTestId('notification-text').click();
  await expect(page.getByTestId('contact-notification')).toContainText("Message sent successfully! We will get back to you soon.");
});