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
  ];
  return (
    <section className="mx-[25px] lg:mx-[50px] 2xl:mx-[300px] mb-[30px]">
      <div className="flex justify-center">
        <h3 className="text-[36px] font-[300] text-[#212121]">
          Related Products
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-[20px] ">
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
                  <p className="line-through text-[#A2A2A2]">{previousPrice}</p>
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
    </section>
  );
};

export default Products;
