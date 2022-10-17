import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import api from '../backend/api'

const Teste = () => {
    let code =geraCode()
    const {cartTotal} = useCart();
    const [Nome, setName] = useState('');
    const [Rua, setRua] = useState('');
    const [Telefone, setTel] = useState('');
    const [Email, setEmail] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Numero, setNum] = useState('');
    const [document, setDocument] = useState('');
    function geraCode() {
        var maximo = 10000;
        var i, arr = [];
        for (i = 0; i < maximo; i++) {
            arr[i] = i + 1;
        }
        var p, n, tmp;
        for (p = arr.length; p;) {
            n = Math.random() * p-- | 0;
            tmp = arr[n];
            arr[n] = arr[p];
            arr[p] = tmp;
        }
        return arr[p]
    }

    const cart =
    {
        code: code,
        price: cartTotal,
        email: Email,
        name: Nome
    }

    const transaction = {
        code: cart.code,
        customerEmail: Email,
        customerName: Nome,
        customerMobile: Telefone,
        customerDocument: document,
        billingAddress: Rua,
        billingNumber:Numero,
    }


    async function handleSubmit(e){
        e.preventDefault();
        await api.post(("/carrinho",cart)).then(res=>{console.log(res.data)}).catch(error=>console.log(error))
        await api.post(("/transactions",transaction)).then(res=>{console.log(res.data)}).catch(error=>console.log(error))
        
     
    }
    return (
        <div>
            <div className="container mt-2 bg-danger mb-5  r">
                <form className="row g-3" onSubmit={handleSubmit} >
                    <div className="col-md-6">
                        <label className="form-label">  Nome:</label>
                        <input type="text" placeholder="Digite seu Primeiro Nome" className="form-control" onChange={e => setName(e.target.value)} required /><br />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">E-mail:</label>
                        <input type="email" name='Email' placeholder="Digite seu e-mail" className="form-control " onChange={e => setEmail(e.target.value)} required /><br />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">Logadouro</label>
                        <input type="text" name='rua' placeholder="Digite a rua da entrega" className="form-control " onChange={e => setRua(e.target.value)} required /><br />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Numero</label>
                        <input type="text" name='rua' placeholder="Digite o numero da residencia" className="form-control " onChange={e => setNum(e.target.value)} required /><br />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">Cidade:</label>
                        <input type="text" name='cidade' placeholder="Cidade" className="form-control " onChange={e => setEmail(e.target.value)} required /><br />
                    </div>
                    <div></div>
                    <div className='col-md-4'>
                        <label className="form-label"> Telefone:</label>
                        <input type="tel" className="form-control" name='telefone' placeholder="Digite seu telefone" pattern="([0-9]{2}) [0-9]{5}-[0-9]{4}" onChange={e => setTel(e.target.value)} required /><br />
                    </div>
                    <div className='col-md-4'>
                        <label className="form-label"> Documento:</label>
                        <input type="document" className="form-control" name='document' placeholder="Digite seu telefone" pattern="[0-9]{9}-[0-9]{2}" onChange={e => setDocument(e.target.value)} required /><br />
                    </div>
                    <div className="col-md-8">
                        <label className="form-label">CEP</label>
                        <input type="number" name='cidade' placeholder="Cidade" className="form-control " onChange={e => setEmail(e.target.value)} required /><br />
                    </div>




                    <div className='col-md-12'>
                        <input type="submit" placeholder="enviar " className="btn btn-primary" />
                    </div>
                </form>

            </div></div>
    )
}

export default Teste
