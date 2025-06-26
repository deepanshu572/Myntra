import React, { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
// import { getAsyncProductData } from "../../store/action/ProductAction";
import {
  getCartAccessData,
  getCartData,
} from "../../store/reducers/CartReducer";
import { useParams } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Loader from "../../Components/Loader/Loader";
import {
  getWishlistAccessData,
  getWishlistData,
} from "../../store/reducers/WishlistReducer";
import { getPrdData, setLoading } from "../../store/reducers/ProductReducer";

const ProductDetail = () => {
  const [SelectedInp, setSelectedInp] = useState("");
  const [wishlistStatus, setwishlistStatus] = useState(false);
  const sizeArr = ["S", "M", "XL", "XXL"];
  const [Liked, setLiked] = useState(false);

  const [Cart, setCart] = useState(false);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.ProductReducer);
  const { id } = useParams();

  var FilteredData = products.filter((item) => {
    return item.id == id;
  });
  const Data = FilteredData[0];

  useEffect(() => {
    // dispatch(getAsyncProductData());
    dispatch(getPrdData());

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 800);
    // return clearTimeout(time)
  }, []);

  const addToWishlist = (data) => {
    dispatch(getWishlistData({ data }));
    dispatch(getWishlistAccessData());
    setLiked(!Liked);
  };

  const addToCart = (product) => {
    const selectedInput = document.querySelector('input[name="size"]:checked');

    if (!selectedInput) {
      alert("Please select a size");
      return;
    }

    dispatch(getCartData({ product, selectedInput }));
    dispatch(getCartAccessData());
  };

  const imgLink = "https://pos.kalamitcompany.com/api/images/";

  return (
    <>
      {loading ? (
        <Loader />
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
                    <p>
                      {" "}
                      {Math.round(
                        ((Data?.fprice - Data?.price) / Data?.fprice) * 100
                      ) || 0}{" "}
                      Off{" "}
                    </p>
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
                    className={`btn btn2 ${Liked ? "liked" : "unliked"} `}
                    onClick={() => addToWishlist(Data)}
                  >
                    {Liked ? <FaHeart /> : <IoIosHeartEmpty />}

                    {Liked ? "Wishlisted" : "Wishlist"}
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
