import { IEntityUserObj } from '../../../interfaces/entities';

export const mongoDb = () => {
  const signUpUserToDb = (entityUserObj: IEntityUserObj) => {
    const firstName = entityUserObj.getFirstName();
    const lastName = entityUserObj.getLastName();
  };

  return {
    signUpUserToDb,
  };
};

export default mongoDb;
