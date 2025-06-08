import { Link } from 'react-router'

const ProductCard = ({data}) => {
  const imgLink = "https://pos.kalamitcompany.com/api/images/";


  return (
    <Link to={`/product/${data.id}`}  className='product_card'>
      <div className="product_img">
        <img src={imgLink + data.imgs[0]} alt="" />
      </div>
      <div className="product_text">
        <div className="wishlist_card_box">

        </div>
       
        
        <h4>{data.product_nm}</h4>
         <h5>{data.product_cm}</h5>
        <div className="price_card">
           <span> <b>₹ {data.price}</b></span>
           <span>
            <del>₹ {data.fprice}</del>
           </span>
           <span className="svg_data">
            <svg width="40" height="40" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#FF3E6C"></path>
                </svg>
           <p> (49% OFF) </p>
           </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard