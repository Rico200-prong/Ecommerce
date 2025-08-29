import React from "react";

const Products = () => {
  const productData = [
    {
      id: "1",
      productImg: "/white_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "2",
      productImg: "/wood_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "3",
      productImg: "/wooden_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "4",
      productImg: "/wood_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "5",
      productImg: "/wooden_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "6",
      productImg: "/white_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "7",
      productImg: "/white_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "8",
      productImg: "/wood_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
    {
      id: "9",
      productImg: "/white_chair.png",
      productName: "Cupboard",
      previousPrice: "$45.00",
      discountedPrice: "$44.00",
      ratings: "3 reviews",
    },
  ];

  return (
    <section className="flex items-start justify-between mx-[25px] lg:mx-[50px] 2xl:mx-[300px] mt-[50px] mb-[80px]">
      <aside className="w-1/4 hidden lg:block">
        <div>
          <h3 className="text-[#212121] font-[600] text-[18px] mb-[30px]">
            Shopping Options
          </h3>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-y font-[300] p-[10px]">
            <p>Style</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-b font-[300] p-[10px]">
            <p>Category</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-b font-[300] p-[10px]">
            <p>Style</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-b font-[300] p-[10px]">
            <p>Size</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-b font-[300] p-[10px]">
            <p>Price</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-[15px] border-solid border-b font-[300] p-[10px]">
            <p>Color</p>
            <i class="bx bx-chevron-down text-[#828282]"></i>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-[20px] mt-[30px]">
            <h3 className="text-[#212121] font-[600] text-[18px] ">
              Compare Products
            </h3>
            <small className="text-[12px] text-[#828282]">(2 items)</small>
          </div>
          <div>
            <div className="flex items-center text-[#212121] gap-x-[5px] mb-[5px] font-[300]">
              <i class="bx  bx-x text-[24px]"></i>
              <button className=" text-[14px] underline">Summit Watch</button>
            </div>
            <div className="flex items-center text-[#212121] gap-x-[5px]">
              <i class="bx  bx-x text-[24px]"></i>
              <button className="font-[300] text-[14px] underline">
                Cruise Dual Analog Watch
              </button>
            </div>
          </div>
          <div className="flex items-center mt-[30px]">
            <button className="bg-[#7DB800] text-white text-[14px] font-[700] px-[20px] py-[10px]">
              Compare
            </button>
            <button className="text-[#4F4F4F] underline text-[14px] ml-[30px]">
              Clear All
            </button>
          </div>
        </div>
        <div className="mt-[30px]">
          <h3 className="text-[#212121] text-[18px] font-[600] mb-[15px]">
            My Wish List
          </h3>
          <p className="text-[#212121] text-[14px] font-[300]">
            You have no items in your wish list.
          </p>
        </div>
      </aside>
      <div className="lg:w-3/4 w-[100%]  lg:px-[40px]">
        <div className="block lg:hidden">
          <button className="text-[#828282] border border-solid p-[5px] text-[12px]">
            Shop By
          </button>
          <span className="text-[#828282] text-[14px]">Items 1-9 of 32</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:flex items-center hidden ">
            <i class="bx bxs-grid text-[24px] bg-[#DEDEDE] p-[5px]"></i>
            <i class="bx bxs-layout text-[24px] bg-[#F0F0F0] p-[5px]"></i>
            <span className="text-[#828282] text-[14px] ml-[10px]">
              Items 1-9 of 32
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-[#828282] text-[14px]">Sort By</span>
            <span className="bg-[#F0F0F0] text-[#4F4F4F] flex items-center gap-x-[40px] px-[15px] py-[10px]">
              <p className="text-[14px] ">Position</p>
              <i class="bx bx-chevron-down text-[20px]"></i>
            </span>
            <i class="bx bxs-up-arrow-alt text-[24px] text-[#212121]"></i>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[20px] ">
          {productData.map(
            ({
              id,
              productImg,
              productName,
              previousPrice,
              discountedPrice,
              ratings,
            }) => (
              <div key={id} className=" mb-[30px]">
                <div className="">
                  <img
                    src={productImg}
                    alt={productName}
                    className="h-[350px] w-[100%] lg:w-[288px]  px-[30px] py-[50px] bg-[#F0F0F0] "
                  />
                </div>
                <div>
                  <h3 className="font-[600] text-[16px] text-[#212121] mt-[20px] ">
                    {productName}
                  </h3>
                  <div className="flex items-center text-[15px] font-[600] gap-x-[10px] my-[4px]">
                    <p className="line-through text-[#A2A2A2]">
                      {previousPrice}
                    </p>
                    <p className="text-[#212121]">{discountedPrice}</p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <i class="bx bxs-star text-[18px] text-[#FF9900]"></i>
                      <i class="bx bxs-star text-[18px] text-[#FF9900]"></i>
                      <i class="bx bxs-star text-[18px] text-[#FF9900]"></i>
                      <i class="bx bxs-star text-[18px] text-[#C4C4C4]"></i>
                      <i class="bx bxs-star text-[18px] text-[#C4C4C4]"></i>
                    </div>
                    <small className="underline text-[12px] text-[#828282] ml-[10px]">
                      3 reviews
                    </small>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className=" flex items-center justify-end">
          <small className="text-[12px] text-[#828282]">show</small>
          <span className="bg-[#F0F0F0] text-[14px] text-[#4F4F4F] flex items-center px-[15px] py-[10px] mx-[10px]">
            <small>9</small>
            <i class="bx bx-chevron-down ml-[20px]"></i>
          </span>
          <small className="text-[12px] text-[#828282]">per page</small>
        </div>
      </div>
    </section>
  );
};

export default Products;
