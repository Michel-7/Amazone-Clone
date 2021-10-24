import React from 'react'
import styled from 'styled-components'
import {auth,provider} from './firebase'

function Login({setUser}) {
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            let userData=result.user;
            let user={
                name:userData.displayName,
                email:userData.email,
                photo:userData.photoURL
            }
            localStorage.setItem('user',JSON.stringify(user));
            setUser(user);
        }).catch((error)=>{
            alert(error.message);
        })

    }
    return (
        <Container>
            <Content>
                <AmazonLogo src='https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png'/>
                <h1>Sign into Amazon</h1>
                <LoginButton 
                onClick={signIn}>
                    Sign in with Google
                </LoginButton>

            </Content>
            
        </Container>
    )
}

const Container=styled.div`
width:100%;
height:100vh;
background-color:aliceblue;
display:grid;
place-items:center;
`
const Content=styled.div`
padding:100px;
background-color:white;
border-radius:5px;
box-shadow:0 1px 3px gray;
text-align:center;
`
const AmazonLogo=styled.img`
height:120px;
margin-bottom:40px;
`
const LoginButton=styled.button`
margin-top:40px;
background-color:#f0c14b;
height:40px;
border:2px solid #aa88734;
border-radius:4px;
padding:4px 8px;
cursor:pointer;
`





export default Login
