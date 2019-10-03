import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsnyc } from "./shop.action";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsnyc } = this.props;
    fetchCollectionsStartAsnyc();

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/ecommerce-db-aa949/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collectios => console.log(collectios));
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsnyc: () => dispatch(fetchCollectionsStartAsnyc())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
