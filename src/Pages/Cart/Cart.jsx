import React, { useEffect, useState } from "react";
import CheckoutCartBox from "../../Components/CheckoutComponent/CheckoutCartBox";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartAccessData,
  getDeleteAllData,
} from "../../store/reducers/CartReducer";
import sad from "../../assets/img/sad.gif";
import { Link } from "react-router";
import CalculationPart from "../../Components/CheckoutComponent/CalculationPart";
import { RxCross2 } from "react-icons/rx";
import AddressBox from "../../Components/Address/AddressBox";
import AccordationSec from "../../Components/Accordation/AccordationSec";
import Loader from "../../Components/Loader/Loader";
import { setLoading } from "../../store/reducers/ProductReducer";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAccessData());
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 800);
    localStorage.setItem("donation", false);
  }, []);

  const [donationIndex, setDonationIndex] = useState();
  const [donationAmt, setDonationAmt] = useState();
  const [donationStatus, setDonationStatus] = useState(false);
  const [modal, setmodal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const [selectedId, setSelectedId] = useState();

  const [Address, setAddress] = useState(
    JSON.parse(localStorage.getItem("Address")) || []
  );
  const { cart } = useSelector((state) => state.CartReducer);
  const { loading } = useSelector((state) => state.ProductReducer);

  const amtArr = [
    {
      id: 1,
      amt: "10",
    },
    {
      id: 2,
      amt: "20",
    },
    {
      id: 3,
      amt: "30",
    },
    {
      id: 4,
      amt: "40",
    },
  ];

  const handleChangeInp = (e) => {
    if (e.target.checked) {
      alert("checked");
      if (donationIndex === undefined) {
        setDonationIndex(0);
        setDonationAmt(10);

        localStorage.setItem("donation", true);
      }
    } else {
      alert("abe pata nhi be");
      localStorage.setItem("donation", false);

      setDonationIndex();
    }
  };

  const handleDonationFnc = (index, amt) => {
    localStorage.setItem("donation", true);
    document.getElementById("donate").checked = true;
    setDonationAmt(amt);
    console.log(index);
    setDonationIndex(index);
  };
  useEffect(() => {
    setDonationStatus(localStorage.getItem("donation"));
  }, [handleChangeInp, handleDonationFnc]);

  console.log(selectedId);

  const AddAddressSaveFnc = () => {
    const SelectAddress = Address?.filter((item) => {
      return item.id == selectedId;
    });
    console.log(SelectAddress);

    setSelectedAddress(SelectAddress?.[0]);
    setmodal(false)
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : cart?.length > 0 ? (
        <div className="cart_page mt_custom">
          <div className="cart_page_left">
            <div className="cart_page_top_one">
              {Address?.length > 0 ? (
                <div className="cart_detail_left_top">
                  <h4>
                    Deliver to :{" "}
                    <b>
                      {selectedAddress?.name || Address?.[0].name} {selectedAddress?.pincode || Address?.[0].pincode}
                    </b>
                  </h4>
                  <p>
                    {selectedAddress?.address || Address?.[0].address} , {selectedAddress?.town || Address?.[0].town}
                  </p>
                </div>
              ) : (
                <h4>Add Your Address</h4>
              )}

              <div className="cart_detail_right_top">
                <button onClick={() => setmodal(true)}>
                  {Address?.length > 0 ? "Change Address" : "Add Address"}
                </button>
              </div>
            </div>
            <AccordationSec />
            <div className="cart_page_top_three">
              <div className="cart_page_top_three_head">
                <h4>Your items</h4>
                <div className="cart_item_three">
                  <button onClick={() => dispatch(getDeleteAllData())}>
                    Clear Cart
                  </button>
                </div>
              </div>
              <div className="cart_item_page_three_box">
                {cart.map((item, index) => {
                  return <CheckoutCartBox key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="cart_page_right">
            <div className="cart_page_right_coupon">
              <h3>Coupon</h3>
              <div className="cart_page_right_coupon_apply">
                <div className="cart_icon_coupon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    class="coupons-base-couponIcon"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      transform="rotate(45 6.086 5.293)"
                    >
                      <path
                        stroke="#000"
                        d="M17.5 10V1a1 1 0 0 0-1-1H5.495a1 1 0 0 0-.737.323l-4.136 4.5a1 1 0 0 0 0 1.354l4.136 4.5a1 1 0 0 0 .737.323H16.5a1 1 0 0 0 1-1z"
                      ></path>
                      <circle
                        cx="5.35"
                        cy="5.35"
                        r="1.35"
                        fill="#000"
                        fill-rule="nonzero"
                      ></circle>
                    </g>
                  </svg>
                  <h4>Apply Coupon</h4>
                </div>
                <div className="cart_btn_coupon">
                  <button>Apply</button>
                </div>
              </div>
              <div className="cart_page_donation">
                <h5>Support transformative social work in India</h5>
                <div className="donation_inp">
                  <input
                    type="checkbox"
                    name="donates"
                    id="donate"
                    onChange={handleChangeInp}
                  />
                  <label htmlFor="donate">Donate and make a difference</label>
                </div>
                <div className="btn_data">
                  {amtArr.map((item, index) => {
                    return (
                      <button
                        className={` ${
                          index == donationIndex ? "activeDonation" : ""
                        } `}
                        onClick={() => handleDonationFnc(index, item.amt)}
                      >
                        ₹{item?.amt}
                      </button>
                    );
                  })}
                </div>
              </div>
              <CalculationPart
                cart={cart}
                donationStatus={donationStatus}
                donationAmt={donationAmt}
                render={"Address"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div class="nothing_in_box">
          <img src={sad} alt="Nothing found" />

          <h3>Nothing is in cart</h3>
          <Link to={"/"}>
            <button>Keep browsing</button>
          </Link>
        </div>
      )}

      {modal ? (
        <div className="wrapper_address_form">
          <div className="form_address">
            <div className="select_form_Sec">
              <h3>Select Address</h3>

              <RxCross2 onClick={() => setmodal(false)} />
            </div>
            {Address?.length > 0 ? (
              <React.Fragment>
                <div className="wrapper_data">
                  <AddressBox
                    Address={Address}
                    setmodal={setmodal}
                    setAddress={setAddress}
                    handleSaveFnc={(id) => setSelectedId(id)}
                  />
                </div>
                <div className="btn_save" onClick={AddAddressSaveFnc}>
                  Save
                </div>
              </React.Fragment>
            ) : (
              <div className="nothingAddress">
                <img src={sad} alt="" />
                <Link to={"/checkout/Address"}>+Add Address</Link>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
