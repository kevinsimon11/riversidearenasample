const slots = require('./slots/slots.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(slots);
};
