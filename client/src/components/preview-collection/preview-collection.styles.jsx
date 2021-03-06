import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: left;
    margin-left: 15px;
  }
`;

export const TitleText = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    margin-top: 0;
    align-items: left;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
