import React, { useEffect, useState } from 'react';
import '../Template/overWrite.css'

import api from '../../backend/api'

function ContatoForm() {
  const [Nome,setName] = useState('');
  const [Sobrenome,setFName] = useState('');
  const [Telefone,setTel] = useState('');
  const [Email,setEmail] = useState('');
  const [Desc,setDesc] = useState('');




    async function handleSubmit(e){
    e.preventDefault();
  
    const res = await api.post('/forms',{
     Nome,
     Sobrenome,
     Telefone,
     Email,
     Desc
    })
  
   }

    // inicilização gw and services



  return (
    <div className="container mt-2 bg-danger mb-5">
      <form className="row g-3" onSubmit={handleSubmit} >
        <div className="col-md-6">
          <label className="form-label">  Nome:</label>
          <input type="text"  placeholder="Digite seu Primeiro Nome" className="form-control" onChange={e=>setName(e.target.value)} required /><br />
        </div>
        <div className="col-md-6">
          <label className="form-label">  Sobrenome:</label>
          <input type="text" name='sobrenome' placeholder="Digite seu Sobrenome" className="form-control" onChange={e=>setFName(e.target.value)} required /><br />
        </div>
        <div className="col-md-8">
          <label className="form-label">E-mail:</label>
          <input type="email" name='Email' placeholder="Digite seu e-mail" className="form-control " onChange={e=>setEmail(e.target.value)} required /><br />
        </div>
        <div className='col-md-4'>
          <label className="form-label"> Telefone:</label>
          <input type="tel" className="form-control" name =  'telefone' placeholder="Digite seu telefone" pattern="[0-9]{2}[0-9]{9}" onChange={e=>setTel(e.target.value)} required /><br />
        </div>
        <div className='col-md-12'>
          <label className="form-label" >Descrição do Problema</label>
          <textarea placeholder="Por favor relate detalhadamente seu problema" className="form-control" onChange={e=>setDesc(e.target.value)} name='desc' rows="3"  ></textarea>
        </div>
        <div className='col-md-12'>
          <input type="submit" placeholder="enviar " className="btn btn-primary" />
        </div>
      </form>

    </div>


  );
}

export default ContatoForm;