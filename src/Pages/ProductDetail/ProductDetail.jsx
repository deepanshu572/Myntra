import React, { useEffect } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { data, useParams } from "react-router";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);
  const { id } = useParams(); 

  var FilteredData = products.filter((item) => {
    return item.id == id;
  });
  console.log(FilteredData[0]);
  const Data = FilteredData[0];

  useEffect(() => {
    dispatch(getAsyncProductData());
  }, []);
    const imgLink = "https://pos.kalamitcompany.com/api/images/";


  return (
    <div className="product_detail mt_custom">
      <div className="product_detail_head_txt">
        <p>
          Home / Clothing / Women Clothing / Kurta Sets /{" "}
          <b> Sangria Kurta Sets > More by Sangria </b>
        </p>
      </div>
      <div className="product_detail_wrarpper">
        <div className="product_detail_img_left_sec">
          {
            Data.imgs.map((item)=>{
            return(
                  <img 
                  src={imgLink + item} />
            )
              
            })
          }
        
        </div>
        <div className="product_detail_content">
          <h3>{Data.product_cm}</h3>
          <p>{Data.product_nm}</p>
          <hr />
          <div className="price_card_detail_page">
            <div className="detail_amt">
              <span>
                {" "}
                <b>₹ {Data.price}</b>
              </span>
              <span>
                MRP <del>₹ {Data.fprice}</del>
              </span>
              <span className="svg_data_detail">
                <p> (49% OFF) </p>
              </span>
            </div>
            <p className="green">inclusive of all taxes</p>
            <div className="size_chart">
              <h4>SELECT SIZE</h4>
              <div className="size_col">
                <button className="size_box">S</button>
                <button className="size_box">M</button>
                <button className="size_box">L</button>
                <button className="size_box">XL</button>
                <button className="size_box">XXL</button>
              </div>
            </div>

            <div className="detail_btn">
              <button className="btn btn1">
                {" "}
                <BsFillHandbagFill />
                Add to Bag
              </button>
              <button className="btn btn2">
                <IoIosHeartEmpty />
                Wishlist
              </button>
            </div>
            <div className="desc">
              <h4>Description</h4>
              <p>{Data.description}</p>
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
  );
};

export default ProductDetail;
