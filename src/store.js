import { create } from "zustand";
import product1 from "./assets/iphone.png";
import product2 from "./assets/huawei.png";
import product3 from "./assets/motorola.png";
import product4 from "./assets/nokia.png";
import product5 from "./assets/samsung.png";
import product6 from "./assets/siemens.png";
import product7 from "./assets/xiaomi.png";
import product8 from "./assets/zte.png";

export const useStore = create((set) => ({
  PRODUCTS: [
    {
      id: 1,
      productName: "Iphone",
      price: 999.0,
      productImage: product1,
    },
    {
      id: 2,
      productName: "huawei",
      price: 899.0,
      productImage: product2,
    },
    {
      id: 3,
      productName: "motorola",
      price: 499.0,
      productImage: product3,
    },
    {
      id: 4,
      productName: "nokia",
      price: 899.0,
      productImage: product4,
    },
    {
      id: 5,
      productName: "samsung",
      price: 699.0,
      productImage: product5,
    },
    {
      id: 6,
      productName: "siemens",
      price: 1799.0,
      productImage: product6,
    },
    {
      id: 7,
      productName: "xiaomi",
      price: 399.0,
      productImage: product7,
    },
    {
      id: 8,
      productName: "zte",
      price: 599.0,
      productImage: product8,
    },
  ],

  cartItems: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
  cartItemsSum: 0,
  totalAmount: 0,

  addToCart: (itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: state.cartItems[itemId] + 1 },
    })),

  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: state.cartItems[itemId] - 1 },
    })),

  updateCartItemCount: (newAmount, itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: newAmount },
    })),

  getTotalAmount: () =>
    set((state) => ({
      totalAmount: Object.values(state.cartItems).reduce((x, y) => x + y, 0),
    })),

  // getTotalSum: () => {
  //   let total = 0;
  //   for (const item in get().cartItems) {
  //     if (get().cartItems[item] > 0) {
  //       const itemInfo = get().PRODUCTS.find(
  //         (product) => product.id === Number(item)
  //       );
  //       const cartItemsAmount = get().cartItems[item];
  //       const itemPrice = itemInfo?.price;
  //       total += cartItemsAmount * itemPrice;
  //     }
  //   }

  //   set({ cartItemsSum: total });
  // }

  getTotalSum: () =>
    set((state) => {
      let total = 0;
      for (const item in state.cartItems) {
        if (state.cartItems[item] > 0) {
          const itemInfo = state.PRODUCTS.find(
            (product) => product.id === Number(item)
          );
          const cartItemsAmount = state.cartItems[item];
          const itemPrice = itemInfo?.price;
          total += cartItemsAmount * itemPrice;
        }
      }
      return { cartItemsSum: total };
    }),
}));
