import React from "react";
import { MdDelete } from "react-icons/md";


const AddressBox = ({ Address, setmodal, setAddress }) => {
  const handleAddressEdit = (data) => {
    setmodal(true);
  };
  const handleAddressDelete = (id) => {
    const NewData = Address.filter((item) => {
      return item.id != id;
    });
    const locData = localStorage.setItem("Address", JSON.stringify(NewData));
    setAddress(NewData);
  };

  return (
    <>
      {Address?.map((item) => {
        return (
          <div className="address_data_item_wrap">
            <label className="address_data_item">
              <div className="address_top_item">
                <input type="radio" name="address" />
                <h3>{item.name}</h3>
                <span>{item.checked}</span>
              </div>
              <div className="address_second_item">
                <p>{item.address}</p>
                <span>{item.town}- </span>
                <span>{item.pincode}</span>
              </div>
              <div className="adddress_third_item">
                <span>Mobile : </span>
                <span>{item.mobile}</span>
              </div>
              <div className="address_fourth_item">
                <span>• Pay on Delivery available</span>
              </div>
              <div className="address_fifth_btn">
                <button className="delete" onClick={() => handleAddressDelete(item.id)}>
                 <MdDelete/> <span> Remove</span>
                </button>
                <button className="edit" onClick={() => handleAddressEdit(item)}>Edit</button>
              </div>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default AddressBox;
