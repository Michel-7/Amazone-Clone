import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'

function Header({cartItems,user,signOut}) {
    const getCount=()=>{
        let count=0;
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })
        return count;

    }
    return (
       <Container>
            <HeaderLogo>
            <Link to='/'>
                <img src="https://i.imgur.com/7I9Was5.png"/>
            </Link>
            </HeaderLogo>
            <LocationOnIcon/>
            <HeaderOptionAdress>
              <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select your Address</OptionLineTwo>
            </HeaderOptionAdress>
            <HeaderSearch>
                 <HeaderSearchInput type='text'/>
                 <HeaderSearchIconContainer>
                     <SearchIcon/>
                 </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                <OptionLineOne>Hello,{user.name} </OptionLineOne>
                <OptionLineTwo onClick={signOut}>Sign out</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                <OptionLineOne>Returns </OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                    <HeaderOptionCart>
                    <Link to='/cart'>
                        <ShoppingCartIcon/>
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                    </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}
const Container=styled.div`
height:60px;
width:100%;
min-width:980px;
background-color:#0F1111;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
`
const HeaderLogo = styled.div`
img{
width:100px;
margin:11px;
}`
const HeaderOptionAdress=styled.div`
padding-left:9px;
`
const OptionLineOne= styled.div`
`
const OptionLineTwo= styled.div`
font-weight:700;
cursor:pointer;
`
const HeaderSearch=styled.div`
display:flex;
flex-grow:1;
margin-left:4px;
background-color:white;
:focus-within {
    box-shadow:0 0 0 3px #F90;
}
`
const HeaderSearchInput=styled.input`
flex-grow:1;
height:40px;
border-radius:4px;
overflow:hidden;
:focus{
    outline:none;
}
border:0;
`
const HeaderSearchIconContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#febd69;
width:45px;
color:black;

`
const HeaderNavItems=styled.div`
display:flex;
`
const HeaderOption=styled.div`
padding:10px 9px 10px 9px;
`
const HeaderOptionCart=styled.div`
display:flex;
a{
 display:flex;
align-items:center;
padding:9px;
color:White;
text-decoration:none;
}
`
const CartCount=styled.div`
padding-left:9px;
color:#f08804;
`
export default Header
