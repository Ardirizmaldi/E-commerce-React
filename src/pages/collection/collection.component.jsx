import React from "react";
import { connect } from "react-redux";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  // IMPLEMENT HOOKS CLEANING
  // useEffect(() => {
  //   console.log("im subscribing");
  //   const unsubscribeFromCollections = firestore
  //     .collection("collections")
  //     .onSnapshot(snapshot => console.log(snapshot));
  //   return () => {
  //     console.log("subscribe");
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
