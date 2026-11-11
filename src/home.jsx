import { useEffect, useState } from 'react';
import Hero from './hero'
import Navbar from './navbar'
import Sub_Nav from './sub_nav'
import Custome_Hook from './custom_hook';
import { useNavigate } from 'react-router-dom';
function Home() {

    const token = localStorage.getItem('Login Token');
    
    const navigate=useNavigate();

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
    }, [token,navigate]);

    return (
        <>
            <Navbar />
            {
                token? (
                    <Sub_Nav />
                ):
                <></>
            }
            <Hero/>
            <Custome_Hook/>

        </>
    )
}

export default Home