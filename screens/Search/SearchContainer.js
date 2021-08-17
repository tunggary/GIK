import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [keyword, setKeyword] = useState();

  const onChange = (text) => {
    setKeyword(text);
    console.log(keyword);
  };

  const onSubmit = () => {
    if (keyword == "") return;
    console.log(keyword);
  };
  return <SearchPresenter onChange={onChange} onSubmit={onSubmit} keyword={keyword} />;
};
