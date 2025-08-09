import React from "react";

const Products = () => {
  const productData = [
    {
      id: "1",
      productImg: "/white_sofa.png",
      productTittle: "Sofas",
    },
    {
      id: "2",
      productImg: "/wooden_stools.png",
      productTittle: "Sofas",
    },
    {
      id: "3",
      productImg: "/lamp.png",
      productTittle: "Floor lamps & Fixture",
    },
    {
      id: "4",
      productImg: "/comode.png",
      productTittle: "Commode",
    },
    {
      id: "5",
      productImg: "/cupboard.png",
      productTittle: "Cupboards",
    },
    {
      id: "6",
      productImg: "/bed.png",
      productTittle: "Beds & Mattresses",
    },
    {
      id: "7",
      productImg: "/open_cupboard.png",
      productTittle: "Shelving",
    },
  ];

  return (
    <main>
      <section className="mx-[25px] lg:mx-[50px] 2xl:mx-[300px] lg:flex items-start gap-[30px] justify-between mt-[50px]">
        <div className="">
          {productData.slice(0, 4).map(({ id, productImg, productTittle }) => (
            <div key={id} className="">
              <div className="w-[100%] 2xl:w-[606px] lg:w-[550px]  lg:px-[100px] py-[10px] bg-[#F2F2F2]">
                <img src={productImg} alt={productTittle} className="  " />
              </div>
              <div className="flex items-center gap-[10px] mt-[20px] mb-[50px]">
                <span className="text-[#7DB800] text-[23px]">+</span>
                <h3 className="text-[20px] font-[300] ">{productTittle}</h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            {productData
              .slice(4, 6)
              .map(({ id, productImg, productTittle }) => (
                <div key={id} className="">
                  <div className="w-[100%] lg:w-[550px] 2xl:w-[606px] lg:px-[100px] py-[10px] bg-[#F2F2F2]">
                    <img src={productImg} alt={productTittle} className="  " />
                  </div>
                  <div className="flex items-center gap-[10px] mt-[20px] mb-[50px]">
                    <span className="text-[#7DB800] text-[23px]">+</span>
                    <h3 className="text-[20px] font-[300] ">{productTittle}</h3>
                  </div>
                </div>
              ))}
          </div>
          <div className="border border-solid px-[30px] py-[70px] lg:w-[550px] 2xl:w-[606px] mb-[60px]">
            <img src="/get.png" alt="" />
            <p className="text-[#A2A2A2] mt-[30px] mb-[50px]">
              Get 10% discount with notified about the latest news and updates,
              no spam, we proise1
            </p>
            <form className=" border border-solid px-[20px] py-[10px] flex items-center justify-between lg:w-[340px] rounded-[999px] ">
              <input
                type="email"
                placeholder="Enter your email address"
                className="outline-none"
              />
              <i class="bx bxs-right-arrow-alt text-[20px] text-[#7DB800] "></i>
            </form>
          </div>
          <div>
            {productData.slice(6).map(({ id, productImg, productTittle }) => (
              <div key={id} className="">
                <div className="w-[100%l lg:w-[550px] 2xl:w-[606px] lg:px-[100px] py-[10px] bg-[#F2F2F2]">
                  <img src={productImg} alt={productTittle} className="  " />
                </div>
                <div className="flex items-center gap-[10px] mt-[20px] mb-[50px]">
                  <span className="text-[#7DB800] text-[23px]">+</span>
                  <h3 className="text-[20px] font-[300] ">{productTittle}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
