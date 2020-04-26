import { types, Instance } from "mobx-state-tree";


const ItemCart = types.model('Item', {

    foodCategory: types.string,
    itemName: types.string,
    description: types.string,
    image: types.string,
    quantity: types.number,
    price: types.number,
    id: types.number

}).actions(self => ({

        increment() {
            self.quantity = self.quantity + 1;
        },

        decrement() {
             self.quantity = self.quantity - 1
        }

    }))
;


export default ItemCart;
