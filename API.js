export const priceToString = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const deduplicating = (arr) => {
  return [...new Set(arr)];
};

export const checkCategoryNum = (num) => {
  if (num === 1) return "상의";
  else if (num === 10) return "하의";
  else if (num === 100) return "양말";
  else if (num === 1000) return "악세사리";
};

export const databaseInfo = {
  Profile: {
    NickName: "Studio Yoon",
    profileImage: require("./img/clothes1.jpeg"),
    thumnailImage: require("./img/myPage/profileBackground.png"),
    Address: "서울시 관악구 삼성동 1726",
    Introduction:
      "안녕하세요 스튜디오 윤입니다.\n저희는 하나하나 일일이 검수하여 항상 좋은 상품을 취급합니다.",
  },
  Product: [
    {
      id: 1,
      Title: "구찌 티셔츠",
      Category: 1,
      Price: 12400,
      thumnail: require("./img/clothes1.jpeg"),
    },
    {
      id: 2,
      Title: "반팔 로고 티셔츠",
      Category: 1,
      Price: 34000,
      thumnail: require("./img/clothes2.jpeg"),
    },
    {
      id: 3,
      Title: "남색 셔츠",
      Category: 1,
      Price: 54400,
      thumnail: require("./img/clothes3.jpeg"),
    },
    {
      id: 4,
      Title: "리바이스 청바지",
      Category: 10,
      Price: 103400,
      thumnail: require("./img/clothes4.jpeg"),
    },
    {
      id: 5,
      Title: "양말",
      Category: 100,
      Price: 1000,
      thumnail: require("./img/clothes6.png"),
    },
    {
      id: 6,
      Title: "악세사리",
      Category: 1000,
      Price: 7000,
      thumnail: require("./img/clothes5.png"),
    },
    {
      id: 7,
      Title: "홍익 가방",
      Category: 1000,
      Price: 7000,
      thumnail: require("./img/clothes7.png"),
    },
  ],
};
