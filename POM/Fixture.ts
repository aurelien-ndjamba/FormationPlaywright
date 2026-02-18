// Import de toutes les pages objets
import {test as base} from '@playwright/test';
import {ContactObjetPage} from './Contact_ObjetPage'; //PageContact


// Nom de la page et on crée une const avec un nom facile à retrouver
type Fixture = {
    contact : ContactObjetPage;
};

const test = base.extend<Fixture>({
    contact : async ({page}, use) => {
        await use(new ContactObjetPage(page));
    }
});

// 2 lignes mandatory pour l'export
const expect = base.expect;
export {test, expect};