import React from 'react'

const ProductHeading = ({categoryName , itemNumbers}) => {
  return (
     <div className="product_detail_head_txt all_product_head">
        <p>
          Home / <b> {categoryName} </b>
        </p>
        <h4>
 <p> - {itemNumbers} items</p>
 </h4>
      </div>
  )
}

export default ProductHeading