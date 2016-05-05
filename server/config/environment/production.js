'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP ||
  process.env.IP ||
  undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT ||
  process.env.PORT ||
  8080,

  // MongoDB connection options
  mongo: {
    uri:
    'mongodb://admin123:admin456@ds021671.mlab.com:21671/seetha_raghavan'
  },

  hostname: 'https://mathhunter.herokuapp.com'

};
