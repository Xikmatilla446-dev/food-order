import { types, Instance } from "mobx-state-tree";
import ItemCart from './ItemCart';


const UserCard = types.model('UserCard', {

    hidden: false,
    items: types.array(ItemCart),


}).actions(self => ({

    addFood(NewItem){


        const CartItem = self.items;

        CartItem.filter((cartItem) => {
            return cartItem.id == NewItem.id
            debugger
        });
        debugger
        if (CartItem && CartItem.length > 0){
            debugger
            return self.items.map(cartItem=>
                cartItem.id === NewItem.id
                    ? {...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        }else { self.items.push(NewItem); }



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
