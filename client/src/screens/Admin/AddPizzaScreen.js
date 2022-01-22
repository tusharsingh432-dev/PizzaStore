import React, { useState } from 'react';

export default function AddPizzaScreen() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [smallVarientPrice, setSmallVarientPrice] = useState();
  const [mediumVarientPrice, setMediumVarientPrice] = useState();
  const [largeVarientPrice, setLargeVarientPrice] = useState();
  const [imageUrl, setImageUrl] = useState('');

  function handleAddPizza(e) {
    e.preventDefault();
    const pizza = {
      name,
      category,
      prices: [{
        small: smallVarientPrice,
        medium: mediumVarientPrice,
        large: largeVarientPrice
      }],
      image: imageUrl,
      description
    }
    console.log(pizza);
  }


  return <div>
    {/* {success && <Success message="Login Successful" />} */}
    {/* {loading ? <Loading /> : error ? <Error error="Something must have gone wrong" /> : */}
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
        <input type="text" placeholder="Name" className="formElement" required value={name} onChange={(e) => { setName(e.target.value) }} />
        <input type="text" placeholder="Small Varient Price" className="formElement" required value={smallVarientPrice} onChange={(e) => { setSmallVarientPrice(e.target.value) }} />
        <input type="text" placeholder="Medium Varient Price" className="formElement" required value={mediumVarientPrice} onChange={(e) => { setMediumVarientPrice(e.target.value) }} />
        <input type="text" placeholder="Large Varient Price" className="formElement" required value={largeVarientPrice} onChange={(e) => { setLargeVarientPrice(e.target.value) }} />
        <input type="text" placeholder="Category" className="formElement" required value={category} onChange={(e) => { setCategory(e.target.value) }} />
        <input type="text" placeholder="Description" className="formElement" required value={description} onChange={(e) => { setDescription(e.target.value) }} />
        <input type="text" placeholder="Image Url" className="formElement" required value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} />
        <button type="submit" className="butn w-50 h-40 mb-3 mt-2" onClick={handleAddPizza}>Add Pizza</button>
        <br></br>
      </div>
    </div>
    {/* } */}
  </div>;
}
