import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, quantity) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product === product
      );

      if (existingItemIndex !== -1) {
        // El producto ya existe en el carrito, actualiza la cantidad
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += quantity;

        return { cart: updatedCart };
      } else {
        // El producto no existe en el carrito, añádelo
        return { cart: [...state.cart, { product, quantity }] };
      }
    }),
  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product !== product),
    })),
  clearCart: () => set({ cart: [] }),
  getCurrentCart: () => useCartStore.getState().cart,
}));

let currentCart = []; // Variable para almacenar el carrito actual

useCartStore.subscribe((state) => {
  console.log("Updated Cart State:", state.cart);
  currentCart = state.cart; // Actualizar la variable del carrito actual
});

export { useCartStore, currentCart };
