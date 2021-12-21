"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDb = void 0;
const mongoDb = () => {
    const signUpUserToDb = (entityUserObj) => {
        const firstName = entityUserObj.getFirstName();
        const lastName = entityUserObj.getLastName();
    };
    return {
        signUpUserToDb,
    };
};
exports.mongoDb = mongoDb;
exports.default = exports.mongoDb;
