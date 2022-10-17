import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

const ProdutoHome = (props) => {
    const { addItem } = useCart();
  return (
    <>
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-3 mb-4'>

      <div className='card shadow-rounded  p-2 '>
         
        <Link to={`/Produtos/${props.id}`} title={props.title}><img src={props.img} alt='' className='card-img-top  pt-2 ' ></img></Link>
        <div className="row"><h5 className="card-title p-3">{props.title}</h5></div>
        <span className='fw-bolder ps-1 mt-'> R$ {props.price}</span>
        <div className="row"><p className='card-text ps-3 pt-3'></p>
        </div>
        <div className="d-grid  "><button className='btn btn-sm btn-outline-success ' onClick={() => addItem(props)}>add cart</button></div>
        


      </div>

    </div>
  </>
  )
}

export default ProdutoHome