import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((error) => ({ status: 'rejected', value: error }));

  const photoPromise = uploadPhoto(fileName)
    .then((data) => ({ status: 'fulfilled', value: data }))
    .catch((error) => ({ status: 'rejected', value: error }));

  return Promise.all([userPromise, photoPromise]);
}
