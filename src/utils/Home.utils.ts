import React from "react";
import { useNavigate } from "react-router-dom";

export function validateEmail(email: string): boolean{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validate = regex.test(email)

    return validate;
}