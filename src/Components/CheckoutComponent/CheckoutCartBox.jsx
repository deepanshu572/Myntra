import React from 'react'

const CheckoutCartBox = (item) => {

  console.log('====================================');
  console.log(item.data);
  console.log('====================================');
  var item = item.data;
  const discount = Math.round(((item.fprice - item.price) / item.fprice) * 100);
  const imgLink = "https://pos.kalamitcompany.com/api/images/";
    
  // const array = [
  //   23
  // ]
  // for (let index = 0; index < array.value; index++) {
  //   const element = array[index];
  //   console.log(element);
    
    
  // }


  return (
       <div className="cart_item_data">
              <div className="cart_item_data_img">
                <img
                  src={imgLink + item?.imgs[0]}
                  alt=""
                />
              </div>
              <div className="cart_item_data_txt">
                <h4>{item.cat_nm}</h4>
                <h5>
                 {item.product_nm}
                </h5>
                <small>Sold by:  {item.product_cm}
                </small>
                <div className="cart_item_select">
                  <div className="select_box">
                    
                    <p>{item?.size}</p>
                    {/* <select name="" id="">
                      <option value="XL">Size : XL</option>
                      <option value="L">Size : L</option>
                      <option value="M">Size : M</option>
                      <option value="S">Size : S</option>
                    </select> */}
                  </div>
                  <div className="select_box">
                    {
                    
                    }
                    <select name="" id="">
                      <option value="1">Qty : 1</option>
                      <option value="2">Qty : 2</option>
                      <option value="3">Qty : 3</option>
                      <option value="4">Qty : 4</option>
                    </select>
                  </div>
                </div>
                <div className="cart_price">
                  <div>
                    <svg
                      width="8"
                      height="10"
                      viewBox="0 0 8 10"
                      class="itemComponents-base-rupeeBoldIcon"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M3.418 10 .898 5.604V4.568h.84c.336 0 .63-.047.882-.14.262-.103.476-.247.644-.434.178-.187.299-.41.364-.672H.898V2.286h2.716a1.694 1.694 0 0 0-.294-.644 1.289 1.289 0 0 0-.532-.434 1.678 1.678 0 0 0-.784-.168H.898V.004h6.314V1.04H5.014c.159.177.29.369.392.574.112.205.187.43.224.672h1.582v1.036H5.658c-.093.69-.36 1.232-.798 1.624-.438.383-1.003.644-1.694.784L5.91 10H3.418Z"
                      ></path>
                    </svg>
                    {item.price}
                  </div>
                  <del class="cart_item_fake_price">
                    <svg
                      width="7"
                      height="9"
                      viewBox="0 0 7 9"
                      xmlns="http://www.w3.org/2000/svg"
                      class="itemComponents-base-rupeeIcon "
                    >
                      <g clip-path="url(#clip0_674_1209)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.966797 4.6993L3.27973 8.73777H4.52798L2.19057 4.88287C2.6647 4.81768 3.06996 4.69005 3.40632 4.5H7V3.5H4.29767C4.37186 3.30767 4.42008 3.09555 4.44231 2.86364H6.03325V2.08042H4.41785C4.38521 1.79487 4.30771 1.54604 4.18531 1.33392C4.06295 1.12179 3.90795 0.938227 3.72028 0.783217H6.03325V0H0.966797V0.783217H1.23603C1.65211 0.783217 2.00293 0.82809 2.28848 0.917833C2.58218 1.00758 2.8147 1.15035 2.98603 1.34615C3.15736 1.5338 3.27158 1.77855 3.32868 2.08042H0.966797V2.86364H3.34091C3.3155 3.11784 3.24801 3.32996 3.13843 3.5H0V4.5H0.966797V4.6993Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_674_1209">
                          <rect width="7" height="9"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    {item.fprice}
                  </del>
                  <span class="cart_item_discount">
                    {discount + "%"}
                  </span>
                </div>
             
                  <div class="return_txt">
                      <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z"
                        fill="#282C3F"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z"
                        fill="#282C3F"
                      ></path>
                    </svg>
                    <span class="returnPeriod-base-returnDays">7 days
                    return available
                    </span>
                  </div>
              </div>
              <div className="cross">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="itemContainer-base-closeIcon"
                >
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
                  ></path>
                </svg>
              </div>
            </div>
  )
}

export default CheckoutCartBox