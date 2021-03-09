async function getAllUsers() {
  const usersApi = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
  const responseJson = await usersApi.json(); // JSON from the http response
  return responseJson;
}

const storage = sessionStorage.getItem('users');
const editUserStorage = sessionStorage.getItem('editUser');

if(!storage) {
  getAllUsers().then(data => {
    sessionStorage.setItem('users', JSON.stringify(data));
  })
}

if(editUserStorage) {
  sessionStorage.removeItem('editUser');
}