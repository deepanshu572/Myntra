import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from "react-router";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { FiBox } from "react-icons/fi";


const FilterLeft = ({ data, prd, catId, brandSelection }) => {
  const [SubCategory, setSubCategory] = useState();

  let FilterMainCat = data.filter((e) => {
    return e.parent_id == 0;
  });

  const imgLink = "https://pos.kalamitcompany.com/api/images/";

  const RenderNewData = (name, id, index) => {
    setSubCategory(
      data.filter((item) => {
        return item.parent_id == id;
      })
    );
  };
  const RenderData = ()=>{
     setSubCategory(
      data.filter((item) => {
        return item.parent_id == catId;
      })
    );
  }
  useEffect(() => {
    RenderData();
  }, [])
  
  // const SelectedBrandData = () => {
  //   const selected = Array.from(
  //     document.querySelectorAll('input[name="SubCat"]:checked')
  //   ).map((input) => input.value);
  //   brandSelection(selected);
  //   console.log(selected);
    
  // };
   const SelectedBrandData = () => {
    const selected = Array.from(document.querySelectorAll('input[name="SubCat"]:checked'))
      .map((input) => input.id);
    const str = selected.join(",");
    brandSelection(str); // send comma-separated string
  };

  return (
    <div className="filter_left">
      <div className="filter_first">
        <h4>🛍️ Categories</h4>
      <Link to={`/AllProduct/All?Cid=0`}  className={`label_holder all ${
                catId == 0 ? "cat_active" : ""
              }`} >

      <FiBox />

      All</Link>
        {FilterMainCat.map((item, index) => {
          return (
            <Link
              to={`/AllProduct/${item.name}?Cid=${item.id}`}
              onClick={() => RenderNewData(item.name, item.id, index)}
              className={`label_holder ${
                catId === item.id ? "cat_active" : ""
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
                  className={`label_holder ${
                    catId === item.id ? "cat_active" : ""
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
                  <input type="checkbox" value={item} name="SubCat" id={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
          <div className="btn_filter">
            <Button variant="outlined">Clear all</Button>
            <Button variant="contained" onClick={SelectedBrandData}>
              Apply
            </Button>
            {/* <button>Apply</button> */}
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
