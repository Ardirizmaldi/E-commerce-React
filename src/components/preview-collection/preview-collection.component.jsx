import React from "react";

import "./preview-collection.stles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  TitleText,
  PreviewContainer
} from "./preview-collection.styles";

const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleText>{title.toUpperCase()}</TitleText>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
