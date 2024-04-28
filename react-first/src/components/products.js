import React from 'react'
import CardProduct from './cardProduct'
import './products.css'

// add products to productList
const Products = () => {
  const productList = [
    {name: "electric fan", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXJ6o7rNGX1i2JVVVPuRhGTxIchM4KBcpyeqFyzN9YA&s", id:1},
    {name: "aircon", url: "https://tse3.mm.bing.net/th?id=OIP.UJQP35zcqsKIIzuBima_tAHaE8&pid=Api&P=0&h=180", id:2},
    {name: "aquaflask", url: "https://tse4.mm.bing.net/th?id=OIP.-K-9LhtiOe4OtCvVKh5hWQHaHa&pid=Api&P=0&h=180", id:3},
    {name: "sunscreen", url: "https://i5.walmartimages.com/asr/a095667a-3870-4506-993a-6ac108040195_1.f96bb336b2273ad15f36b1b81e1a3d42.jpeg", id:4},
    {name: "portable neck fan", url: "https://tse1.mm.bing.net/th?id=OIP.AdZOTrX0lvB-oSPVR48WywHaHa&pid=Api&P=0&h=180", id:5},
    {name: "cooling vest", url: "https://m.media-amazon.com/images/I/61kz0asOv5S._AC_UL1500_.jpg", id:6}
  ]

  return (
    // show product infos in each products in productlist inside card
    <div className='product'>
        {productList.map(product => <CardProduct name={product.name} imgLink={product.url} key={product.id}/>)}
    </div>
  )
}

export default Products; 