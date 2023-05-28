import { request } from "@umijs/max";

export async function shoppingLists() {
  // return request("/api/shoppingLists", {
  //   method: "GET",
  // });
  return {
    data: [
      {
        id: 1,
        name: "苹果",
        price: 33,
      },
    ],
  };
}
