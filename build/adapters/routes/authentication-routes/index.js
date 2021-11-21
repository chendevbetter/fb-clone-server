"use strict";
const AUTH_ROUTE = 'auth';
console.log('index ran');
const signup = require('./signup')(AUTH_ROUTE);
module.exports = { signup };
