import { types } from "mobx-state-tree";


const User = types.model('user', {

    userName: types.string,
    firstName: types.string,
    lastName: types.string,
    password: types.string,
    Token: types.identifier

});


export default User;
