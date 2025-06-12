import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router";

const FilterLeft = ({ data, prd }) => {
  // const data = data.data;
  console.log("====================================");
  console.log(data, prd);
  console.log("====================================");
  // return null

  const [SubCategory, setSubCategory] = useState();

  let FilterMainCat = data.filter((e) => {
    return e.parent_id == 0;
  });

  const imgLink = "https://pos.kalamitcompany.com/api/images/";
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedSubCat, setSelectedSubCat] = useState();

  const RenderNewData = (name, id, index) => {
    setSelectedIndex(index);

    setSubCategory(
      data.filter((item) => {
        return item.parent_id == id;
      })
    );
  };
  const RenderSubCategoryData = (name, id, index) => {
    setSelectedSubCat(index);
  };

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
            {SubCategory?.map((item, index) => {
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

      {prd.length === 0 ? (
        ""
      ) : (
        <div className="filter_third hd_padding">
          <div className="filter_third_head">
            <h4>🏷️ Brands</h4>
          </div>
          <div className="filter_third_data">
            {prd.map((item) => {
              return (
                <div className="label_holder">
                  <input type="checkbox" name="SubCat" id={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
