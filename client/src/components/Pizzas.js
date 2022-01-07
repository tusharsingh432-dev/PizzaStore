import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux';
function Pizzas({ pizza }) {
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart(pizza, variant, quantity));
    }

    const handleVariantChange = newVariant => {
        setVariant(newVariant.target.value);
    }
    const [variant, setVariant] = useState("small");

    const quan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const handleQuantityChange = newQuantity => {
        setQuantity(newQuantity.target.value);
        console.log(newQuantity.target.value)
        console.log(quantity)
    }
    const [quantity, setQuantity] = useState(1);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='pizza'>
            <h1 style={{ "fontSize": "20px" }} onClick={handleShow}>{pizza.name}</h1>

            <img src={pizza.image} alt={pizza.name} style={{ "height": "200px", "width": "200px" }} onClick={handleShow} />

            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>Variants</p>
                    <select value={variant} onChange={handleVariantChange}>
                        {pizza.varients.map(vari => {
                            return <option key={vari} value={vari}>{vari}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select value={quantity} onChange={handleQuantityChange}>
                        {quan.map(q => {
                            return <option key={q} value={q}>{q}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className='flex-container'>
                <div className='w-100 m-1'>
                    Price: {pizza.prices[0][variant] * quantity}/-
                </div>
                <button className='w-100 m-1 butn' onClick={handleAddToCart}>
                    Cart
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='img-fluid' src={pizza.image} alt={pizza.name} style={{ "height": "450px", "width": "450px" }} onClick={handleShow} />
                    <p>{pizza.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div >
    )
}

export default Pizzas
