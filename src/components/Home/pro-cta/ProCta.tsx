import Image from 'next/image';
import React from 'react'

const ProCta = () => {
  return (
    <div className="container">
      <div className="pro-cta">
        <div className="pro-cta-content">
          <div>
            <h2 className="pro-heading">Pro Access</h2>
            <p className="pro-paragraph">
              Launching your next website has never been so fast and effortless.
              Browse hundreds of beautifully designed Framer templates and go
              live in minutes.
            </p>
            <div className=" flex flex-col sm:flex-row items-center py-[5px] sm:py-[36px]">
              <div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content">3K+ templates</p>
                  </div>
                </div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content">Responsive layouts</p>
                  </div>
                </div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content">Google Fonts</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content">Shared styles</p>
                  </div>
                </div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content">5k Components</p>
                  </div>
                </div>
                <div className="icon-area">
                  <div className="icon-image">
                    <Image
                      className=""
                      src="/icons/badge-icon.png"
                      width={16}
                      height={16}
                      alt="badge-icon"
                    />
                  </div>
                  <div className="icon-content">
                    <p className="icon-pra-content"> Premium support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex w-[70%] sm:w-[400px] md:w-[500px] lg:w-[540px] bg-[#7E36F4] h-[54px] mx-auto rounded-[40px] items-center justify-center mb-[80px]">
              <button className="text-[18px] font-semibold leading-[30px] text-[#ffffff]">
                Start your 7 day trial
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[95%]">
          <Image
            src="/image/pro-img.png"
            width={540}
            height={579}
            alt="pro-img"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default ProCta