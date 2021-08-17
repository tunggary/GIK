import React from "react";
import LoginPresenter from "./LoginPresenter";
export default () => {
  const onSubmit = (id, password) => {
    console.log(id, password);
  };

  return <LoginPresenter onSubmit={onSubmit} />;
};
