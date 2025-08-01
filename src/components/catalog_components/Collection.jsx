import React from "react";

const Collection = () => {
  return (
    <section className="bg-[url('/background.png')] px-[300px] py-[30px]">
      <div className="text-[15px] flex items-center gap-[5px] mb-[30px]">
        <small className="text-white">Home</small>
        <i class="bx bx-chevron-right text-white"></i>
        <small className="text-[#A7A7A7]">New Luma Yoga Collection</small>
      </div>
      <div className="text-white text-[40px] font-[300]">
        <h1>Simple Wood Chair Collection</h1>
      </div>
    </section>
  );
};

export default Collection;
