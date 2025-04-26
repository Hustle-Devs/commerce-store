const Questions = () => {
  return (
    <div className="mx-auto mt-[48px] mb-[80px] w-[600px] container">
      <div className="questions-sec">
        <h2 className="font-inter font-medium text-[#000000] text-[28px] md:text-[36px] lg:text-[40px] dark:text-white text-center md:leading-[30px] lg:leading-[48px]">
          Still got questions?
        </h2>
        <p className="pt-[16px] font-normal text-[#000000]/56 dark:text-white">
          Send us a message below and we'll get back to you in 1 business day.
        </p>
        <div className="flex flex-col gap-[24px] mt-[48px]">
          <div>
            <label className="font-inter font-medium text-[#000000] text-[14px] dark:text-white leading-[21px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Joe Gomez"
              className="bg-[#F9F6FE] mt-[10px] py-[11px] pl-[12px] rounded-[8px] w-full font-medium text-[#000000]/56 text-[14px]"
            />
          </div>
          <div>
            <label className="font-inter font-medium text-[#000000] text-[14px] dark:text-white leading-[21px]">
              Email
            </label>
            <input
              type="email"
              placeholder="joe@gomez.com"
              className="bg-[#F9F6FE] mt-[10px] py-[11px] pl-[12px] rounded-[8px] w-full font-medium text-[#000000]/56 text-[14px]"
            />
          </div>
          <div>
            <label className="font-inter font-medium text-[#000000] text-[14px] dark:text-white leading-[21px]">
              Message
            </label>
            <textarea
              className="bg-[#F9F6FE] mt-[10px] pt-[12px] pl-[12px] rounded-[8px] w-full h-[100px] font-medium text-[#000000]/56 text-[14px]"
              placeholder="Hey, I need help with..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center mx-auto mb-[80px]] w-full h-[40px]">
            <button className="bg-[#7E36F4] rounded-[10px] size-full font-semibold text-[#ffffff] text-[14px] leading-[21px] cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
