import {types} from "mobx-state-tree";
import ItemList from "./ItemList";


const ProductsModel = types.model('products', {

    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, {items: []}),
});

export default ProductsModel;
