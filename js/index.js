const getAllUsers = async () => {
  const usersApi = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
  const responseJson = await usersApi.json(); //extract JSON from the http response
  // do something with myJson
}
