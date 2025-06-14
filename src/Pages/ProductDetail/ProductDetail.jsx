import React, { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { getCartData } from "../../store/reducers/CartReducer";
import { useParams } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const [loading , SetLoading] = useState(true)
  const [SelectedInp, setSelectedInp] = useState("");
  const [wishlistStatus, setwishlistStatus] = useState(false);
  const sizeArr = ["S", "M", "XL", "XXL"];
  const [Cart, setCart] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);
  const { id } = useParams();

  function LoadWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    //  let filterWishlist = wishlist.filter((item)=>{
    //       return item[0] === id

    //     });

    //     if(filterWishlist.length > 0){
    //         setwishlistStatus(true);
    //     }
    //     else{
    //       setwishlistStatus(false);

    //     }
  }

  var FilteredData = products.filter((item) => {
    return item.id == id;
  });
  const Data = FilteredData[0];

  useEffect(() => {
     setTimeout(() => {
     dispatch(getAsyncProductData());
    SetLoading(false);
  }, 800);
 

  }, []);


  

const addToCart = (product) => {
  const selectedInput = document.querySelector('input[name="size"]:checked');

  if (!selectedInput) {
    alert("Please select a size");
    return;
  }

  const selectedSize = selectedInput.value;

  const updatedProduct = {
    ...product,
    size: selectedSize,
  };

  const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if product with same id and size exists
  const foundItem = existingCart.find(
    item => item.id === updatedProduct.id && item.size === updatedProduct.size
  );

  if (foundItem) {
    alert("Product with selected size already exists in cart!");
    return;
  }

  alert("Product Added sucessfully !")
  // Add new product to cart
  existingCart.push(updatedProduct);
  localStorage.setItem("cartItems", JSON.stringify(existingCart));

  console.log("Product added to cart:", updatedProduct);
  dispatch(getCartData(updatedProduct));
};

  const imgLink = "https://pos.kalamitcompany.com/api/images/";

  

  return (
    <>
     {loading ? (
     <Loader/>

    ) : (
    <div className="product_detail mt_custom">
      <div className="product_detail_head_txt">
        <p>
          Home / Clothing / Women Clothing / Kurta Sets /{" "}
          <b> Sangria Kurta Sets > More by Sangria </b>
        </p>
      </div>
      
      <div className="product_detail_wrarpper">
        <div className="product_detail_img_left_sec">
          {Data?.imgs?.map((item) => {
            return <img src={imgLink + item} />;
          })}
        </div>
        <div className="product_detail_content">
          <h3>{Data?.product_cm}</h3>
          <p>{Data?.product_nm}</p>
          <hr />
          <div className="price_card_detail_page">
            <div className="detail_amt">
              <span>
                {" "}
                <b>₹ {Data?.price}</b>
              </span>
              <span>
                MRP <del>₹ {Data?.fprice}</del>
              </span>
              <span className="svg_data_detail">
                <p> { Math.round(((Data?.fprice - Data?.price) / Data?.fprice) * 100) || 0} Off  </p>
              </span>
            </div>
            <p className="green">inclusive of all taxes</p>
            <div className="size_chart">
              <h4>SELECT SIZE</h4>
              <div className="size_col">
                {sizeArr?.map((item, index) => {
                  return (
                    <React.Fragment>
                      <input
                        className="size_holder"
                        type="radio"
                        name="size"
                        value={item}
                        id={"size_" + item}
                      />

                      <label for={"size_" + item} className="size_box">
                        {item}
                      </label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="detail_btn">
              {Cart ? (
                <button
                  onClick={() => {
                    location.href = "/checkout/cart";
                  }}
                  className="btn btn1"
                >
                  {" "}
                  Go to cart
                  <FaArrowRight />
                </button>
              ) : (
                <button
                  onClick={() => {
                    addToCart(Data);
                  }}
                  className="btn btn1"
                >
                  {" "}
                  <BsFillHandbagFill />
                  Add to Bag
                </button>
              )}

              <button
                className={`btn btn2 ${wishlistStatus ? "liked" : "unliked"} `}
                onClick={() => addToWishlist(Data.id)}
              >
                {wishlistStatus ? <FaHeart /> : <IoIosHeartEmpty />}

                {wishlistStatus ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
            <div className="desc">
              <h4>Description</h4>
              <p>{Data?.description}</p>
            </div>
            <div className="dumy_more_detail">
              <div className="dumy_dets">
                <h4>View Eligible Products</h4>
                <b> 10% Discount on ICICI Bank Credit & Debit Cards.</b>
                <li> Min Spend ₹3500, Max Discount ₹1000. </li>
              </div>
              <div className="dumy_dets">
                <h4> Terms & Condition </h4>
                <b> 10% Discount on Axis Bank Credit Card. </b>
                <li> Min Spend ₹3500, Max Discount ₹1000.</li>
              </div>
              <div className="dumy_dets">
                <h4> Terms & Condition </h4>
                <b>
                  {" "}
                  10% Discount on Axis Bank Flipkart Axis Bank Credit Card.
                </b>
                <li> Min Spend ₹3500, Max Discount ₹1000.</li>
              </div>
              <div className="dumy_dets">
                <h4> Terms & Condition </h4>
                <b> 10% Discount on Axis Bank Credit Card. </b>
                <li> Min Spend ₹3500, Max Discount ₹1000.</li>
              </div>
              <div className="dumy_dets">
                <h4> Terms & Condition </h4>
                <b>
                  {" "}
                  10% Discount on Axis Bank Flipkart Axis Bank Credit Card.
                </b>
                <li> Min Spend ₹3500, Max Discount ₹1000.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default ProductDetail;
