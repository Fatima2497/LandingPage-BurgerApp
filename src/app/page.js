"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUtensils} from "react-icons/fa";
import { LiaEnvira } from "react-icons/lia";
import { BsFillDropletFill } from "react-icons/bs";
import { Oswald } from "next/font/google";
import {AiOutlineCheck} from "react-icons/ai"
import { useState } from "react";
import { all, beverage, food, snack } from "@/help/Data";



const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  const [isActive, setIsActive] = useState(1)
  const handleActive = (btn) => setIsActive(btn)
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
          <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 ">
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
          <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 ">
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
          <div className="flex-1"><Image className="rounded-lg" src='/assets/img/about.jpg' alt='about-image' width={500} height={500} /> </div>
          <div className="flex-1">
            <h2 className="section__title">FIND all AND DRINKS , ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
            <div className="separator"></div>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nibh ut sapien elementum hendrerit. </p>
            <ul className="grid grid-cols-2 py-5 space-y-1">
              <li className="text-xs text-paragraphColor flex flex-row items-center">
                <AiOutlineCheck className="text-secondaryColor me-2" /> 
                Best Price
              </li>
              <li className="text-xs text-paragraphColor flex flex-row "><AiOutlineCheck className="text-secondaryColor me-2" /> Fresh Ingredient</li>
              <li className="text-xs text-paragraphColor flex flex-row "><AiOutlineCheck className="text-secondaryColor me-2" /> Best Service</li>
              <li className="text-xs text-paragraphColor flex flex-row "><AiOutlineCheck className="text-secondaryColor me-2" /> Health Protocol</li>
              <Link href="#" className="btn btn-primary">About Us</Link>
            </ul>
          </div>
        </div>
      </section>

      {/* menu */}
      <section id="menu">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h2 className="section__title">OUR BEST MENU</h2>
            <div className="separator mx-auto"></div>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nibh ut sapien elementum hendrerit.</p>
            <div className="tabs_wrap">
              <ul className="flex flex-wrap justify-center gap-3 py-10">
                <li className={`btn bg-primaryColorLight ${isActive===1 ? 'active' : ''}`} onClick={()=> handleActive(1)}>All</li>
                <li className={`btn bg-primaryColorLight ${isActive===2 ? 'active' : ''}`}  onClick={()=> handleActive(2)}>Food</li>
                <li className={`btn bg-primaryColorLight ${isActive===3 ? 'active' : ''}`}  onClick={()=> handleActive(3)}>Snack</li>
                <li className={`btn bg-primaryColorLight ${isActive===4 ? 'active' : ''}`}  onClick={()=> handleActive(4)}>Beverage</li>
              </ul>
            </div>
          </div>
          {
              isActive===1 && (
                <div>
                  <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* all */}
                   {
                      all.map((item,index)=>{
                        return (
                          <li key={index}className="item_wrap">
                          <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                            <Image className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24" src={item.image} alt='all image' width={500} height={500} />
                          </div>
                          <div className="pt-5">
                            <div className="mb-2">
                              <h4 className="card__title">{item.title}</h4>
                              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
    
                            <p className="text-secondaryColor">$42.00</p>
                          </div>
                        </li>
                        )
                      })
                   }
                  </ul>
                </div>
              )
          }

            {/* food  */}
            {
              isActive===2 && (
                <div>
                  <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* food */}
                   {
                      food.map((item,index)=>{
                        return (
                          <li key={index}>
                          <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                            <Image className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24" src={item.image} alt='all image' width={500} height={500} />
                          </div>
                          <div className="pt-5">
                            <div className="mb-2">
                              <h4 className="card__title">{item.image}</h4>
                              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
    
                            <p className="text-secondaryColor">$42.00</p>
                          </div>
                        </li>
                        )
                      })
                   }
                  </ul>
                </div>
              )
          }

          {/* snack  */}
          {
              isActive===3 && (
                <div>
                  <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* snack */}
                   {
                      snack.map((item,index)=>{
                        return (
                          <li key={index}>
                          <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                            <Image className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24" src={item.image} alt='all image' width={500} height={500} />
                          </div>
                          <div className="pt-5">
                            <div className="mb-2">
                              <h4 className="card__title">{item.title}</h4>
                              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
    
                            <p className="text-secondaryColor">$42.00</p>
                          </div>
                        </li>
                        )
                      })
                   }
                  </ul>
                </div>
              )
          }

             {/* beverage  */}
             {
              isActive===4 && (
                <div>
                  <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                    {/* beverage */}
                   {
                      beverage.map((item,index)=>{
                        return (
                          <li key={index}>
                          <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                            <Image className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24" src={item.image} alt='all image' width={500} height={500} />
                          </div>
                          <div className="pt-5">
                            <div className="mb-2">
                              <h4 className="card__title">{item.title}</h4>
                              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
    
                            <p className="text-secondaryColor">$42.00</p>
                          </div>
                        </li>
                        )
                      })
                   }
                  </ul>
                </div>
              )
          }
        </div>
      </section>

      {/* Review */}
      <section id="review"></section>
    </main>
  );
}
