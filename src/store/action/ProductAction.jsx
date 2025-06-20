import axios from "axios";
import { getProductData } from "../reducers/ProductReducer";

// === API Configuration ===
const kalamAPI = "https://pos.kalamitcompany.com/api/";
const projectID = "9126";
const appAPI = kalamAPI + "mygalla_V1/index.php?projectID=" + projectID;

export const getAsyncProductData = () => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("type", "39");

    const response = await axios.post(appAPI, formData);
    let data = response.data.products;
    data = data.map((item) => ({
      ...item,
      wishlist: false,
    }));
    // console.log("Fetched Products:", data);
    dispatch(getProductData(data));
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};
