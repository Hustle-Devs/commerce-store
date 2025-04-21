import FadeUp from "@/components/animations/FadeUp";
import ZoomIn from "@/components/animations/ZoomIn";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="container">
      <div className="testimonial-section">
        <FadeUp>
          <h5 className="text-[14px] leading-[22px] testimonial-type">
            Testimonial
          </h5>
        </FadeUp>
      </div>
      <div className="testimonial-heading">
        <FadeUp>
          <h2 className="font-semibold leading-[54px] testimonial-heading-details">
            What designers think
          </h2>
        </FadeUp>
      </div>
      <div className="testimonial-users">
        <div className="testimonial-user-details">
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user1.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  Clonify is a game-changer. Instead of drowning in an endless
                  chain of UI kits, there is clear and easy accountability
                  meaning tasks actually get done!
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user2.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  Clonify has helped my team and I stay on the same page.
                  Previously, we were all over the board. Using Clonify has
                  definitely saved us time and money.
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user3.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  If you are a business owner, and you don't have Clonify in
                  your toolkit just yet, I highly recommend that you check it
                  out.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-users">
        <div className="testimonial-user-details">
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user4.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  If you want to take your business to the next level, use
                  Clonify and don't look any further.
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user5.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="font-[400] text-[14px] text-muted-foreground lg:text-[16px] leading-[26px]">
                  I have been using Clonify for over a year now and I love it! I
                  can't imagine life without it. It's so easy to use, and the
                  customer service is more than great.
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user6.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  Everyone’s on the same page. Many of our people are not very
                  organized naturally, so Clonify is a godsend!
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-users">
        <div className="testimonial-user-details">
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user7.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  We can't understand how we've been living without Clonify.
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user8.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  With Clonify, communication between all of us is far more
                  efficient. A game changer.
                </p>
              </FadeUp>
            </div>
          </div>
          <div className="testimonial-user-background">
            <div className="user-about-section">
              <div className="user-img">
                <ZoomIn delay={0.3}>
                  <Image
                    src="/image/user9.png"
                    alt="user1"
                    width={48}
                    height={48}
                  />
                </ZoomIn>
              </div>
              <div className="user-details">
                <FadeUp delay={0.3}>
                  <h5 className="user-details-heading-three">Omar D</h5>
                </FadeUp>
                <div className="icons">
                  <FadeUp delay={0.2}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={0.8}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                  <FadeUp delay={1}>
                    <Image
                      src="/icons/star.png"
                      alt="star"
                      width={16}
                      height={15}
                    />
                  </FadeUp>
                </div>
              </div>
            </div>
            <div className="user-about">
              <FadeUp delay={0.5}>
                <h5 className="pt-[16px] font-inter text-[14px] leading-[22px]">
                  Nayzak UI Kit
                </h5>
              </FadeUp>
              <FadeUp delay={0.7}>
                <p className="pt-[14px] font-inter font-normal text-[16px] text-muted-foreground leading-[26px]">
                  I would recommend Clonify for anyone trying to get the word
                  out about their business. It has saved me so much time!
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
