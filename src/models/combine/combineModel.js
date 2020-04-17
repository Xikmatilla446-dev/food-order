import {types} from "mobx-state-tree";
import ProductsModel from "../product/products";
import UsersModel from "../user/user-root";


const RootModel = types.model("Root", {
    Products: ProductsModel,
    Users: UsersModel
});



export { RootModel };
