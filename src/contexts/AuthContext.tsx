import { createContext, type ReactNode, useState } from "react";
import {type UsuarioLogin } from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { Await } from "react-router-dom";

interface AuthContexProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContex = createContext ({} as AuthContexProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin> ({
        id: 0,
        nome: "",
        usuario:  "",
        senha: "",
        foto: "",
        token: ""

    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try{
            await login(`/usuarios/login`, usuarioLogin, setUsuario)
            alert("O Usuário foi autenticado com sucesso!")
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout(){
        setUsuario({
            id: 0,
            nome: "",
            usuario:  "",
            senha: "",
            foto: "",
            token: ""
        })
        
    }

    return (
        <AuthContex.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContex.Provider>
    )
}