import React, {useState} from "react";
import NavBar from "../src/components/NavBar";
import Courses from "../src/components/Courses";
import CartsItens from "../src/components/CartsItens";


const ShoppingCart = () => {

  const [cart, setCart] = useState([])
  return (
    <>
    <NavBar />
    <Courses />
    <CartsItens cart={cart} />
    </>
  )
}

export default ShoppingCart;
