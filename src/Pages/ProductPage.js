import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Produtos from "../components/Template/Produtos";
import { useCart } from 'react-use-cart'
import "./App.css";
const ProductPage = ({ props }) => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState([]);
  const [query, setQuery] = useState([]);
  const { addItem } = useCart();

  //
  const pathName = window.location.pathname.substring();
  const [t1, t2, t3] = pathName.split("/");


  const getSearchedProduct = async (url) => {
    // const res = await fetch(url)
    // console.log(data.results)
    // const data = await res.json()

    setQuery(t3);

    props.map((item, index) => {
      if (item.id === query) {
        setProduct(item);
      }
    });
  };

  useEffect(() => {
    getSearchedProduct(query);
  });


  return (
    <div>
      {props.map((item, index) => {
        const items = { id : item.id, img:item.image.url , title:item.name , price : item.price.raw , desc : item.description}
        if (item.id === query) {

          return (
            <section key={index} data-category="product-info" data-component-id="b9652106_01_awz" className="py-20 overflow-hidden">
              <div className="container">
                <div className="row mb-24">
                  <div className="col-12 col-md-6 mb-8 mb-md-0">
                    <div className="position-relative mb-10" >
                      <img className="w-75 h-75 p-2" src={items.img} alt=''></img>

                    </div>

                  </div>
                  <div className="col-12 col-md-6 pt-4 card h-75 mt-5">
                    <div className="ps-lg-20 ">
                      <div className="mb-10 pb-10 border-bottom ps-2">
                        <h1 className="mt-2 mb-6 mw-xl" data-config-id="title">{items.title}</h1>
                        <p className="d-inline-block mt-4 mb-2 h5 text-info">
                          <span className="text-success" data-config-id="price">R$ {items.price}</span>
                        </p>
                        <p className="mw-md text-secondary mt-3 mb-4" data-config-id="desc">Maecenas commodo libero ut molestie dictum. Morbi placerat eros id porttitor sagittis.</p>
                      </div>

                      <div className="d-flex justify-content-center mt-2 mb-2">
                        
                      <a className="me-5 btn w-25 btn-primary" onClick={() => addItem(items)} >Add to cart</a>
                      <a className="btn w-25 btn-primary" onClick={() => addItem(items)} >Comprar</a>
                        

                      </div>

                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mb-16 border-bottom border-2 mt-3">
                    <div className="col-6 col-md-auto"><a className="btn bg-white text-secondary rounded-0 shadow" href="" >Description</a></div>

                  </div>
                  <h3 className="mb-8 text-success pt-5" data-config-id="tab-title">Descrição completa sobre o produto</h3>
                  <p className="mw-2xl text-secondary mb-3" data-config-id="tab-desc" dangerouslySetInnerHTML={{ __html: items.desc }}></p>
                </div>
              </div>
            </section>
          );
        } else { }


      })};
    </div>
  );
};

export default ProductPage;
