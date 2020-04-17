import { types } from "mobx-state-tree";
import UserCard from './CartUser';
import UserAbout from "./userAbout";

const UsersModel = types.model('user-root', {

    user_name: types.string,
    is_login: false,
    userCart: types.optional(UserCard, {items:[]}),
    userAbout: types.optional(UserAbout, {Users:[]})

});

export default UsersModel

