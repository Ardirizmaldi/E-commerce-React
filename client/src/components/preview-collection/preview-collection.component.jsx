import React from "react";
import { withRouter } from "react-router-dom";

import "./preview-collection.stles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  TitleText,
  PreviewContainer
} from "./preview-collection.styles";

const PreviewCollection = ({ title, items, history, match }) => (
  <CollectionPreviewContainer>
    <TitleText
      onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </TitleText>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(PreviewCollection);
