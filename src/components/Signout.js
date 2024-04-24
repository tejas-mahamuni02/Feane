import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signout() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.removeItem("login")
    //  deletecart()
    // getCart()
    navigate("/Signin")
  }, [])
  // function getCart() {
  //   fetch("http://localhost:3000/cart").then((resp1) => {
  //     resp1.json().then((resp2) => {
  //       console.log(resp2)
  //     })
  //   })
  // }
  // function deletecart() {
  //   getCart()
  //   fetch(`http://localhost:3000/cart/${cart}`, {
  //     method: "delete"
  //   }).then((resp1) => {
  //     resp1.json().then((resp2) => {
  //       console.log(resp2)
  //     })
  //   })
  // }
  return (
    <div>

    </div>
  )
}

export default Signout
