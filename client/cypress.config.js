module.exports = {
  // The rest of the Cypress config options go here...
  projectId: "meueyd",

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
