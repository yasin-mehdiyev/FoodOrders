import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addedItem: (item) => {},
    removedItem: (id) => {},
    clearItem : () => {}
})

export default CartContext
