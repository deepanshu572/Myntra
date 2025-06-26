import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProductData } from "../../store/action/ProductAction";
import sad from "../../assets/img/sad.gif";
import Loader from "../../Components/Loader/Loader";

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const [loading, SetLoading] = useState(true);

  const { products } = useSelector((state) => state.ProductReducer);

  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    dispatch(getAsyncProductData());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      if (query == "AllData") {
        console.log("aa gya ma");

        setFilterSearch(products);

        SetLoading(false);
        return;
      }

      if (products.length > 0 && query.length > 0) {
        const lowerQuery = query.toLowerCase();

        const filtered = products.filter((item) => {
          return (
            item.cat_nm?.toLowerCase().includes(lowerQuery) ||
            item.product_nm?.toLowerCase().includes(lowerQuery) ||
            item.brand_nm?.toLowerCase().includes(lowerQuery)
          );
        });
        SetLoading(true);
        setFilterSearch(filtered);
        setTimeout(() => {
          SetLoading(false);
        }, 800);
      }
    }, 900);
  }, [products, query]);

  //       if(query.length < 1) {
  //         alert();
  //      setFilterSearch(products);
  //       setTimeout(() => {
  //         SetLoading(false);
  //       }, 800);
  //      return;
  //   }

  console.log(query.length);

  console.log(filterSearch, products);

  return (
    <div>
      <div className="search_data mt_custom">
        {loading ? (
          <Loader />
        ) : filterSearch.length > 0 ? (
          filterSearch.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))
        ) : (
          <div className="no_prd">
            <img src={sad} alt="" />
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
