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

  editUser = (form) => {
    const editUser = JSON.parse(sessionStorage.getItem('editUser'));
    let newStorage = storage.filter((user) => editUser.cpf !== user.cpf)
    newStorage.push(form);
    sessionStorage.setItem('users', JSON.stringify(newStorage));
    sessionStorage.removeItem('editUser');
  }
}

export default User;