import React, { useEffect, useState } from 'react'

import Produtos from '../components/Template/Produtos'



const Pg_Produtos = ({ products }) => {
  const [busca, setBusca] = useState([]);
 

  return (
    <div className="flex-fill">
      <div className='container '>
        <>
          <hr></hr>
          <main className="flex-fill ">
            <div className="container">
              <div className="row pb-2">
                <div className="col-12 col-md-5 mt-3 mb-2" >
                  <form className="justify-content-center justify-content-md-start  mb-md-0">
                    <div className="input-group input-group-sm">
                      <input type="name" className="form-control" placeholder="Digite aqui o que procura" onChange={(e)=>setBusca(e.target.value)} />
                      <button className="btn btn-danger" >Buscar</button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-7 mt-3">
                  <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                    <form className="d-inline-block">
                      <select className="form-select form-select-sm">
                        <option>Ordenar pelo nome</option>
                        <option>Ordenar pelo menor preço</option>
                        <option>Ordenar pelo maior preço</option>
                      </select>
                    </form>
                    <nav className="d-inline-block me-3">
                      <ul className="pagination pagination-sm my-0">
                        <li className="page-item ">
                          <a className="page-link " >1</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" >2</a>
                        </li>
                        <li className="page-item disabled">
                          <a className="page-link" >3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" >4</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" >5</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" >6</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </>
        <hr></hr>
        <div className='row'>
          {products.map((item) => {
            return (
              <Produtos
                id={item.id}
                img={item.image.url}
                title={item.name}
                desc={item.description}
                price={item.price.raw}
                key={item.id}
                item={item}>
              </Produtos>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Pg_Produtos