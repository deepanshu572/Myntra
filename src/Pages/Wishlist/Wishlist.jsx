import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistData } from "../../store/reducers/WishlistReducer";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistData());
  }, []);
  const { wishlist } = useSelector((state) => state.WishlistReducer);

  const wish = [
    {
        wishlist : true,
      id: "1",
      product_id: "2",
      type_name_1: "Quantity",
      type_qty_1: "500",
      type_name_2: "",
      type_qty_2: "",
      fprice: "4499",
      price: "1619",
      sku: "0",
      qty: "118",
      cgst: "0",
      sgst: "0",
      status: "1",
      trash: "1",
      x_data: null,
      imgs: [
        "KA_PR_20250608012245.jpg",
        "KA_PR_20250608012256.jpg",
        "KA_PR_20250608012308.jpg",
        "KA_PR_20250608012320.jpg",
      ],
      product_nm:
        "Navy Blue Floral Printed Beads And Stones Straight Kurta With Trousers & Dupatta",
      product_cm: " Ishin",
      cat_id: "5",
      description:
        "Product Details  Navy blue printed Kurta with Trousers with dupatta  Kurta design: Floral printed Straight shape Regular style Round neck, three-quarter regular sleeves Beads and stones details 1 pockets Calf length length with straight hem Chinon machine weave fabric  Trousers design: Solid Trousers Slip-On closure Dupatta Design: Solid dupatta Taping dupatta border  Size & Fit The model (height 5 -8) is wearing a size S  Material & Care Top Fabric: Chinon  Bottom Fabric: Chinon Dupatta Fabric: Poly Chiffon Machine wash",
      cat_nm: "Kurti Sets",
      remain_qty: "98",
      expiry: "",
      size: "XL",
    },
    {
                wishlist : false,

      id: "2",
      product_id: "2",
      type_name_1: "Quantity",
      type_qty_1: "500",
      type_name_2: "",
      type_qty_2: "",
      fprice: "4499",
      price: "1619",
      sku: "0",
      qty: "118",
      cgst: "0",
      sgst: "0",
      status: "1",
      trash: "1",
      x_data: null,
      imgs: [
        "KA_PR_20250608012245.jpg",
        "KA_PR_20250608012256.jpg",
        "KA_PR_20250608012308.jpg",
        "KA_PR_20250608012320.jpg",
      ],
      product_nm:
        "Navy Blue Floral Printed Beads And Stones Straight Kurta With Trousers & Dupatta",
      product_cm: " Ishin",
      cat_id: "5",
      description:
        "Product Details  Navy blue printed Kurta with Trousers with dupatta  Kurta design: Floral printed Straight shape Regular style Round neck, three-quarter regular sleeves Beads and stones details 1 pockets Calf length length with straight hem Chinon machine weave fabric  Trousers design: Solid Trousers Slip-On closure Dupatta Design: Solid dupatta Taping dupatta border  Size & Fit The model (height 5 -8) is wearing a size S  Material & Care Top Fabric: Chinon  Bottom Fabric: Chinon Dupatta Fabric: Poly Chiffon Machine wash",
      cat_nm: "Kurti Sets",
      remain_qty: "98",
      expiry: "",
      size: "XL",
    },
    {
                wishlist : true,

      id: "3",
      product_id: "2",
      type_name_1: "Quantity",
      type_qty_1: "500",
      type_name_2: "",
      type_qty_2: "",
      fprice: "4499",
      price: "1619",
      sku: "0",
      qty: "118",
      cgst: "0",
      sgst: "0",
      status: "1",
      trash: "1",
      x_data: null,
      imgs: [
        "KA_PR_20250608012245.jpg",
        "KA_PR_20250608012256.jpg",
        "KA_PR_20250608012308.jpg",
        "KA_PR_20250608012320.jpg",
      ],
      product_nm:
        "Navy Blue Floral Printed Beads And Stones Straight Kurta With Trousers & Dupatta",
      product_cm: " Ishin",
      cat_id: "5",
      description:
        "Product Details  Navy blue printed Kurta with Trousers with dupatta  Kurta design: Floral printed Straight shape Regular style Round neck, three-quarter regular sleeves Beads and stones details 1 pockets Calf length length with straight hem Chinon machine weave fabric  Trousers design: Solid Trousers Slip-On closure Dupatta Design: Solid dupatta Taping dupatta border  Size & Fit The model (height 5 -8) is wearing a size S  Material & Care Top Fabric: Chinon  Bottom Fabric: Chinon Dupatta Fabric: Poly Chiffon Machine wash",
      cat_nm: "Kurti Sets",
      remain_qty: "98",
      expiry: "",
      size: "XL",
    },
    {
                wishlist : false,

      id: "4",
      product_id: "2",
      type_name_1: "Quantity",
      type_qty_1: "500",
      type_name_2: "",
      type_qty_2: "",
      fprice: "4499",
      price: "1619",
      sku: "0",
      qty: "118",
      cgst: "0",
      sgst: "0",
      status: "1",
      trash: "1",
      x_data: null,
      imgs: [
        "KA_PR_20250608012245.jpg",
        "KA_PR_20250608012256.jpg",
        "KA_PR_20250608012308.jpg",
        "KA_PR_20250608012320.jpg",
      ],
      product_nm:
        "Navy Blue Floral Printed Beads And Stones Straight Kurta With Trousers & Dupatta",
      product_cm: " Ishin",
      cat_id: "5",
      description:
        "Product Details  Navy blue printed Kurta with Trousers with dupatta  Kurta design: Floral printed Straight shape Regular style Round neck, three-quarter regular sleeves Beads and stones details 1 pockets Calf length length with straight hem Chinon machine weave fabric  Trousers design: Solid Trousers Slip-On closure Dupatta Design: Solid dupatta Taping dupatta border  Size & Fit The model (height 5 -8) is wearing a size S  Material & Care Top Fabric: Chinon  Bottom Fabric: Chinon Dupatta Fabric: Poly Chiffon Machine wash",
      cat_nm: "Kurti Sets",
      remain_qty: "98",
      expiry: "",
      size: "XL",
    },
  ];

  return <div className="wishlist_page mt_custom">
    {
        wish?.map((item , index)=>{
            return <ProductCard key={index} data={item} />
        })
    }
  </div>;
};

export default Wishlist;
