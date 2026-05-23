import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";

const sliderImages = [
  "/images/s4-image1.jpg",
  "/images/s3-image2.jpg",
  "/images/s3-image3.jpg",
  "/images/s3-image4.jpg",
  "/images/s3-image5.jpg"
];

export default function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-29">
        {/* Hero Section */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-[calc(100vh-116px)]">
          <div className="bg-black/45 h-full">
            <div className="flex flex-col items-center justify-center h-full w-full text-white relative">
              <h1 className="text-4xl lg:text-7xl font-serif mb-4 font-bold">About Us</h1>
              <div className="flex items-center text-lg font-medium">
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
                <span className="mx-3">|</span>
                <span className="text-accent">About</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 Welcome! */}
        <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-20 px-8 lg:px-16 max-w-7xl mx-auto bg-white gap-10 lg:gap-0 overflow-hidden">
          <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-20" data-aos="fade-right" data-aos-duration="300">
            <h1 className="text-5xl mb-5">Welcome!</h1>
            <p className="text-sm text-light-black leading-relaxed mb-5">
              Nestled in a serene corner of the world, our hotel offers a perfect
              escape from the ordinary. Far from the hustle and bustle, we invite
              you to unwind and experience unmatched comfort, culinary delights,
              and breathtaking views. Whether you're here for relaxation or
              adventure, we have something special for everyone.
            </p>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <button className="h-[38px] w-32 bg-primary-1 font-medium text-white rounded-full mr-3.5 transition-all hover:bg-primary-2 hover:scale-105">Learn More</button>
              <p className="text-primary-1 mb-0 flex items-center"><span className="text-sm mr-3.5 text-light-black">or</span>SEE VIDEO</p>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 w-full lg:w-auto" data-aos="fade-left" data-aos-duration="300">
            <img src="/images/s2-image" alt="image 1" className="w-full lg:max-w-lg h-72 lg:h-96 rounded-xl object-cover md:object-[-60px] lg:object-center shadow-xl" />
            <img src="/images/s2-image3.jpg" alt="image 2" className="w-36 lg:w-48 h-36 lg:h-48 rounded-full border-4 border-white shadow-lg absolute bottom-[-50px] lg:bottom-[-70px] right-1/2 lg:right-[-70px] translate-x-1/4 lg:translate-x-0 object-cover" />
          </div>
        </section>

        {/* Section 3 Leadership */}
        <section className="flex flex-col items-center justify-between py-20 px-16 bg-white/80">
          <h1 className="text-center text-5xl mt-0 mb-10" data-aos="fade-down" data-aos-duration="300">Leadership</h1>
          <div className="flex flex-row flex-wrap justify-around lg:justify-between items-center gap-5 mb-7 w-full max-w-250" data-aos="zoom-in" data-aos-duration="300">
            
            <div className="w-70 h-96 perspective-[1000px] group">
              <div className="w-full h-full relative transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-[url('/images/about/s3-person1.jpg')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 text-white text-center flex flex-col justify-end pb-3.5 bg-gradient-to-b from-transparent to-black/70">
                    <h3 className="mb-1.5 text-primary-1 font-medium text-xl">Will Peter</h3>
                    <p className="mb-0">President</p>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-whitesmoke flex flex-col justify-between rotate-y-180">
                  <p className="py-2.5 px-7 text-gray-500 text-lg leading-relaxed mt-4">
                    “Leadership is not about being in charge. It’s about taking
                    care of those in your charge and guiding them towards a shared
                    vision.”
                  </p>
                  <div className="flex flex-row items-center py-3.5 px-7">
                    <img src="/images/about/s3-person1.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
                    <div className="ml-2.5 text-gray-500 text-left">
                      <h3 className="mb-0 font-normal text-primary-1 text-lg">Will Peter</h3>
                      <p className="mt-0.5 text-sm">President</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-70 h-96 perspective-[1000px] group">
              <div className="w-full h-full relative transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-[url('/images/about/s3-person2.jpg')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 text-white text-center flex flex-col justify-end pb-3.5 bg-gradient-to-b from-transparent to-black/70">
                    <h3 className="mb-1.5 text-primary-1 font-medium text-xl">Jane Williams</h3>
                    <p className="mb-0">Business Manager</p>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-whitesmoke flex flex-col justify-between rotate-y-180">
                  <p className="py-2.5 px-7 text-gray-500 text-lg leading-relaxed mt-4">
                    “Success in business is not just about making the right
                    decisions but also about inspiring others to reach their full
                    potential.”
                  </p>
                  <div className="flex flex-row items-center py-3.5 px-7">
                    <img src="/images/about/s3-person2.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
                    <div className="ml-2.5 text-gray-500 text-left">
                      <h3 className="mb-0 font-normal text-primary-1 text-lg">Jane Williams</h3>
                      <p className="mt-0.5 text-sm">Business Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-70 h-96 perspective-[1000px] group">
              <div className="w-full h-full relative transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-[url('/images/about/s3-person3.jpg')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 text-white text-center flex flex-col justify-end pb-3.5 bg-gradient-to-b from-transparent to-black/70">
                    <h3 className="mb-1.5 text-primary-1 font-medium text-xl">Jeffrey Neddery</h3>
                    <p className="mb-0">Marketing Director</p>
                  </div>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-whitesmoke flex flex-col justify-between rotate-y-180">
                  <p className="py-2.5 px-7 text-gray-500 text-lg leading-relaxed mt-4">
                    “Effective marketing is about understanding your audience,
                    telling a compelling story, and creating connections that
                    drive lasting impact.”
                  </p>
                  <div className="flex flex-row items-center py-3.5 px-7">
                    <img src="/images/about/s3-person3.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
                    <div className="ml-2.5 text-gray-500 text-left">
                      <h3 className="mb-0 font-normal text-primary-1 text-lg">Jeffrey Neddery</h3>
                      <p className="mt-0.5 text-sm">Marketing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4 Photos */}
        <section className="px-8 lg:px-16 pb-24 flex flex-col items-center bg-white">
          <div className="pt-20 px-4 max-w-3xl pb-5 flex flex-col items-center text-center" data-aos="fade-right" data-aos-duration="300">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-2 mb-5">Photos Gallery</h1>
            <p className="text-base leading-relaxed mb-5">
              Explore the beauty of our hotel through stunning images that capture
              the essence of relaxation and luxury. From scenic views to cozy
              interiors, each photo tells the story of a perfect getaway, nestled
              far from the everyday world by the peaceful shores of serenity.
            </p>
          </div>
          <Slider images={sliderImages} />
        </section>

        {/* Section 5 History */}
        <section className="w-full grid place-items-center py-16 px-5 lg:px-16 pb-24 bg-white/80" data-aos="fade-down" data-aos-duration="300">
          <h1 className="text-5xl mb-24 relative after:absolute after:content-[''] after:w-1/2 after:h-1 after:left-1/2 after:bottom-[-5px] after:bg-gradient-to-r after:from-secondary after:to-primary-1 after:-translate-x-1/2">History</h1>
          
          <div className="w-[95%] lg:w-[85%] relative after:absolute after:content-[''] after:w-0.5 after:h-full after:left-0 lg:after:left-1/2 after:top-[100%] lg:after:top-1/2 after:bg-gradient-to-b after:from-primary-2 after:to-primary-1 after:-translate-y-full lg:after:-translate-y-1/2 after:-z-10" data-aos="zoom-in" data-aos-duration="300">
            <ul className="list-none flex flex-col w-full m-0 p-0">
              <li className="w-[90%] lg:w-1/2 h-auto py-3.5 px-5 bg-white shadow-[1px_1px_25px_rgba(0,0,0,0.384)] rounded-xl mb-10 lg:mb-5 relative lg:self-start lg:text-right translate-x-7 lg:-translate-x-7">
                <h3 className="text-2xl font-medium text-primary-1">More Branches Worldwide</h3>
                <p className="text-base text-light-black my-2 leading-[24px]">
                  Discover the expansive journey of our growth, reaching beyond
                  borders to establish branches worldwide. From humble beginnings,
                  our company has evolved and expanded, creating a global presence
                  while maintaining our core values.
                </p>
                <span className="w-7 h-7 rounded-full bg-[#f3d3b9] absolute top-0 -left-16 lg:left-auto lg:-right-7 lg:translate-x-1/2 -translate-y-1/2 after:content-[''] after:w-3.5 after:h-3.5 after:rounded-full after:bg-[#ed8f42] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                <span className="absolute -top-10 left-5 lg:left-auto lg:right-5 w-[135px] h-9 rounded-2xl text-center text-white text-sm bg-gradient-to-l from-[#de9c67] to-primary-2 grid place-content-center">2019</span>
              </li>
              
              <li className="w-[90%] lg:w-1/2 h-auto py-3.5 px-5 bg-white shadow-[1px_1px_25px_rgba(0,0,0,0.384)] rounded-xl mb-10 lg:mb-5 relative self-start lg:self-end text-left translate-x-7">
                <h3 className="text-2xl font-medium text-primary-1">Company Full Blast</h3>
                <p className="text-base text-light-black my-2 leading-[24px]">
                  Experience the dynamic and innovative spirit that drives our
                  success. With a commitment to excellence, we have propelled our
                  company to new heights, blending tradition with cutting-edge
                  advancements to stay ahead in the industry.
                </p>
                <span className="w-7 h-7 rounded-full bg-[#f3d3b9] absolute top-0 -left-16 lg:-left-7 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:w-3.5 after:h-3.5 after:rounded-full after:bg-[#ed8f42] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                <span className="absolute -top-10 left-5 lg:left-5 w-[135px] h-9 rounded-2xl text-center text-white text-sm bg-gradient-to-l from-[#de9c67] to-primary-2 grid place-content-center">2011</span>
              </li>
              
              <li className="w-[90%] lg:w-1/2 h-auto py-3.5 px-5 bg-white shadow-[1px_1px_25px_rgba(0,0,0,0.384)] rounded-xl mb-0 relative lg:self-start lg:text-right translate-x-7 lg:-translate-x-7">
                <h3 className="text-2xl font-medium text-primary-1">The Birth of the Company</h3>
                <p className="text-base text-light-black my-2 leading-[24px]">
                  Reflect on the origins of our company, where it all began. From
                  its inception, our mission has been to innovate and lead,
                  transforming ideas into reality and laying the foundation for a
                  legacy of success.
                </p>
                <span className="w-7 h-7 rounded-full bg-[#f3d3b9] absolute top-0 -left-16 lg:left-auto lg:-right-7 lg:translate-x-1/2 -translate-y-1/2 after:content-[''] after:w-3.5 after:h-3.5 after:rounded-full after:bg-[#ed8f42] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                <span className="absolute -top-10 left-5 lg:left-auto lg:right-5 w-[135px] h-9 rounded-2xl text-center text-white text-sm bg-gradient-to-l from-[#de9c67] to-primary-2 grid place-content-center">2008</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 A Best Place To Stay. Reserve Now! */}
        <section className="bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed h-72">
          <div className="bg-black/40 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-16 text-white h-full gap-7 lg:gap-0 text-center lg:text-left">
            <h2 className="text-4xl" data-aos="fade-right" data-aos-duration="300">
              A Best Place To Stay. Reserve Now!
            </h2>
            <Link to="/reservation">
              <button className="text-lg text-white py-3.5 px-10 bg-transparent border-2 border-white rounded-full transition-all hover:bg-primary-1 hover:border-primary-1" data-aos="fade-left" data-aos-duration="300">
                Reserve Now
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
