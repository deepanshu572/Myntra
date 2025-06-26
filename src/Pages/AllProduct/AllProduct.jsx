import { useEffect, useState } from "react";
import FilterHead from "../../Components/AllProductComp/FilterHead";
import FilterLeft from "../../Components/AllProductComp/FilterLeft";
import ProductHeading from "../../Components/AllProductComp/ProductHeading";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { getAsyncCategoryData } from "../../store/action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import sad from "../../assets/img/sad.gif";
import { getPrdData, setLoading } from "../../store/reducers/ProductReducer";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.ProductReducer);
  const { category } = useSelector((state) => state.CategoryReducer);

  const [filterData, SetFilterData] = useState([]);
  const [PrdArr, setPrdArr] = useState([]);

  const { name } = useParams();
  const location = useLocation();
  const nav = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const selectCategory = searchParams.get("Cid");

  useEffect(() => {
    dispatch(getAsyncProductData());
    dispatch(getPrdData());
    dispatch(getAsyncCategoryData());
    dispatch(setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (products?.length > 0) {
      SetFilterData(products);
      dispatch(setLoading(false));
    }
  }, [products]);

  useEffect(() => {
    if (!selectCategory || products.length === 0) return;

    dispatch(setLoading(true));
    if (selectCategory == 0) {
      SetFilterData(products);
    } else {
      const filtered = products.filter(
        (item) => item.cat_id === selectCategory
      );
      SetFilterData(filtered);
    }

    dispatch(setLoading(false));
  }, [selectCategory, products]);

  const SelectedBrandFnc = (data) => {
    if (data.length > 0) {
      const arrData = data.split(",");
      let uniqueData = [...new Set(arrData)];

      const arr = uniqueData.map((item) => {
        return products.filter((data) => {
          return data.product_cm === item;
        });
      });
      console.log(arr.flat());

      SetFilterData(arr.flat()); // or whatever your state setter is
    } else {
      SetFilterData(products);
      nav(`/AllProduct/All?Cid=0`);
    }
  };

  const priceSelection = (data) => {
    const FilterPrice = products.filter((item) => {
      return item.price > data;
    });
    console.log(FilterPrice);

    SetFilterData(FilterPrice);
  };
  const AllDataFnc = () => {
     if (selectCategory == 0) {
      LoadingFnc(products);
    } else {
      const filtered = products.filter(
        (item) => item.cat_id === selectCategory
      );
      LoadingFnc(filtered);
    }

  };
  const acendingOrderFnc = () => {
    sortedData = [...filterData].sort((a, b) =>
      a.product_nm.localeCompare(b.product_nm)
    );
    LoadingFnc(sortedData);
  };
  const decendingOrderFnc = () => {
    sortedData = [...filterData].sort((a, b) =>
      b.product_nm.localeCompare(a.product_nm)
    );
    LoadingFnc(sortedData);
  };
  const lowToHighFnc = () => {
    sortedData = [...filterData].sort((a, b) => a.price.localeCompare(b.price));
    LoadingFnc(sortedData);
  };
  const highToLowFnc = () => {
    sortedData = [...filterData].sort((a, b) => b.price.localeCompare(a.price));
    LoadingFnc(sortedData);
  };
  const LoadingFnc = (filtered) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 800);

    SetFilterData(filtered);
  };
  let sortedData;
  const sortingDataFnc = (item) => {
    if (item === "Recomendation") {
      AllDataFnc();
    } else if (item === "A to Z") {
      acendingOrderFnc();
    } else if (item === "Z to A") {
      decendingOrderFnc();
    } else if (item === "Low To High") {
      lowToHighFnc();
    } else if (item === "High To Low") {
      highToLowFnc();
    }

    // console.log(sortedData);
  };

  useEffect(() => {
    const arr = products
      ?.filter((item) => item.product_cm)
      .map((item) => item.product_cm);

    const uniqueArr = [...new Set(arr)];
    setPrdArr(uniqueArr);
  }, [products]);

  return (
    <>
      <div className="all_product mt_custom">
        <ProductHeading categoryName={name} itemNumbers={filterData?.length} />
        <div className="wrapper_all_product">
          <FilterHead sortingDataFnc={sortingDataFnc} />
          <div className="wrapper_all_product_main_sec">
            <div className="wrapper_all_product_left">
              <FilterLeft
                data={category}
                prd={PrdArr}
                catId={selectCategory}
                priceSelection={priceSelection}
                brandSelection={SelectedBrandFnc}
              />
            </div>
            <div
              className={`wrapper_all_product_right ${
                filterData?.length === 0 ? "nothing" : ""
              }`}
            >
              {loading ? (
                <Loader />
              ) : filterData?.length > 0 ? (
                filterData?.map((item, index) => (
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
    </>
  );
};

export default AllProduct;
