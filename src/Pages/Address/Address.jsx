import React, { useEffect, useRef, useState } from "react";
import CalculationPart from "../../Components/CheckoutComponent/CalculationPart";
import { useDispatch, useSelector } from "react-redux";
import { getCartAccessData } from "../../store/reducers/CartReducer";
import AddressBox from "../../Components/Address/AddressBox";

const Address = () => {
  const { cart } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const [sts, setsts] = useState(true);
  const [modal, setmodal] = useState(false);
  const [Address, setAddress] = useState(
    JSON.parse(localStorage.getItem("Address")) || []
  );
  const imgLink = "https://pos.kalamitcompany.com/api/images/";

  useEffect(() => {
    dispatch(getCartAccessData());
  }, []);

  const name = useRef();
  const mobile = useRef();
  const pincode = useRef();
  const address = useRef();
  const town = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const selectedType =
      document.querySelector('input[name="addressData"]:checked')?.value || "";
    console.log(selectedType);

    const addressData = {
      id: Date.now(),
      name: name.current.value,
      mobile: mobile.current.value,
      pincode: pincode.current.value,
      address: address.current.value,
      town: town.current.value,
      checked: selectedType,
    };
    // console.log(checked.current.value);

    const ExistingAddress = JSON.parse(localStorage.getItem("Address")) || [];
    const AllAddress = [...ExistingAddress, addressData];

    console.log(AllAddress);

    localStorage.setItem("Address", JSON.stringify(AllAddress));
    setAddress(AllAddress);
    name.current.value = "";
    mobile.current.value = "";
    pincode.current.value = "";
    address.current.value = "";
    town.current.value = "";
    selectedType.rem
    document.querySelector('input[name="addressData"]').removeAttribute("checked");

  };

  return (
    <div className="Address mt_custom cart_page ">
      {modal ? (
        <div className="wrapper_address_form" >
          <form
            onSubmit={handleSubmitForm}
            className={`form_address ${modal ? "open" : "close"}`}
          >
            <h2>Add Address</h2>
            <div className="form_label_head">
              <label htmlFor="home">
                <input
                  type="radio"
                  value={"Home"}
                  name="addressData"
                  id="home"
                />
                Home
              </label>
              <label htmlFor="office">
                <input
                  type="radio"
                  value={"office"}
                  name="addressData"
                  id="office"
                />
                office
              </label>
            </div>
            <div className="form_inp_wrap">
              <div className="form_top_sec">
                <h3>Contact Details</h3>
                <div className="form_inp">
                  <input type="text" ref={name} autoComplete="off" required />
                  <label>Name*</label>
                </div>
                <div className="form_inp">
                  <input type="text" ref={mobile} autoComplete="off" required />
                  <label>Mobile*</label>
                </div>
              </div>
              <div className="form_bottom_sec">
                <h3>Address</h3>
                <div className="form_inp">
                  <input
                    type="text"
                    ref={pincode}
                    autoComplete="off"
                    required
                  />
                  <label>Pin code*</label>
                </div>
                <div className="form_inp">
                  <input
                    type="text"
                    ref={address}
                    autoComplete="off"
                    required
                  />
                  <label>Address (House No, Building, Street, Area)*</label>
                </div>
                <div className="form_inp">
                  <input type="text" ref={town} autoComplete="off" required />
                  <label>Locality / Town*</label>
                </div>
              </div>
            </div>
            <div className="btn_address_item">
              <button onClick={() => setmodal(false)}>cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="address_left left_handle">
        <div className="top_address">
          <h3>Select Delivery Address</h3>
          <button onClick={() => setmodal(true)}>+ Add New Address</button>
        </div>
        <div className="address_data">
          <AddressBox Address={Address} setmodal={setmodal} setAddress={setAddress}  />
        
        </div>
        <div className="address_data_btn">
          <button onClick={() => setmodal(true)}>+ Add New Address</button>
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
