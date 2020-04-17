import { types } from "mobx-state-tree";
import ItemCart from './ItemCart';


const UserCard = types.model('UserCard', {

    items: types.array(ItemCart),


}).actions(self => ({

    addFood(item){

        self.items.push(item);

    }



}));

export default UserCard;
