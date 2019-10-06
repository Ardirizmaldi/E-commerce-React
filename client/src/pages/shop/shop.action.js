import ShopActionType from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../components/firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTION_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCES,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsnyc = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
