import ShopActionTypes from "./shop.styles";

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});