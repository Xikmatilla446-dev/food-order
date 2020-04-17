import {types} from "mobx-state-tree";
import User from "./user";

const UserAbout = types.model('UserAbout', {

    Users: types.array(User),


}).actions(self => ({

    addFood(item){
        self.Users.push(item);
    }



}));

export default UserAbout;
