import React from 'react'
import { FaCartPlus, FaPencil, FaShop, FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router'

const ProductHeroCards = (product) => {
  console.log("product card data",product)
  return (
    <div className="card bg-base-100 w-80   shadow-sm">
  <figure>
    <img
      src={product.product.image}
      alt={product?.product?.name} />
  </figure>

  
  <div className="card-body">
    <h2 className="card-title">{product?.product?.name}</h2>
    <div className=''>
      <p>{product?.product?.description}</p>
    </div>
    

    <div className="actionButtons card-actions justify-end my-4">
    <Link to={`/product/${product?.product?.id}`}>
    <button className="btn btn-outline btn-success"><FaPencil/>  </button>
    </Link>
    <button className="btn btn-outline btn-primary">Buy </button>
    <button className="btn btn-outline btn-secondary"> <FaTrash/> </button>
    </div>


  </div>
 
  
</div>
  )
}

export default ProductHeroCards