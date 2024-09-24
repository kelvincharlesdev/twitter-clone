"use client"

import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


export const SignupForm = () => {
    const router = useRouter()
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleEnterButton = () => {
        router.replace('/home')
    }

    return (
        <>
            <Input 
                 placeholder="Digite seu nome"
                 value={nameField}
                 onChange={text => setNameField(text)}               
            />
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
                label="Criar conta"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}