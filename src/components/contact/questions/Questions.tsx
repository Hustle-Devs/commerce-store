const Questions = () => {
  return (
    <div className="container w-[600px] mx-auto mt-[48px] mb-[80px]">
      <div className="questions-sec">
        <h2 className="font-medium text-[28px] md:text-[36px] md:leading-[30px] lg:text-[40px] lg:leading-[48px] font-inter  text-center text-[#000000] dark:text-white">
          Still got questions?
        </h2>
        <p className="text-[#000000]/56 dark:text-white pt-[16px]">
          Send us a message below and we'll get back to you in 1 business day.
        </p>
        <div className="mt-[48px] flex flex-col gap-[24px]">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Joe Gomez"
              className="bg-[#F9F6FE] w-full py-[11px] pl-[12px] mt-[10px] text-[14px] font-medium text-[#000000]/56 rounded-[8px]"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="joe@gomez.com"
              className="bg-[#F9F6FE] w-full py-[11px] pl-[12px] mt-[10px] text-[14px] font-medium text-[#000000]/56 rounded-[8px]"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              className="bg-[#F9F6FE] w-full h-[100px] mt-[10px] text-[14px] font-medium text-[#000000]/56 rounded-[8px] pt-[12px] pl-[12px]"
              placeholder="Hey, I need help with..."
            ></textarea>
          </div>
          <div className=" w-full bg-[#7E36F4] h-[40px] mx-auto rounded-[10px] items-center justify-center mb-[80px] flex">
            <button className="text-[14px] font-semibold leading-[21px] text-[#ffffff]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions