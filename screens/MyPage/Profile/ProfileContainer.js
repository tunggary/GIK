import React from "react";
import ProfilePresenter from "./ProfilePresenter";
import { databaseInfo } from "../../../API";

export default () => {
  return <ProfilePresenter info={databaseInfo} />;
};
