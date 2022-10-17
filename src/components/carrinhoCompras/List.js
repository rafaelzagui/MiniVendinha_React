import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import Icon from 'react-icons-kit'
import { remove } from 'react-icons-kit/fa/remove'      
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';       




class List extends Component {
  render() {
    const {itens, precos, removeItem, titulo} = this.props

    return (
      
      <div className='myCar1 '>
        <h2>{titulo} <Icon icon={shoppingCart} size={40}/></h2>
        <ul className="list-group">
          {itens.map( (item, index ) => {
            return ( 
              <FadeIn>
                
                  <li key={index} >
                    
                    <div >
                      <div>{item} - R${precos[index]} </div>
                    
                    <button 
                      className=""
                      onClick={ () => removeItem( index ) }><Icon icon={remove} /></button>
                    

                    </div>
                  </li>
                  
                </FadeIn> 
              )
          })}
        </ul>

        { (itens.length === 0) ?  <div className="alert alert-danger">Você não possui itens no carrinho</div>
        : <div><strong>Total:</strong> {precos.reduce( (precoAnt, precoAtual) => parseFloat(precoAnt)+parseFloat(precoAtual)  )} reais </div>
      
        }
      </div>
    )
  }
}

export default List