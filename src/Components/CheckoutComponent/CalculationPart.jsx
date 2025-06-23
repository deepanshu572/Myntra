import React from "react";
import { Link } from "react-router";

const CalculationPart = ({ cart, donationStatus, donationAmt, sts }) => {
  var price = 0;
  var Fprice = 0;
  var DiscountAmount = 0;
  cart.forEach((item) => {
    price += Number(item.price) * item.quantity;
    Fprice += Number(item.fprice) * item.quantity;
  });

  DiscountAmount = Fprice - price;
  console.log(price, Fprice);

  return (
    <div className="cart_calculation_sec">
      <div className="calc_head">
        <h3>PRICE DETAILS ({cart.length} items)</h3>
      </div>
      <div className="calc_price mrp">
        <h4>Total MRP</h4>
        <p>₹ {Fprice}</p>
      </div>
      <div className="calc_price disc_mrp green">
        <h4>Discount on MRP</h4>
        <p>-₹ {DiscountAmount}</p>
      </div>
      {/* <div className="calc_price coupon_mrp">
        <h4>Coupon Discount</h4>
        <p class="theme">Apply Coupon</p>
      </div> */}
      {donationStatus && donationStatus === "true" ? (
        <div className="calc_price donation_mrp">
          <h4>Social Work Donation</h4>
          <p>₹ {donationAmt}</p>
        </div>
      ) : (
        ""
      )}

      <div className="calc_price platform_mrp green">
        <h4>Platform Fee</h4>
        <p>Free</p>
      </div>
      {sts ? (
        ""
      ) : (
        <>
          <div className="calc_price shipping_mrp green">
            <h4>Shipping Fee</h4>
            <p>Free</p>
          </div>
          <small>Free shipping for you</small>
        </>
      )}

      <div className="calc_price total_Calc">
        <h4>Total Amount</h4>
        <p>
          ₹{donationStatus === "true" ? Number(donationAmt) + price : price}
        </p>
      </div>
      <div className="btn_calc_amt">
        <Link to={"/Address"}>
          {" "}
          <button>Place order</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CalculationPart;
