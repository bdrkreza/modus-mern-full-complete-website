import React from "react";
import Banner from "../../Components/Banner/Banner";
import BlogSection from "../../Components/BlogSection/BlogSection";
import Clients from "../../Components/Client/Clients/Clients";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header/Header";
import Navbar from "../../Components/Header/Navbar/Navbar";
import ArrivalProduct from "../../Components/Product/ArrivalProduct/ArrivalProduct";
import FutureProductSection from "../../Components/Product/FutureProductSection/FutureProductSection";
import Testimonial from "../../Components/Testimonial/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ArrivalProduct />
      <Banner />
      <FutureProductSection />
      <BlogSection />
      <Clients />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
