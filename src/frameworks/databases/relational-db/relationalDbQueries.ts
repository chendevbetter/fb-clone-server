import { IEntityUserObj, ILoginCredentials } from '../../../interfaces/entities';
import { relationDbConnection as conn } from './connectRelationalDb';

// I've got a few options here:
// 1. I use straight up sql - not recommended - I practice this in other places
// 2. I use sequlize straight up here
// 3. I use an internal library I'll build based on sequlize and here I'll only use it
// this is what I'll do. It will be a databases repo including mysql, mongo, redis etc
// THIS project will define .env files for it to use and pass the credentials as a parameter
// the repo alone will not be able to connect anywhre as it wont have credentials.

// console.log(conn)


export const relationalDbQueries = () => {
  const signUpUserToDb = async (entityUserObj: IEntityUserObj) => {
    const firstName = entityUserObj.getFirstName();
    const lastName = entityUserObj.getLastName();
    const email = entityUserObj.getEmail();
    const password = entityUserObj.getPassword();
    const birthdayDate = entityUserObj.getBirthdayDate();
    const gender = entityUserObj.getGender();
    const created_at = new Date();

    try {
      await conn.query(
        `INSERT INTO users (first_name, last_name, email, password, birthday_date, gender, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [firstName, lastName, email, password, birthdayDate, gender, created_at],
      );
    } catch (e) {
      console.log('problem with creating user. Error is:', e);
    }
  };

  const loginUser = async (loginCredentials: ILoginCredentials) => {
    const {email, password} = loginCredentials
    const query = {
      name: 'login-user',
      text: 'select * from users where email = $1',
      values: [email],
    };
    try {
      let user = await conn.query(query)
      user = user.rows[0]
      if (!user) {
        return { code: 404, msg: 'User does not exist' };
      }
        if (user.password === password) {
          return { code: 200, msg: {  userId: user.id, msg: 'authenticated' } };
        } else {
          return { code: 404, msg: 'credentials do not match' };
        }
    } catch (e) {
      console.log('failed login in user');
      return { code: 500, msg: 'Could not login user'};
    }
  };

  return {
    signUpUserToDb,
    loginUser
  };
};

export default relationalDbQueries;
