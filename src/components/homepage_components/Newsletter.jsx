import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#EBEFE5] mx-[300px] my-[50px] px-[100px] py-[30px] fnt">
      <div>
        <h3 className="text-[21px] text-[#212121] font-[600] mb-[20px] ">
          Join our newsletter for £10 off
        </h3>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#828282] w-[70%]">
            We'll email you a voucher worth £10 off your first order over £50.
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy.
          </p>
        </div>
        <div>
          <form className="bg-white px-[20px] py-[10px] flex items-center justify-between w-[340px] rounded-[999px] ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="outline-none"
            />
            <i class="bx bxs-right-arrow-alt text-[20px] text-[#7DB800] "></i>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
