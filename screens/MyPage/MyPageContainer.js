import React, { useState } from "react";
import MyPagePresenter from "./MyPagePresenter";
import LoginPresenter from "./LoginPresenter";

export default () => {
  const [isLogin, setIsLogin] = useState(false);
  return isLogin ? <MyPagePresenter /> : <LoginPresenter />;
};
