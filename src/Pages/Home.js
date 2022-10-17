import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import ProdutoHome from '../components/Template/ProdutoHome'




import './App.css'
const Home = ({ produto }) => {
  console.log(produto)

  return (

    <div>
      <Carousel>
      </Carousel>
      <div className='container'>
        <div className=' container row ms-1 p-2 mb-4 '>
          {
            produto.map((item, index) => {
              console.log(item)
              const items = {
                id: item.id,
                price: item.price.raw,
                title: item.name,
                img: item.image.url
              }
              for (var i = index; i <= 3; i++) {
                return (<ProdutoHome title={items.title} price={items.price} img={items.img} id={items.id}></ProdutoHome>)
              }
            })
          }

        </div>
      </div>

    </div>

  )

}

export default Home