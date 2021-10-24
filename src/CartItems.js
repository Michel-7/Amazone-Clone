import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({cartItems}) {
    return (
        <Container>
           <Title>Shopping Cart</Title>
           <hr/>
           {
           cartItems.map((item)=>(
               <CartItem
               id={item.id}
               item={item.product}
               />

           ))
           }
           
        </Container>
    )
}

const Container=styled.div`
padding:20px;
margin-right:18px;
flex:0.8;
`
const Title=styled.div`
font-size:40px;
margin-bottom:8px;
`

export default CartItems
