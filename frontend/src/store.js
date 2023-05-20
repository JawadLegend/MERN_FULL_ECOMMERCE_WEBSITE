import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer,
    newReviewReducer,productReducer,newProductReducer,
    reviewReducer,productReviewsReducer } from "./reducers/productReducer";
import { profileReducer, userReducer,
    forgotPasswordReducer,
    userDetailsReducer,
    allUsersReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer,orderDetailsReducer,allOrdersReducer, orderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newReview: newReviewReducer,
    user: userReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    allUsers: allUsersReducer,
    product: productReducer,
    newProduct: newProductReducer,
     order:orderReducer,
     userDetails: userDetailsReducer,
     review: reviewReducer,
     productReviews: productReviewsReducer,

});


let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
