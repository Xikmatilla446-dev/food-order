import { types, Instance } from "mobx-state-tree";
import ItemCart from './ItemCart';


const UserCard = types.model('UserCard', {

    hidden: false,
    items: types.array(ItemCart),


}).actions(self => ({

    addFood(item){

        self.items.push(item);

    },

    cartHidden(){

        self.hidden = !self.hidden

    }



})).views(self => ({

    totalFood() {
        return self.items.length;
    }
}));

export default UserCard;
