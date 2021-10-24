import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({getCount,getCartTotal}) {
    return (
        <Container>
            <SubTotal>
                Subtotal({getCount()} items):
                <NumberFormat value={getCartTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckoutButtonContainer>
                Proceed to checkout
            </CheckoutButtonContainer>
        </Container>
    )
}

const Container=styled.div`
padding:20px;
flex:0.3;
`
const SubTotal=styled.div`
font-size:25px;
font-weight:700;
`
const CheckoutButtonContainer=styled.div`
display:flex;
padding:4px 8px;
background-color:#f0c14b;
margin-top:7px;
font-size:20px;
border:2px solid #a88734;
border-radius:4px;
justify-content:center;
cursor:pointer;
 :hover{
    background:#ddb347;
 }
`
export default CartTotal
