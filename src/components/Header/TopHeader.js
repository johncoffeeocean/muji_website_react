import React from "react";

export const TopHeader = () => {
  return (
    <div className='top-head'>
      <a
        className='top-head__link'
        style={{ verticalAlign: "baseline" }}
        href='https://www.muji.net/store/pc/user/notice/delivery_charge_free.html'
      >
        <span>
          <small style={{ color: "#7f0019" }}>ネットストア限定</small>
        </span>{" "}
        <span>
          <small>
            衣料品,日用品など対象商品 税込
            <b
              style={{
                color: "#6d6d72",
                fontFamily: "\"Helvetica Neue\", Helvetica, sans-serif",
                margin: "0 2px",
              }}
            >
              5,000
            </b>
            円以上購入で
          </small>
          <b style={{ color: "#7f0019", marginLeft: 5 }}>
            配送料無料
          </b>
        </span>
      </a>
    </div>
  );
};
