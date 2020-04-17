import { types, Instance } from "mobx-state-tree";


const ItemCart = types.model('Item', {

    foodCategory: types.string,
    itemName: types.string,
    description: types.string,
    image: types.string,
    quantity: types.number,
    price: types.number,

});


export default ItemCart;
