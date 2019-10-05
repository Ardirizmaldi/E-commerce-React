import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionType from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../components/firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.action";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTION_START, fetchCollectionsAsync);
}
