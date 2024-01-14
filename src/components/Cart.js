import { useActionData } from "react-router-dom";
import cartSlice from "../utils/cartSlice";
import {useSelector } from "react-redux";
import Fooditem from "./Fooditem";

const Cart = () => {
    //i am only subscribing to only the item array not whole redux store
    const cartItem = useSelector(store => store.cart.items);
    // const store = useSelector(store => store); 
    // this should not be doen we have to subscribe only to th soecific tem not whole store
    return (
        <div>
            <h1>Cart Items : {cartItem.length}</h1>
            
            <h2>Item 2</h2>
            <Fooditem item={cartItem}></Fooditem>
        </div>
    )
}

export default Cart;