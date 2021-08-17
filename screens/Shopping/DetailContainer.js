import React from "react";
import DetailPresenter from "./DetailPresenter";
export default ({ route }) => {
  return <DetailPresenter data={route.params} />;
};
