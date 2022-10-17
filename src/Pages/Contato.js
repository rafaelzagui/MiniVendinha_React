import React from 'react'
import style from "./Contato.module.css"
import ContatoForm1 from '../components//form/contatoForm'

function Contato(){
    return(
        <div className={style.contato_container1} > 
         <div className={style.contato_container}>
        <h1 className='mb-3'>Página para Contato</h1>
        <p>Há alguma reclamação ou alguma duvida sobre nossos produtos</p>
         </div>
         <div className={style.form}>
         <ContatoForm1></ContatoForm1>
         </div>
         
         </div>
   
    
    )
}

export default Contato