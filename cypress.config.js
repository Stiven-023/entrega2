const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      /**Tamaño de pantalla */
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;
      config.baseUrl = "https://demo.dolibarr.org/public/demo/index.php"

      return config

    },
  },
  experimentalStudio: true,
  watchForFileChanges: true,

});
