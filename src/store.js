import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import product1 from "./assets/iphone.webp";
import product2 from "./assets/huawei.webp";
import product3 from "./assets/motorola.webp";
import product4 from "./assets/nokia.webp";
import product5 from "./assets/samsung.webp";
import product6 from "./assets/oppo.webp";
import product7 from "./assets/xiaomi.webp";
import product8 from "./assets/zte.webp";
import product9 from "./assets/poco.webp";
import product10 from "./assets/infinix.webp";

export const useStore = create(persist((set) => ({
  PRODUCTS: [
    {
      id: 1,
      productName: "Iphone",
      price: 799.0,
      productImage: product1,
      model: "12",
      display: "6.1",
      camera: "12 mp + 12 mp",
      memory: "6/64",
      color: "Blue",
    },
    {
      id: 2,
      productName: "huawei",
      price: 169.0,
      productImage: product2,
      model: "P Smart 2021 NFC",
      display: "6.67",
      camera: "48 mp + 8 mp + 2 mp",
      memory: "4/128",
      color: "Green",
    },
    {
      id: 3,
      productName: "motorola",
      price: 199.0,
      productImage: product3,
      model: "G60S",
      display: "6.8",
      camera: "64 mp + 8 mp + 5 mp + 2 mp",
      memory: "6/128",
      color: "Blue",
    },
    {
      id: 4,
      productName: "nokia",
      price: 149.0,
      productImage: product4,
      model: "G11 Plus",
      display: "6.5",
      camera: "50 mp + 2 mp",
      memory: "4/64",
      color: "Grey",
    },
    {
      id: 5,
      productName: "samsung",
      price: 119.0,
      productImage: product5,
      model: "Galaxy A03",
      display: "6.5",
      camera: "48 mp + 2 mp",
      memory: "3/32",
      color: "Blue",
    },
    {
      id: 6,
      productName: "oppo",
      price: 299.0,
      productImage: product6,
      model: "Reno7",
      display: "6.43",
      camera: "64 mp + 2 mp  + 2 mp",
      memory: "8/128",
      color: "Cosmic Black",
    },
    {
      id: 7,
      productName: "xiaomi",
      price: 177.0,
      productImage: product7,
      model: "10C",
      display: "6.71",
      camera: "50 mp + 2 mp",
      memory: "4/64",
      color: "Graphite Gray",
    },
    {
      id: 8,
      productName: "zte",
      price: 89.0,
      productImage: product8,
      model: "A51",
      display: "6.52",
      camera: "13 mp + 2 mp",
      memory: "2/32",
      color: "Grey",
    },
    {
      id: 9,
      productName: "poco",
      price: 229.0,
      productImage: product9,
      model: "M4 Pro",
      display: "6.43",
      camera: "64 mp + 8 mp  + 2 mp",
      memory: "6/128",
      color: "Yellow",
    },
    {
      id: 10,
      productName: "infinix",
      price: 149.0,
      productImage: product10,
      model: "HOT 12 Play NFC",
      display: "6.82",
      camera: "13 mp + 2 mp  + Ai",
      memory: "4/64",
      color: "Racing Black",
    },
  ],

  cartItems: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0 },
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

  deleteCartItem: (itemId) =>
    set((state) => ({
      cartItems: { ...state.cartItems, [itemId]: 0 },
    })),

  // cleanCart: () =>
  // set(() => ({
  //   cartItems: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, },
  // })),


}),
{
  storage: createJSONStorage(() => localStorage), 
},
));
