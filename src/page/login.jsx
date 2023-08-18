import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
// import Header from "../component/layout/header";
import Header from "../component/layout/Navbar/Navbar";
import PageHeader from "../component/layout/pageheader";

const title = "Login";
const btnText = "Submit Now";

const LoginPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Login Page"} curPage={"Login"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name *" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link to="/forgetpass">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group text-center">
                <button className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
