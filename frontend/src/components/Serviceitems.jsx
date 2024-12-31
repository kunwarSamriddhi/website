import React, { useEffect, useState } from 'react'
// import coffee from '../assets/coffee.jpg'
import blogContext from '../context/blogs/BlogContext'
import { useContext } from 'react'

const Serviceitems = () => {
    const context = useContext(blogContext);
    const { state: { cart, products }, dispatch, allProduct } = context
    console.log("this is my products:", products);

    useEffect(() => {
        allProduct()
    }, []);

    return (
        <div className='container'>
            <h1 className='service-heading my-3' style={{ color: 'orange' }}>OUR <span style={{ color: 'white' }}>PRODUCTS</span></h1>
            <div className='row'>
                {products && products.map((e) => {

                    return (
                        <div className='col-md-3' key={e.id}>
                            <div className="card" >
                                <img src={e.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.
                                        price}</p>
                                    {cart && cart.some(p => p.id === e.id) ?
                                        (<button className='btn btn-danger' onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: e
                                            })
                                        }}>Remove from cart</button>)
                                        :
                                        (<button className="btn btn-warning" onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: e
                                            })
                                        }}>Add to cart</button>)}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Serviceitems
