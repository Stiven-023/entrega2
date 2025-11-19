const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Configuraciones de timeouts - FUERA de setupNodeEvents
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 60000,
    responseTimeout: 30000,
    requestTimeout: 10000,
    execTimeout: 60000,
    taskTimeout: 60000,
    experimentalSessionAndOrigin: true,
    
    // Base URL
    baseUrl: "https://demo.dolibarr.org/public/demo/index.php",
    
    // Tamaño de pantalla
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Puedes agregar plugins o tareas personalizadas aquí
      
      return config;
    },
  },
  
  // Configuraciones experimentales
  experimentalStudio: true,
  watchForFileChanges: true,
});