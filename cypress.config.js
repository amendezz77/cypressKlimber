const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://purchase-testing.klimber.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        log(message){
         console.log('Mensaje del console log del task ' + message)
         return null
        } 
     })
    },
    
    excludeSpecPattern:[
      "**/1-getting-stared/*.js",
      "**/2-advanced-examples/*.js"
    ],
    viewporWidth: 1920,
    viewportHeight: 1000
    

  },
});
