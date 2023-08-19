import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import Assistance from "../component/section/Assistance/Assistance";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Sponsor />
      <Category />
      <Course />
      <About />
      {/* <Instructor /> */}
      <Student />
      <Blog />
      <Achievement />
      {/* <Assistance /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
