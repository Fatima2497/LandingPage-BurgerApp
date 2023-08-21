"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUtensils } from "react-icons/fa";
import { LiaEnvira } from "react-icons/lia";
import { BsFillDropletFill,BsTelephoneFill, BsFillEnvelopeFill} from "react-icons/bs";
import { Oswald } from "next/font/google";
import { AiOutlineCheck,AiOutlineTwitter,AiFillInstagram, AiOutlineArrowUp } from "react-icons/ai";
import { BiPaperPlane,BiLogoFacebook, BiSolidLocationPlus } from "react-icons/bi";
import { useState } from "react";
import { all, beverage, food, snack } from "@/help/Data";
import { ThemeProvider } from "next-themes";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Grid, Pagination } from "swiper/modules";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [isActive, setIsActive] = useState(1);
  const [visible, setVisible] = useState(false)

  const handleActive = (btn) => setIsActive(btn);
  return (

      <main>
      {/* Home */}
      <section>
        <div className="container flex flex-col md:flex-row items-center gap-10">
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
            <Image
              className="w-60 md:w-full"
              src="/assets/img/home-image.png"
              alt="hero-image"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5 ">
            <h1 className={`hero__title ${oswald.className}`}>
              happy tummy with tasty burgers.
            </h1>
            <div className="separator mx-auto md:mx-0"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet. Non earum aperiam qui omnis soluta aut
              fuga deserunt eos omnis quam ut amet quaerat ut asperiores dolorum
              et asperiores delectus. Cum impedit tenetur et reprehenderit
              dolorem est deserunt quod sed suscipit aperiam.
            </p>
            <div className="text-base flex items-center justify-center md:justify-start md:gap-20 gap-4 py-10">
              <div className="text-center">
                <FaUtensils className="text-4xl mx-auto text-secondaryColor text-center" />
                <br />
                Delicious
              </div>
              <div className="text-center">
                <BsFillDropletFill className="text-4xl mx-auto text-secondaryColor text-center" />
                <br />
                Fresh
              </div>
              <div className="text-center">
                <LiaEnvira className="text-4xl mx-auto text-secondaryColor text-center" />
                <br />
                Organic
              </div>
            </div>
            <Link href="/" className="btn btn-primary">
              learn more
            </Link>
          </div>
        </div>
      </section>

      {/* category */}
      <section id="category">
        <div className="container flex flex-col gap-5 md:flex-row">
          {/* card-1 */}
          <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                className="absolute w-28 -bottom-4 -left-4"
                src="/assets/img/burger-1.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">all</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>

              <Link className="text-blackColor cursor-pointer" href="#">
                Buy Online
              </Link>
            </div>
          </div>

          {/* card-1 */}
          <div className="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                className="absolute w-28 -bottom-4 -left-4"
                src="/assets/img/snack-1.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">all</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>

              <Link className="text-secondaryColor cursor-pointer" href="#">
                Buy Online
              </Link>
            </div>
          </div>

          {/* card-3 */}
          <div className="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                className="absolute w-28 -bottom-4 -left-4"
                src="/assets/img/beverage-2.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">all</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>

              <Link className="text-secondaryColor cursor-pointer" href="#">
                Buy Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* promo */}
      <section id="promo">
        <div className="container flex flex-col gap-5 lg:flex-row lg:gap-10">
          {/* card-1 */}
          <div className="bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 ">
            <Image
              className="w-40 mx-auto hover:animate-movingY md:mx-5"
              src="/assets/img/promo-1.png"
              alt="promo-image"
              width={300}
              height={300}
            />

            <div className="space-y-2 pt-5 md:pt-0">
              <p className="text-xs text-secondaryColor">Payday Promo</p>
              <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link className="text-xs text-secondaryColor" href="#">
                Buy Online
              </Link>
            </div>
          </div>
          {/* card-2 */}
          <div className="bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 ">
            <Image
              className="w-40 mx-auto hover:animate-movingY md:mx-5"
              src="/assets/img/promo-2.png"
              alt="promo-image"
              width={300}
              height={300}
            />

            <div className="space-y-2 pt-5 md:pt-0">
              <p className="text-xs text-secondaryColor">Payday Promo</p>
              <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Link className="text-xs text-secondaryColor" href="#">
                Buy Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about">
        <div className="container flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <Image
              className="rounded-lg"
              src="/assets/img/about.jpg"
              alt="about-image"
              width={500}
              height={500}
            />{" "}
          </div>
          <div className="flex-1">
            <h2 className={`section__title ${oswald.className}`}>
              FIND all AND DRINKS , ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
            </h2>
            <div className="separator"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat nibh ut sapien elementum hendrerit.{" "}
            </p>
            <ul className="grid grid-cols-2 py-5 space-y-1">
              <li className="text-xs text-paragraphColor flex flex-row items-center">
                <AiOutlineCheck className="text-secondaryColor me-2" />
                Best Price
              </li>
              <li className="text-xs text-paragraphColor flex flex-row ">
                <AiOutlineCheck className="text-secondaryColor me-2" /> Fresh
                Ingredient
              </li>
              <li className="text-xs text-paragraphColor flex flex-row ">
                <AiOutlineCheck className="text-secondaryColor me-2" /> Best
                Service
              </li>
              <li className="text-xs text-paragraphColor flex flex-row ">
                <AiOutlineCheck className="text-secondaryColor me-2" /> Health
                Protocol
              </li>
              <Link href="#" className="btn btn-primary">
                About Us
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* menu */}
      <section id="menu">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h2 className={`section__title ${oswald.className}`}>OUR BEST MENU</h2>
            <div className="separator mx-auto"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat nibh ut sapien elementum hendrerit.
            </p>
            <div className="tabs_wrap">
              <ul className="flex flex-wrap justify-center gap-3 py-10">
                <li
                  className={`btn bg-darkColorLight ${
                    isActive === 1 ? "active" : ""
                  }`}
                  onClick={() => handleActive(1)}
                >
                  All
                </li>
                <li
                  className={`btn bg-darkColorLight ${
                    isActive === 2 ? "active" : ""
                  }`}
                  onClick={() => handleActive(2)}
                >
                  Food
                </li>
                <li
                  className={`btn bg-darkColorLight ${
                    isActive === 3 ? "active" : ""
                  }`}
                  onClick={() => handleActive(3)}
                >
                  Snack
                </li>
                <li
                  className={`btn bg-darkColorLight ${
                    isActive === 4 ? "active" : ""
                  }`}
                  onClick={() => handleActive(4)}
                >
                  Beverage
                </li>
              </ul>
            </div>
          </div>
          {isActive === 1 && (
            <div>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {/* all */}
                {all.map((item, index) => {
                  return (
                    <li key={index} className="item_wrap">
                      <div className="h-56 grid place-items-center bg-darkColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                        <Image
                          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                          src={item.image}
                          alt="all image"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="pt-5">
                        <div className="mb-2">
                          <h4 className="card__title">{item.title}</h4>
                          <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>

                        <p className="text-secondaryColor">$42.00</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* food  */}
          {isActive === 2 && (
            <div>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {/* food */}
                {food.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="h-56 grid place-items-center bg-darkColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                        <Image
                          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                          src={item.image}
                          alt="all image"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="pt-5">
                        <div className="mb-2">
                          <h4 className="card__title">{item.title}</h4>
                          <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>

                        <p className="text-secondaryColor">$42.00</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* snack  */}
          {isActive === 3 && (
            <div>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {/* snack */}
                {snack.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="h-56 grid place-items-center bg-darkColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                        <Image
                          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                          src={item.image}
                          alt="all image"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="pt-5">
                        <div className="mb-2">
                          <h4 className="card__title">{item.title}</h4>
                          <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>

                        <p className="text-secondaryColor">$42.00</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* beverage  */}
          {isActive === 4 && (
            <div>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {/* beverage */}
                {beverage.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="h-56 grid place-items-center bg-darkColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                        <Image
                          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                          src={item.image}
                          alt="all image"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="pt-5">
                        <div className="mb-2">
                          <h4 className="card__title">{item.title}</h4>
                          <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>

                        <p className="text-secondaryColor">$42.00</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Review */}
      <section id="review" className="bg-darkColorLight py-20">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h2 className={`section__title ${oswald.className}`}>customer review</h2>
            <div className="separator mx-auto"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat nibh ut sapien elementum hendrerit.
            </p>
          </div>

          <Swiper
            speed={400}
            spaceBetween={30}
            pagination={true}
            grabCursor={true}
            modules={[Grid, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 1,
              cols: 2,
            }}
            breakpoints={{
              480: {
                slidesPerview: 1,
                spaceBetween: 20,
              },
              760: {
                slidesPerview: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerview: 3,
              },
            }}
            className="myswipper  mt-4"
          >
            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-darkkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  feugiat nibh ut sapien elementum hendrerit.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src="/assets/img/review-1.jpg"
                    alt="review image"
                    width={50}
                    height={50}
                  />
                  <div className="ml-2">
                    <p className="uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  {/* text-4xl secondaryColor ml-auto react icons */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-darkkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  feugiat nibh ut sapien elementum hendrerit.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src="/assets/img/review-2.jpg"
                    alt="review image"
                    width={50}
                    height={50}
                  />
                  <div className="ml-2">
                    <p className="uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  {/* text-4xl secondaryColor ml-auto react icons */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-5 bg-darkkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  feugiat nibh ut sapien elementum hendrerit.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src="/assets/img/review-3.jpg"
                    alt="review image"
                    width={50}
                    height={50}
                  />
                  <div className="ml-2">
                    <p className="uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  {/* text-4xl secondaryColor ml-auto react icons */}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondaryColor py-16">
        <div className="container flex flex-col gap-5 md:items-center md:flex-row">
          <div className="space-y-6 md:flex-1">
            <h2 className={`section__title text-blackColor ${oswald.className}`}>
              Get exclusive update
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:flex-1">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 text-blackColor rounded-lg outline-none md:w-full "
            />
            <Link
              href="#"
              className="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75"
            >
              <BiPaperPlane /> Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <section className="footer">
          <div className="container">
            <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
              <li>
                <div className="space-y-3">
                  <Link
                    href="#"
                    className={`text-4xl ${oswald.className} uppercase`}
                  >
                    Bur<span className="text-secondaryColor">ger</span>
                  </Link>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam feugiat nibh ut sapien elementum hendrerit.
                  </p>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-5">
                  <h3 className={`text-lg uppercase ${oswald.className}`}>Support</h3>
                  <Link href="#" className="text-xs hover:text-secondaryColor">FAQ&apos;s</Link>
                  <Link href="#" className="text-xs hover:text-secondaryColor">Privacy Policy</Link>
                  <Link href="#" className="text-xs hover:text-secondaryColor">Terms &amp; Conditions</Link>
                  <Link href="#contact" className="text-xs hover:text-secondaryColor">Contact</Link>
                </div>
              </li>

              <li className="space-y-8">
                <div className="space-y-2">
                  <h3 className={`text-lg uppercase ${oswald.className}`}>phone</h3>
                  <p className="flex items-center gap-2 text-xs">
                  <BsTelephoneFill className="text-lg text-secondaryColor" /> +92 333 558923
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-lg uppercase ${oswald.className}`}>email</h3>
                  <p className="flex items-center gap-2 text-xs">
                  <BsFillEnvelopeFill className="text-lg text-secondaryColor" /> burger.info@email.com
                  </p>
                </div>
              </li>

              <li className="space-y-8">
                <div className="space-y-2">
                  <h3 className={`text-lg uppercase ${oswald.className}`}>address</h3>
                  <p className="flex items-center gap-2 text-xs">
                  <BiSolidLocationPlus className="text-lg text-secondaryColor" /> Address goes here
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-lg uppercase ${oswald.className}`}>follow us</h3>
                  <div className="space-x-3 flex ">
                    <BiLogoFacebook className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                    <AiOutlineTwitter className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                    <AiFillInstagram className="text-lg text-secondaryColor cursor-pointer hover:translate-y-1 ease-in duration-200" />
                  </div>
                </div>
              </li>
            </ul>

            <div className="flex flex-col items-center border-1 border-darkColorLight py-5 md:flex-row md:justify-between">
              <p className="paragraph">Burger Template Kit by Light Code</p>
              <p className="paragraph">Copyright &copy; 2023. All rights reserved.</p>
            </div>
          </div>
        </section>
      </footer>

      {/* scroll up */}
      {/* <Link href="#" className="fixed right-4 bottom-0 bg-secondaryColor shadow-sm inline-block w-10 h-10 px-4 py-2 rounded-full text-lg  text-blackColor z-50 hover:translate-y-1 ease-in items-center duration-200">
        <AiOutlineArrowUp className="text-lg" />
      </Link> */}
    </main>
  
  );
}
