import {onSnapshot, types} from "mobx-state-tree";
import { RootModel } from "../combine/combineModel";





export const setupRootStore = () => {
    const rootTree = RootModel.create({
        Products:{ currency: "SUM", is_paid: false },
        Users:{ user_name: "Xikmatilla", is_login: false}

    });


    onSnapshot(rootTree, (snapshot) => console.log('snapshot', snapshot));
    return {rootTree};
};
