"use strict";
const AUTH_ROUTE = 'auth';
const signup = require('./signup')(AUTH_ROUTE);
module.exports = { signup };
