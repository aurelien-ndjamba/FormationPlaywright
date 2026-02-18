import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { ContactObjetPage } from '../POM/Contact_ObjetPage';

test('test de remplissage de formulaire avec Page POM : FormPage.ts', async ({ page }) => {
  await page.goto('https://test-automation-demo-reva.bolt.host');
  //await form.goto(process.env.URL);
  //await page.goto((process.env.URL!));
  await page.getByText('Go to Contact →').click();
  const remplirFormulaire = new ContactObjetPage(page); 
  remplirFormulaire.fillForm;
});