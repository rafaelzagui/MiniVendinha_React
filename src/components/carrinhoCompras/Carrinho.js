import React from 'react'
import './style.css'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
const Carrinho = () => {
  const { items, isEmpty, totalUniqueItems, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  
  if (isEmpty) return <h3 className='text-title text-center fw-bold py-5' > My car is Empty {emptyCart}</h3>
  return (
    <div className='container'>
      <div className='row ms-3'>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4 d-flex ">
          <h3 className='ps-3'>Cart <span className='badge bg-primary'>{totalUniqueItems}</span></h3>
          <h4 className='ps-5 pt-1'>Quantidade de Items<span className='badge bg-primary ms-1'>{totalItems}</span></h4>
        </div>
        <hr></hr>
        <div className='d-flex justify-content-center py-3 pe-5'>
          <h3>Total Price R$ {cartTotal}</h3>
        </div>
        <div className='container-fluid col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8  align-self-center'>
          <table className=' table-light table-hover   '>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} className='align-middle   '>
                    <td className='ms-1'><img src={item.img} className='img-cart' alt={item.title}></img></td>
                    <td>{item.title}</td>
                    <td>R$ {item.price}</td>
                    <td>QTND{item.quantity}</td>
                    <td>
                    <button className='btn btn-outline-success ms-1' onClick={()=>updateItemQuantity(item.id, item.quantity-1) }>-</button>
                    <button className='btn btn-outline-success ms-1'onClick={()=>updateItemQuantity(item.id, item.quantity+1) } >+</button>
                    <button className='btn btn-outline-danger ms-4'onClick={()=>removeItem(item.id)}>Remover Item</button>
                    </td>
                    
                  </tr>
                )
              })}
            </tbody>
               
          </table>
          <div className="d-grid gap-2 col-6 mx-auto">
          <Link to ="/teste"><button className='btn btn-outline-danger '>Avançar</button></Link>  
  
</div>
        </div>
        
      </div>

    </div>
  )
}

export default Carrinho