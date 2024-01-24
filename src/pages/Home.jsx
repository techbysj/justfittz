import { Nav ,HomeHero ,VideoBg ,YourScroll, SportsNavBar , SquareBanners , RectangularBanners, ImageCarousel } from "../components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../sections";

const Home = () => {
  return (
    <main className="relative">
      <Nav />
      <SportsNavBar />
      <section className=''>
        <YourScroll />
      </section>

      <section className='videobgw'>
        <VideoBg />
      </section>
      <ImageCarousel />
      <RectangularBanners />
      <section className="">
      <SquareBanners />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section >
        <HomeHero />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
