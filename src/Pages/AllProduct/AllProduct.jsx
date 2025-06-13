import { useEffect, useState } from "react";
import FilterHead from "../../Components/AllProductComp/FilterHead";
import FilterLeft from "../../Components/AllProductComp/FilterLeft";
import ProductHeading from "../../Components/AllProductComp/ProductHeading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { getAsyncCategoryData } from "../../store/action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useLocation, useParams } from "react-router-dom";
import sad from "../../assets/img/sad.gif";

// const AllProduct = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.ProductReducer);
//   const { category } = useSelector((state) => state.CategoryReducer);
//   const [loading, SetLoading] = useState(true);
//   const [Prdloading, SetPrdLoading] = useState(true);
//   const [filterData, SetFilterData] = useState([]);
//   const [PrdArr, setPrdArr] = useState([]);
//   const { name } = useParams();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const selectCategory = searchParams.get("Cid");

//   const BrandFilter = () => {
//     const arr = filterData
//       ?.filter((item) => item.product_cm)
//       .map((item) => item.product_cm);

//     const uniqueArr = arr?.filter((item, index) => arr.indexOf(item) === index);
//     setPrdArr(uniqueArr);
//   };

//   useEffect(() => {
//     dispatch(getAsyncProductData());
//     dispatch(getAsyncCategoryData());
//     SetFilterData(products);
//   }, []);

//   useEffect(() => {
//     // if (products.length > 0) {
//     // SetFilterData(products);
//     SetLoading(false);
//     // }
//   }, [products]);

//   useEffect(() => {
//     SetPrdLoading(true);
//     CategoryFilter();

//     setTimeout(() => {
//       SetPrdLoading(false);
//     }, 800);
//   }, [selectCategory]);

//   useEffect(() => {
//     BrandFilter(); // runs on filterData change
//   }, [filterData]);

//    const CategoryFilter = () => {
//     SetFilterData(
//       products.filter((item) => {
//         // console.log(item);
//         return item.cat_id === selectCategory;
//       })
//     );
//   };

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);
  const { category } = useSelector((state) => state.CategoryReducer);

  const [loading, SetLoading] = useState(true);
  const [Prdloading, SetPrdLoading] = useState(true);
  const [filterData, SetFilterData] = useState([]);
  const [PrdArr, setPrdArr] = useState([]);

  const { name } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectCategory = searchParams.get("Cid");

  useEffect(() => {
    dispatch(getAsyncProductData());
    dispatch(getAsyncCategoryData());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      SetFilterData(products);
      SetLoading(false);
    }
  }, [products]);

  useEffect(() => {
    if (!selectCategory || products.length === 0) return;

    SetPrdLoading(true);
    const filtered = products.filter((item) => item.cat_id === selectCategory);
    SetFilterData(filtered);

    SetPrdLoading(false);
  }, [selectCategory, products]);
  
const SelectedBrandFnc = (data) => {
  const arr = data.split(","); // ✅ Split string by comma
  console.log("Array is:", arr);
    const filtered = products.filter((item) =>
    data.includes(item.product_cm)
  );
  SetFilterData(filtered); // or whatever your state setter is
};

  useEffect(() => {
    const arr = filterData
      ?.filter((item) => item.product_cm)
      .map((item) => item.product_cm);

    const uniqueArr = [...new Set(arr)];
    setPrdArr(uniqueArr);
  }, [filterData]);



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="all_product mt_custom">
          <ProductHeading
            categoryName={name}
            itemNumbers={filterData?.length}
          />
          <div className="wrapper_all_product">
            {/* <FilterHead data={filterData , SetFilterData} /> */}
            <div className="wrapper_all_product_main_sec">
              <div className="wrapper_all_product_left">
                <FilterLeft data={category} prd={PrdArr} catId={selectCategory} brandSelection={SelectedBrandFnc} />
              </div>
              <div
                className={`wrapper_all_product_right ${
                  filterData.length === 0 ? "nothing" : ""
                }`}
              >
                {Prdloading ? (
                  <Loader />
                ) : filterData.length > 0 ? (
                  filterData.map((item, index) => (
                    <ProductCard key={index} data={item} />
                  ))
                ) : (
                  <div className="no_results">
                    <img src={sad} alt="Nothing found" />
                    <p>Nothing is in the box</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
