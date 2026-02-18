// Import de la fixture
import { test, expect } from '../POM/Fixture';


test('Envoie de formulaire reussie', async ({ page, contact }) => {
  await page.goto('https://test-automation-demo-reva.bolt.host');
  await page.getByText('Go to Contact →').click();
  await contact.fillForm();
});