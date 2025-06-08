import { useEffect } from "react";
import HeroSec from "../../Components/heroSec/HeroSec";
import HomeCategorySec from "../../Components/HomeCategorySec/HomeCategorySec";
import HomeProductSec from "../../Components/HomeProductSec/HomeProductSec";
import { useDispatch, useSelector } from "react-redux";
import { UserDelete } from "../../store/reducers/UserReducer";

const HomePage = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const deleteHandle = (index) => {
    dispatch(UserDelete(index));
    console.log(index);
  };
  

  return (
    <>
      {users.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <span
              onClick={() => deleteHandle(index)}
              style={{ color: "red", padding: "10px", cursor: "pointer" }}
            >
              delete
            </span>
          </div>
        );
      })}
      <HeroSec />
      <HomeCategorySec />
      {/* <HomeProductSec /> */}
    </>
  );
};

export default HomePage;
