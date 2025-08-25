import React from "react";

const Hero = () => {
  return (
    <section className="2xl:mx-[300px] mx-[25px] lg:mx-[50px] my-[40px] ">
      <div className="flex items-center text-[14px] font-[400] text-[#828282] mb-[30px]">
        <small className="text-[#212121]">Home</small>
        <i class="bx bx-chevron-right text-[20px] mx-[6px]"></i>
        <small>New Luma Yoga Collection</small>
      </div>
      <div className="flex items-start justify-between ">
        <div className="flex items-center  bg-[#F0F0F0] py-[30px]  ">
          <button className="text-[#828282] bg-white rounded-full flex items-center p-[10px] ml-[30px] ">
            <i class="bx bx-left-arrow-alt text-[30px]"></i>
          </button>
          <img src="/white_chair.png" alt="chair" className="w-[438px]" />
          <button className="text-[#828282] bg-white rounded-full flex items-center p-[10px] mr-[30px] ">
            <i class="bx bx-right-arrow-alt text-[30px]"></i>
          </button>
        </div>
        <div className=" ">
          <h1 className="text-[40px] font-[300] text-[#212121] leading-[120%] w-[70%] mb-[15px]">
            Simple Wood Chair Collection
          </h1>
          <div className="flex items-center mb-[20px]">
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
            <small className="underline text-[12px] text-[#828282] ml-[10px]">
              Add Your Review
            </small>
          </div>
          <p className="text-[#828282] ">As Low As</p>
          <div className="flex items-center justify-between b border-solid border-b border-[#E0E0E0] pb-[20px]">
            <h2 className="text-[36px] font-[550] font-poppins text-[#212121]">
              $45.00
            </h2>
            <div className="flex flex-col items-end">
              <span className="flex items-center mb-[6px]">
                <span className="w-[10px] h-[10px] flex rounded-full bg-[#83D367]"></span>
                <p className="text-[#212121] text-[14px] font-[700] ml-[6px]">
                  IN STOCK
                </p>
              </span>
              <span className="text-[#212121] text-[14px] font-[400]">
                SKU#: 24-MB05
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-[20px] my-[25px]">
            <p className="text-[14px] text-[#212121]">Quantity</p>
            <div className=" border border-solid border-[#A2A2A2] p-[10px] flex items-center text-[14px] text-[#212121] w-max">
              <button>-</button>
              <p className="mx-[40px]">1</p>
              <button>+</button>
            </div>
          </div>
          <div className="py-[15px] px-[40px] bg-[#7DB800] font-[700] text-white w-max">
            <button>Add To Cart</button>
          </div>
          <div className="flex items-center mt-[30px]">
            <div className="text-[#828282] flex items-center">
              <i class="bx bxs-heart text-[24px]"></i>
              <p className="font-[500] text-[14px] ml-[5px]">
                ADD TO WISH LIST
              </p>
            </div>
            <div className="text-[#828282] flex items-center mx-[40px]">
              <i class="bx bxs-bar-chart-alt-2 text-[24px]"></i>
              <p className="font-[500] text-[14px] ml-[5px]">ADD TO COMPARE</p>
            </div>
            <div className="text-[#828282] flex items-center">
              <i class="bx bxs-envelope text-[24px]"></i>
              <p className="font-[500] text-[14px] ml-[5px]">Email</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-[10px] mt-[10px]">
        <img src="/white_chair.png" alt="" className="w-[88px] h-[110px]" />
        <img src="/white_dinning.png" alt="" className="w-[88px] h-[110px]" />
        <img src="/kitchen.png" alt="" className="w-[88px] h-[110px]" />
      </div>
    </section>
  );
};

export default Hero;
