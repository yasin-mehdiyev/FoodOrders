import React, { useState } from 'react'
import CartPopup from './components/Cart/CartPopup'
import Meals from './components/Meals/Meals/Meals'
import Header from './components/UI/Header/Header'
import CartProvider from './store/CartProvider'

const App = () => {

  const [modalIsShow, setModalIsShow] = useState(false);

  const showActionOfModal = () => {
    setModalIsShow(true);
  };

  const hideActionOfModal = () => {
    setModalIsShow(false);
  }

  return (
    <CartProvider>
       {modalIsShow && <CartPopup closeModal={hideActionOfModal} />}
       <Header openModal={showActionOfModal} />
       <Meals />
    </CartProvider>
  )
}

export default App
