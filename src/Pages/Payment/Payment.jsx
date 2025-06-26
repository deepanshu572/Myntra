import React, { useEffect, useState } from "react";
import AccordationSec from "../../Components/Accordation/AccordationSec";
import { useDispatch, useSelector } from "react-redux";
import { getCartAccessData } from "../../store/reducers/CartReducer";
import CalculationPart from "../../Components/CheckoutComponent/CalculationPart";
import { CiStar } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import ButtonPay from "../../Components/BtnPay/ButtonPay";
import scan from "../../assets/img/scanpay.png";
import { HiMiniCreditCard } from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";

import upi from "../../assets/img/upi.png";

const Payment = () => {
  const { cart } = useSelector((state) => state.CartReducer);
  const [sts, setsts] = useState(true);
  const [SelectedIndex, setSelectedIndex] = useState(0);
  const [TabName, setTabName] = useState("tab1");

  const tabData = [
 
    {
      tab: "tab1",
      svg: <BsCashStack />,
      name: "Cash On Delivery",
    },
    {
      tab: "tab2",
      svg: <FaAmazonPay />,
      name: "UPI (Pay via any App)",
    },
    {
      tab: "tab3",
      svg: <IoCardOutline />,
      name: "Credit/Debit Card",
    },
    {
      tab: "tab4",
      svg: <IoWalletOutline />,
      name: "Wallet",
    },
    {
      tab: "tab5",
      svg: <BsCashCoin />,
      name: "EMI",
    },
    {
      tab: "tab6",
      svg: <AiOutlineBank />,
      name: "Net Banking",
    },
  ];
  const wallet = [
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
  ];
  const emi = [
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
  ];
  const netBank = [
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
    {
      img: upi,
      name: "State Bank Of India",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAccessData());
  }, []);

  const tabHandleFnc = (tabNm, index) => {
    setSelectedIndex(index);
    setTabName(tabNm);
  };

  return (
    <div className="payment mt_custom cart_page">
      <div className="left_handle">
        <div className="top_sec">
          <AccordationSec />
        </div>
        <div className="middle_sec_pay">
          <div className="middle_head">
            <h3>Choose Payment Mode</h3>
          </div>
          <div className="middle_wrapper_sec">
            <div className="middle_wrapper_left_sec">
              {tabData?.map((item, index) => {
                return (
                  <div
                    className={`middle_left_tab_sec ${
                      SelectedIndex === index ? "active_tab" : ""
                    }`}
                    onClick={() => tabHandleFnc(item.tab, index)}
                  >
                    <span>{item.svg}</span>
                    <h3>{item.name}</h3>
                  </div>
                );
              })}
            </div>
            <div className="middle_wrapper_right_sec">
              {TabName === "tab1" ? <div className="pay pay1">
                 <h4>Cash On Delivery (Cash/UPI)</h4>

                 <label className="pay1_input">
                  <div>
                   <input type="radio" name="payment" id="" />
                   <small>Cash on Delivery (Cash/UPI)</small>
                   </div>
                   <BsCashStack />
                 </label>
              </div> : ""}
              {TabName === "tab2" ? (
                <div className="pay pay2">
                  <h4>Pay Using UPI</h4>
                  <div className="inp_pay">
                    <div className="wrap_label">
                      <label htmlFor="UPI1" className="inp1">
                        <input type="radio" name="payment" id="UPI1" />
                        <div className="wrap_pay_inp1">
                          <img src={scan} alt="" />
                          <small>Scan And Pay</small>
                        </div>
                      </label>
                      {/* <ButtonPay /> */}
                      <button>Pay Now</button>
                    </div>
                    <div className="wrap_label">
                      <label htmlFor="UPI2" className="inp2">
                        <input type="radio" name="payment" id="UPI2" />
                        <div className="wrap_pay_inp2">
                          <img src={upi} alt="" />
                          <small>Enter UPI ID</small>
                        </div>
                      </label>
                      <input type="text" placeholder="Enter UPI ID here" />
                      <button>Pay Now</button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {TabName === "tab3" ? (
                <div className="pay pay3">
                  <h4>Credit/Debit card</h4>
                  <div className="pay3_scroll_sec">
                    <div className="pay3_scroll_item">
                      <div className="img_sec">
                        <img
                          src="https://constant.myntassets.com/checkout/assets/img/myntrakotakcbc.png"
                          alt=""
                        />
                      </div>
                      <div className="txt_pay3_sec">
                        <h5>7.5% Discount</h5>
                        <small>
                          Up to ₹750 on every spends with Myntra Kotak Credit
                          Card. T&C
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="pay_txt">
                    <p>
                      Please Ensure your card can be used for online
                      transactions.{" "}
                    </p>
                    <b>Know More</b>
                  </div>
                  <div className="form_sec_pay">
                    <div className="form_pay_inp">
                      <input
                        type="number"
                        autocomplete="off"
                        id="CardNumber"
                        required
                      />
                      <label htmlFor="CardNumber">Card Number</label>

                      <HiMiniCreditCard className="fill_blue" />
                    </div>
                    <div className="form_pay_inp">
                      <input
                        type="text"
                        autocomplete="off"
                        id="nameCard"
                        required
                      />
                      <label htmlFor="nameCard">Name on Card</label>
                    </div>
                    <div className="flex_wrap_data">
                      <div className="form_pay_inp last_sec ">
                        <input
                          type="number"
                          id="date"
                          autocomplete="off"
                          required
                        />
                        <label htmlFor="date">Valid Thru (MM/YY)</label>
                      </div>
                      <div className="form_pay_inp last_inp">
                        <input
                          type="number"
                          id="cvv"
                          autocomplete="off"
                          required
                        />
                        <label htmlFor="cvv">CVV</label>

                        <IoIosInformationCircleOutline />
                      </div>
                    </div>
                    <button className="credit_pay">Pay Now</button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {TabName === "tab4" ? (
                <div className="pay pay4">
                  <h4>Select wallet to Pay</h4>
                  <div className="inp_pay">
                    {wallet?.map((item, index) => {
                      return (
                        <div className="wrap_label">
                          <label
                            htmlFor={`wallet${index + 1}`}
                            className={`inp${index + 1}`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              id={`wallet${index + 1}`}
                            />
                            <div className="wrap_pay_inp1">
                              <img src={item.img} alt="" />
                              <small>{item.name}</small>
                            </div>
                          </label>
                          <button>Pay Now</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              {TabName === "tab5" ? (
                <div className="pay pay5">
                  <h4>Select EMI option</h4>
                  <div className="inp_pay">
                    {emi?.map((item, index) => {
                      return (
                        <div className="wrap_label">
                          <label
                            htmlFor={`emi${index + 1}`}
                            className={`inp${index + 1}`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              id={`emi${index + 1}`}
                            />
                            <div className="wrap_pay_inp1">
                              <img src={item.img} alt="" />
                              <small>{item.name}</small>
                            </div>
                          </label>
                          <button>Pay Now</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              {TabName === "tab6" ? (
                <div className="pay pay6">
                  <h4>Net Banking</h4>
                  <div className="inp_pay">
                    {netBank?.map((item, index) => {
                      return (
                        <div className="wrap_label">
                          <label
                            htmlFor={`netBank${index + 1}`}
                            className={`inp${index + 1}`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              id={`netBank${index + 1}`}
                            />
                            <div className="wrap_pay_inp1">
                              <img src={item.img} alt="" />
                              <small>{item.name}</small>
                            </div>
                          </label>
                          <button>Pay Now</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="right_handle">
        <CalculationPart cart={cart} sts={sts} render={"Payment"} />
      </div>
    </div>
  );
};

export default Payment;
