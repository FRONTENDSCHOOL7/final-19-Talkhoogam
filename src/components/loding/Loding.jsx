import React, { useEffect, useState } from 'react'
import {LodingLayOut, LogoImgStyle} from "../../styles/LodingStyled";
import logo from "../../assets/images/Logo.png";

export default function Loding() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => {
        clearTimeout(timer);
        setIsLoading(true);
        };
    }, []);

    if(isLoading){
        return (
            <LodingLayOut>
                <LogoImgStyle src={logo} alt="톡후감로고" />
            </LodingLayOut>
        )
    }
    
}
