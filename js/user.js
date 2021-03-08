export class User {

  storage = JSON.parse(sessionStorage.getItem('users'));


  saveUser = (userForm) => {

    this.storage = JSON.parse(sessionStorage.getItem('users'));
    this.storage.push(userForm);
    sessionStorage.setItem('users', JSON.stringify(this.storage));
    
    return console.log(this.storage)
  }

  deleteUser = () => {

  }

  editUser = (editUser) => {
    let newStorage = this.storage.filter((user) => editUser.cpf !== user.cpf)
    newStorage.push(editUser);
    sessionStorage.setItem('users', JSON.stringify(newStorage));
    sessionStorage.removeItem('editUser');
  }

  findUser = (cpf) => {
    return this.storage.find((user) => user.cpf === cpf);
  }
}

export default User;