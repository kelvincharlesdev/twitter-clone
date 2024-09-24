"use client"

import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export const SigninForm = () => {
    const router = useRouter()
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return (
        <>
            <Input 
                 placeholder="Digite seu email"
                 value={emailField}
                 onChange={text => setEmailField(text)}               
            />


            <Input 
                placeholder="Digite sua senha" 
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <Button
                label="Entrar"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}