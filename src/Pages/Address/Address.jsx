import React, { useEffect, useState } from "react";
import CalculationPart from "../../Components/CheckoutComponent/CalculationPart";
import { useDispatch, useSelector } from "react-redux";
import { getCartAccessData } from "../../store/reducers/CartReducer";

const Address = () => {
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [sts, setsts] = useState(true);
  const imgLink = "https://pos.kalamitcompany.com/api/images/";

  useEffect(() => {
    dispatch(getCartAccessData());
  }, []);
  console.log("====================================");
  console.log(cart);
  console.log("====================================");
  return (
    <div className="Address mt_custom cart_page ">
      <div className="address_left left_handle">
        <div className="top_address">
        <h3>Select Delivery Address</h3>
        <button>+ Add New Address</button>
        </div>
        <div className="address_data">
          <div className="address_data_item_wrap">
          <label className="address_data_item">
            <div  className="address_top_item">
                <input type="radio" name="address" />
                <h3>Form</h3>
                <span>Home</span>

            </div>
            <div className="address_second_item">
              <p>dr colony rims j block, Ranchi</p>
              <span>Ranchi, Jharkhand - </span>
              <span>835219</span>
            </div>
          <div className="adddress_third_item">
            <span>Mobile : </span>
            <span>7903737980</span>
          </div>
          <div className="address_fourth_item">
            <span>• Pay on Delivery available</span>
          </div>
          <div className="address_fifth_btn">
            <button>Remove</button>
            <button>Edit</button>
          </div>
          </label>
          </div>
        </div>
        <div className="address_data_btn">
          <button>+ Add New Address</button>
        </div>
      </div>
      <div className="address_right right_handle">
        <h3>Deleviery Estimates</h3>
        {cart?.map((item) => {
          return (
            <div className="address_item_cart">
              <div className="cart_address_img">
                <img src={imgLink + item.imgs?.[0]} alt="" />
              </div>
              <div className="cart_address_txt">
                <p>Estimated delivery by </p>
                <b>30 june 2023</b>
              </div>
            </div>
          );
        })}

        <CalculationPart cart={cart} sts={sts} />
      </div>
    </div>
  );
};

export default Address;
