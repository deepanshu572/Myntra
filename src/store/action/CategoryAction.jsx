import axios from "axios";
import { getCategoryData } from "../reducers/CategoryReducer";



// === API Configuration ===
const kalamAPI = "https://pos.kalamitcompany.com/api/";
const projectID = "9126";
const appAPI = kalamAPI + "mygalla_V1/index.php?projectID=" + projectID;



export const getAsyncCategoryData = () => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("type", "78");

    const response = await axios.post(appAPI, formData);
    const data = response.data.category;

    console.log("Fetched Products:", data);
    dispatch(getCategoryData(data));
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};

