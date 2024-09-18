"use client"

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface InputProps  {
    placeholder: string
    password?: boolean
    filled?: boolean
    icon?:  IconDefinition
    value?: string;
    onChange?: (value: string) => void
}

export const Input = ({placeholder,password,icon, filled, onChange, value}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && "bg-gray-700"}`}>
            {icon && 
                <FontAwesomeIcon 
                    icon={icon} 
                    className="ml-4 size-6 text-gray-500"
                />
            }

            <input
                type={password && !showPassword ? 'password' : 'text'}
                className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
            />
            
            {password && 
                <FontAwesomeIcon 
                    onClick={() => setShowPassword(prev => !prev)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className="cursor-pointer mr-4 size-6 text-gray-500"
                />
            }
        </div>
    )
}