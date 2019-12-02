module.exports = {
  description: 'Add a base sass styles',
  prompts: [],
  actions: [
    {
      type: 'addMany',
      templateFiles: ['./sass/styles/**/*.scss'],
      destination: '../src'
    }
  ]
};
