module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(css|styl|less|sass|scss|ttf|woff|woff2|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
    "^.+\\.js$": "babel-jest"
  }
};
