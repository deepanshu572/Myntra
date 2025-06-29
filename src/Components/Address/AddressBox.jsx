import React from "react";
import { MdDelete } from "react-icons/md";

const AddressBox = ({ Address, setmodal, setAddress, handleEditForm, handleSaveFnc }) => {
  const handleAddressEdit = (id) => {
    setmodal(true);
    handleEditForm(id);
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
      {Address?.map((item, index) => {
        return (
          <div className="address_data_item_wrap" key={index}>
            <label
              className="address_data_item"
              onChange={(e) =>handleSaveFnc(e.target.value) || ""}
            >
              <div className="address_top_item">
                <input value={item.id} type="radio" name="address" />
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
                <button
                  className="delete"
                  onClick={() => handleAddressDelete(item.id)}
                >
                  <MdDelete /> <span> Remove</span>
                </button>
                <button
                  className="edit"
                  onClick={() => handleAddressEdit(item.id)}
                >
                  Edit
                </button>
              </div>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default AddressBox;
