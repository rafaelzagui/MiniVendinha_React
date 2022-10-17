import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from '../Container/Container'
import logo from '../../img/logoBarra.png'
import carrinho from '../../img/carrinho.png'
import { useCart } from 'react-use-cart'
function NavBar() {
const {totalItems} = useCart();
    return (
        <div className={styles.navBar}>
            <Container>

                <ul className={styles.list_start}>
                    
                    <li className={styles.item}><h1 className={styles.h1Gw}>Mini Vendinha</h1></li>
                </ul>


                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/Produtos">Produtos</Link></li>
                    <li className={styles.item}><Link to="/Contato">Contato</Link></li>
                    <li className={styles.item}><Link to="/Company">Empresa</Link></li>
                    <li className={styles.item}><Link to="/Carrinho"><img src={carrinho} alt="carrinho" className={styles.imgCarrinho}></img> <span className='badge bg-info '>{totalItems}</span></Link></li>
                </ul>




            </Container>

        </div>

    )
}
export default NavBar