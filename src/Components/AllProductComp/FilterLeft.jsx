import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router";

const FilterLeft = (item) => {
  const Categoryitem = item.data;

  const [SubCategory, setSubCategory] = useState();

  let FilterMainCat = Categoryitem.filter((e) => {
    return e.parent_id == 0;
  });

  const imgLink = "https://pos.kalamitcompany.com/api/images/";
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedSubCat, setSelectedSubCat] = useState();

  const RenderNewData = (name, id, index) => {
    // location.href= ` /AllProduct/${name}?Cid=${id}`
    setSelectedIndex(index);
    

    setSubCategory(
      Categoryitem.filter((item) => {
        return item.parent_id == id;
      })
    );
  };
  const RenderSubCategoryData = (name, id, index) => {
    setSelectedSubCat(index);
  };
  console.log("====================================");
  console.log(SubCategory);
  console.log("====================================");

  return (
    <div className="filter_left">
      <div className="filter_first">
        <h4>🛍️ Categories</h4>

        {FilterMainCat.map((item, index) => {
          return (
            <Link
              to={`/AllProduct/${item.name}?Cid=${item.id}`}
              onClick={() => RenderNewData(item.name, item.id, index)}
              className={`label_holder ${
                selectedIndex === index ? "cat_active" : ""
              }`}
            >
              <img src={imgLink + item.images} alt="" />
              <input type="radio" name="Gender" id={item.name} />
              <label htmlFor={item.name}>{item.name}</label>
            </Link>
          );
        })}
      </div>
      {SubCategory?.length > 0 ? (
        <div className="filter_second hd_padding">
          <div className="filter_second_head">
            <h4>👜 Sub Categories</h4>
          </div>
          <div className="filter_second_data">
            {SubCategory?.map((item ,index) => {
              return (
                <Link
                  to={`/AllProduct/${item.name}?Cid=${item.id}`}
                  onClick={() =>
                    RenderSubCategoryData(item.name, item.id, index)
                  }
                  className={`label_holder ${
                    selectedSubCat === index ? "cat_active" : ""
                  }`}
                >
                  <img src={imgLink + item.images} alt="" />
                  <input type="radio" name="SubCat" id={item.name} />
                  <label htmlFor={item.name}>{item.name}</label>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        " "
      )}

      <div className="filter_third hd_padding">
        <div className="filter_third_head">
          <h4>🏷️ Brands</h4>
        </div>
        <div className="filter_third_data">
          <div className="label_holder">
            <input type="checkbox" name="SubCat" id="kurti" />
            <label htmlFor="kurti">kurti</label>
          </div>
          <div className="label_holder">
            <input type="checkbox" name="SubCat" id="pajama" />
            <label htmlFor="pajama">pajama</label>
          </div>
          <div className="label_holder">
            <input type="checkbox" name="SubCat" id="suits" />
            <label htmlFor="suits">suits</label>
          </div>
          <div className="label_holder">
            <input type="checkbox" name="SubCat" id="plazo" />
            <label htmlFor="plazo">plazo</label>
          </div>
        </div>
      </div>
      <div className="filter_fourth hd_padding">
        <div className="filter_third_head">
          <h4>💰 Price</h4>
        </div>
        <Box sx={{ width: "100%" }}>
          <Slider
            defaultValue={40}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
};

export default FilterLeft;
