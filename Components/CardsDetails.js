import React from 'react'
import './Card.css'
import { Table } from 'react-bootstrap'

export const CardsDetails = () => {
    return (
        <div className="container mt-2">
            <h2 className='text-center'>Items Details Page</h2>
            <section className="container mt-3">
                <div className="iteamsdetails">
                    <img src=""></img>
                    <div>
                        <Table>
                            <tr>
                                <td>
                                <p><strong>Dish:</strong> : Burger</p>
                                <p><strong>Price:</strong> : 300</p>
                                <p><strong>Total:</strong> : 300</p>
                                </td>
                                <td>
                                    <p><strong>Rating:</strong></p>
                                    <p><strong>Order Review:</strong><span>1175+ order placed from has recently</span></p>
                                    <p><strong>Remove:</strong><span><i className="fas fa-trash"></i></span></p>
                                </td>
                            </tr>
                        </Table>


                    </div>
                </div>
            </section>
            
        </div>
    )
}
