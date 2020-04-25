import {getParent, hasParent, onSnapshot, types} from "mobx-state-tree";
import ItemCart from './ItemCart';
import { addItemToCart } from "./cart.utils";


const UserCard = types.model('UserCard', {

    hidden: false,
    items: types.array(ItemCart),
    quantityTest: false


}).actions(self => ({

     addFood(NewItem) {
         // debugger
         self.items = addItemToCart(self.items, NewItem);

    },

    cartHidden() {
        self.hidden = !self.hidden
    }


})).views(self => ({

    get totalFood() {
        return self.items.length;
    }
}));

export default UserCard;
