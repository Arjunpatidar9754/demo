import React, { Fragment } from 'react';

// import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Footer = props => {
  // const { footerFixed } = props;
  return (
    <Fragment>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Address</h6>
                <p className="text-justify">35, 3rd flour Chitra Bagh Colony <br />Rani Bagh Main, Khandwa Naka, Indore, Madhya Pradesh<br />Madhya Pradesh-452020</p>
                <p className="text-justify"><b>Contact: </b>9926285954 <br /><b>Email: </b><i>lamplearningofficial@gmail.com</i></p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>courses</h6>
                <ul className="footer-links">
                  <li><Link className='link' to="/html">HTML</Link></li>
                  <li><Link to="/Css_intro">CSS</Link></li>
                  <li><Link to="/Javascript_intro">Javascript</Link></li>
                  <li><Link to="/C#_intro">C#</Link></li>
                  <li><Link to="/C++_intro">C++</Link></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><Link to="/About_us">About Us</Link></li>
                  <li><Link to="/Contact_us">Contact Us</Link></li>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/Privacy_policy">Privacy Policy</Link></li>
                  <li><Link to="/Login">Login</Link></li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
            <Link href="#">@rtal-technologies</Link>.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><Link className="facebook" href="#"><i className="fa fa-facebook"></i></Link></li>
                  <li><Link className="twitter" href="#"><i className="fa fa-twitter"></i></Link></li>
                  <li><Link className="dribbble" href="#"><i className="fa fa-dribbble"></i></Link></li>
                  <li><Link className="linkedin" href="#"><i className="fa fa-linkedin"></i></Link></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
