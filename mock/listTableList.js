// module.exports = {
//   "GET /api/shoppingLists": {
//     data: {
//       name: "Serati Ma",
//       price: 10,
//     },
//   },
// };

const getRule = () => {
  return [
    {
      name: "苹果",
      price: 33,
    },
  ];
};

export default {
  "GET /api/rule": getRule,
};
