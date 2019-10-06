import ShopActionType from "../../pages/shop/shop.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined

};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionType.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionType.FETCH_COLLECTION_SUCCES:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionType.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;