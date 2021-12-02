"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cm_validation2_1 = require("cm-validation2");
function buildMakeUser() {
    return function makeUser(userData, next) {
        const { firstName, lastName, emailOrNumber, password, birthdayDate, gender } = userData;
        console.log(userData);
        const validator = new cm_validation2_1.StringsValidation();
        let validationsArr = [];
        validationsArr.push(validator.validateStrLength(firstName, 1, 20));
        validationsArr.push(validator.validateStrLength(lastName, 1, 40));
        validationsArr.push(validator.validateStrLength(emailOrNumber, 1, 50));
        validationsArr.push(validator.validateStrLength(password, 1, 50));
        validationsArr.push(validator.validateStrLength(birthdayDate, 1, 20));
        validationsArr.push(validator.validateStrLength(gender, 1, 8));
        const isDataValid = !validationsArr.includes(false);
        if (isDataValid) {
            return Object.freeze({
                getFirstName: () => firstName,
                getLastName: () => lastName,
                getEmail: () => emailOrNumber,
                getPassword: () => password,
                getBirthdayDate: () => birthdayDate,
                getGender: () => gender,
            });
        }
        else {
            console.log('is data valid', validationsArr);
            console.log('userData is', userData);
            // return { error: true, msg: 'data not valid' };
            next('problem with creating a user');
        }
    };
}
exports.default = buildMakeUser;
