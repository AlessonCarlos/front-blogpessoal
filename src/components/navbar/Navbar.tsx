import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O usuario foi desconectado com sucesso!')
        navigate('/')
        
    }
    return (
        <>
            <div className= 'w-full flex justify-center py-4 bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    Blog Pessoal 

                    <div className='felx gap-4'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link> 
                        Perfil 
                      <Link to='' onClick={logout} className='hover:underline'>Sair</Link>  Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar