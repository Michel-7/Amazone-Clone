import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartItems}) {
    const getCartTotal=()=>{
        let total=0;
        cartItems.forEach((item)=>{
            total+=item.product.price*item.product.quantity;
        })
        return total;
    }
    const getCount=()=>{
        let count=0;
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })
        return count;

    }
    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal getCount={getCount} getCartTotal={getCartTotal}/>
        </Container>
    )
}
const Container=styled.div`
background-color:white;
display:flex;
padding:14px 18px 0px 18px;
`


export default Cart

