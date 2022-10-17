import React from 'react'
import './overWrite.css'
function Pesquisa (){
    return(
        <>
        <hr></hr>
        <main className="flex-fill ">
        <div className="container">
        <div className="row pb-2">
        <div className="col-12 col-md-5 mt-3 mb-2" >
            <form className="justify-content-center justify-content-md-start  mb-md-0">
                <div className="input-group input-group-sm">
                    <input type="text" className="form-control" placeholder="Digite aqui o que procura"/>
                    <button className="btn btn-danger">Buscar</button>
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

    )
}

export default Pesquisa