// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { defineConfig } from 'cypress';

// export default defineConfig({
//   // setupNodeEvents can be defined in either
//   // the e2e or component configuration
//   e2e: {
//     setupNodeEvents(on, config) {
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       require('@cypress/code-coverage/task')(on, config);
//       // include any other plugin code...

//       // It's IMPORTANT to return the config object
//       // with any changed environment variables
//       return config;
//     },
//   },
// });
