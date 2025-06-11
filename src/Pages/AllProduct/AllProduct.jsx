import { useEffect, useState } from "react";
import FilterHead from "../../Components/AllProductComp/FilterHead";
import FilterLeft from "../../Components/AllProductComp/FilterLeft";
import ProductHeading from "../../Components/AllProductComp/ProductHeading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { getAsyncCategoryData } from "../../store/action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useParams } from "react-router";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);
  const { category } = useSelector((state) => state.CategoryReducer);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    dispatch(getAsyncProductData());

    setTimeout(() => {
       SetLoading(false);

    }, 800);
          dispatch(getAsyncCategoryData());

  }, []);
    useEffect(() => {
    }, []);
  // const { name} = useParams();
  

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="all_product mt_custom">
          
          <ProductHeading />
          <div className="wrapper_all_product">
            <FilterHead />
            <div className="wrapper_all_product_main_sec">
              <div className="wrapper_all_product_left">
                <FilterLeft data = {category} />
              </div>
              <div className="wrapper_all_product_right">
                {products.map((item, index) => {
                  return <ProductCard key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
