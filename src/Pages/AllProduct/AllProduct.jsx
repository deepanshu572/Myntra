import { useEffect } from "react";
import FilterHead from "../../Components/AllProductComp/FilterHead";
import FilterLeft from "../../Components/AllProductComp/FilterLeft";
import ProductHeading from "../../Components/AllProductComp/ProductHeading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const AllProduct = () => {


  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getAsyncProductData());
  }, []);

  return (
    <div className="all_product mt_custom">
      <ProductHeading />
      <div className="wrapper_all_product">
        <FilterHead />
        <div className="wrapper_all_product_main_sec">
          <div className="wrapper_all_product_left">
            <FilterLeft />
          </div>
          <div className="wrapper_all_product_right">
            {products.map((item, index) => {
              return <ProductCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
