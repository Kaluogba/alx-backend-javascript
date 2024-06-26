import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
