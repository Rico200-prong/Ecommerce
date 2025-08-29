import React from "react";

const Details = () => {
  return (
    <section className="mx-[25px] lg:mx-[50px] 2xl:mx-[300px] my-[100px]">
      <div>
        <div
          id="hide"
          className="flex items-center border-y border-solid border-[#E0E0E0] py-[15px]"
        >
          <i id="plus" class="bx bx-plus text-[20px] px-[15px]"></i>
          <i
            id="closed"
            class="bx bx-x text-[20px] px-[15px] text-[#212121] font-[600] hidden"
          ></i>
          <p className="text-[18px] font-[600] text-[#212121]">Details</p>
        </div>
        <div
          id="text"
          className="text-[14px] text-[#212121] pl-[50px] border-b border-solid border-[#E0E0E0] hidden"
        >
          <p className="mb-[20px] mt-[15px]">
            The sofa quickly and easily turns into a spacious bed.
          </p>
          <p className="mb-[20px]">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </div>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">Size</p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">
          Care instructions
        </p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">
          Quality and environmental information
        </p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">
          Packing Information
        </p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">
          Instructions and documents
        </p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">
          Product Availability
        </p>
      </div>
      <div className="flex items-center border-b border-solid border-[#E0E0E0] py-[15px]">
        <i class="bx bx-plus text-[20px] px-[15px]"></i>
        <p className="text-[18px] font-[600] text-[#212121]">Reviews</p>
      </div>
    </section>
  );
};

export default Details;
