import React, { useEffect, useState } from 'react'
import api from '../backend/api'
import { useCart } from 'react-use-cart'






function Company() {
  const { cartTotal } = useCart();

  const [Nome, setName] = useState('');
  const [Email, setEmail] = useState('');

  //cria uma lsita com um array dentro e depois embaralha os valores do array nunca repetindo
  function geraCodigo() {
    var maximo = 1000;
    var p, n, tmp;
    var i, array = [];
    for (i = 0; i < maximo; i++) {
      array[i] = i + 1;
    }
    for (p = array.length; p;) {
      n = Math.random() * p-- | 0;
      tmp = array[n];
      array[n] = array[p];
      array[p] = tmp;
    }
    return array[p];
  }
  let codigo = geraCodigo();
  const carrinho = {
    code: codigo,
    price: cartTotal,
    email: 'rafagm04@gmail.com',
    name: "rafael",
  }

   function handleSubmit(e) {
   
     api.post("/carrinho",carrinho).then(res => {console.log(res.data) }).catch(error => console.log(error))
  

  }

  useEffect(() => {
  }, [handleSubmit()]);

  return (
    <div className="container mt-2 bg-danger mb-5">
      <form className="row g-3" onSubmit={handleSubmit} >
        <div className="col-md-6">
          <label className="form-label">  Nome:</label>
          <input type="text" placeholder="Digite seu Primeiro Nome" className="form-control" onChange={e => setName(e.target.value)} required /><br />
        </div>
        <div className="col-md-8">
          <label className="form-label">E-mail:</label>
          <input type="email" name='Email' placeholder="Digite seu e-mail" className="form-control " onChange={e => setEmail(e.target.value)} required /><br />
        </div>


        <div className='col-md-12'>
          <input type="submit" placeholder="enviar " className="btn btn-primary" />
        </div>
      </form>

    </div>

  )
}

export default Company