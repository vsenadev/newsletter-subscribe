import React from "react";

export function validateEmail(email: string, setValidEmail: React.Dispatch<React.SetStateAction<boolean>>): void{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validate = regex.test(email)

    if(validate){
        setValidEmail(true)
    }else{
        setValidEmail(false)
    }
}