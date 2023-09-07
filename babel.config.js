module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": "./",
          "@tools":"./tools",
          "@src": "./src", // 这里设置您想要的别名和对应的路径
          "@utils":"./src/utils",
          "@common":"./src/common",
        },
      },
    ],
  ],
};
