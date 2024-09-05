import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={`footer bg-dark position-relative ${styles.footer}`}>
      <div className="footer-middle">
        <div className="container position-static">
          <div className="footer-ribbon">Get in touch</div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
              <div className="widget">
                <h4 className="widget-title">About Us</h4>
                <a href="demo1.html">
                  <img src="/images/logo-footer.png" alt="Logo" className="logo-footer" />
                </a>
                <p className="m-b-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus.
                  Duis nec vestibulum magna, et dapibus lacus.
                </p>
                <a href="demo1.html#" className="read-more text-white">
                  read more...
                </a>
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-3 */}

            <div className="col-lg-3 col-sm-6 pb-4 pb-sm-0">
              <div className="widget mb-2">
                <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                <ul className="contact-info m-b-4">
                  <li>
                    <span className="contact-info-label">Address:</span>123 Street Name, City, England
                  </li>
                  <li>
                    <span className="contact-info-label">Phone:</span>
                    <a href="tel:">(123) 456-7890</a>
                  </li>
                  <li>
                    <span className="contact-info-label">Email:</span>
                    <a href="mailto:email@example.com">email@example.com</a>
                  </li>
                  <li>
                    <span className="contact-info-label">Working Days/Hours:</span> Mon - Sun / 9:00 AM - 8:00 PM
                  </li>
                </ul>
                <div className="social-icons">
                  <a href="demo1.html#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></a>
                  <a href="demo1.html#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></a>
                  <a href="demo1.html#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></a>
                </div>
                {/* End .social-icons */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-3 */}

            <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
              <div className="widget">
                <h4 className="widget-title pb-1">Customer Service</h4>

                <ul className="links">
                  <li><a href="demo1.html#">Help & FAQs</a></li>
                  <li><a href="demo1.html#">Order Tracking</a></li>
                  <li><a href="demo1.html#">Shipping & Delivery</a></li>
                  <li><a href="demo1.html#">Orders History</a></li>
                  <li><a href="demo1.html#">Advanced Search</a></li>
                  <li><a href="dashboard.html">My Account</a></li>
                  <li><a href="demo1.html#">Careers</a></li>
                  <li><a href="demo1-about.html">About Us</a></li>
                  <li><a href="demo1.html#">Corporate Sales</a></li>
                  <li><a href="demo1.html#">Privacy</a></li>
                </ul>
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-3 */}

            <div className="col-lg-3 col-sm-6 pb-0">
              <div className="widget mb-1 mb-sm-3">
                <h4 className="widget-title">Popular Tags</h4>

                <div className="tagcloud">
                  <a href="demo1.html#">Bag</a>
                  <a href="demo1.html#">Black</a>
                  <a href="demo1.html#">Blue</a>
                  <a href="demo1.html#">Clothes</a>
                  <a href="demo1.html#">Fashion</a>
                  <a href="demo1.html#">Hub</a>
                  <a href="demo1.html#">Jean</a>
                  <a href="demo1.html#">Shirt</a>
                  <a href="demo1.html#">Skirt</a>
                  <a href="demo1.html#">Sports</a>
                  <a href="demo1.html#">Sweater</a>
                  <a href="demo1.html#">Winter</a>
                </div>
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-middle */}

      <div className="container">
        <div className="footer-bottom d-sm-flex align-items-center">
          <div className="footer-left">
            <span className="footer-copyright">© Porto eCommerce. 2021. All Rights Reserved</span>
          </div>

          <div className="footer-right ml-auto mt-1 mt-sm-0">
            <div className="payment-icons">
              <span className="payment-icon visa" style={{ backgroundImage: 'url(/images/payments/payment-visa.svg)' }}></span>
              <span className="payment-icon paypal" style={{ backgroundImage: 'url(/images/payments/payment-paypal.svg)' }}></span>
              <span className="payment-icon stripe" style={{ backgroundImage: 'url(/images/payments/payment-stripe.png)' }}></span>
              <span className="payment-icon verisign" style={{ backgroundImage: 'url(/images/payments/payment-verisign.svg)' }}></span>
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-bottom */}

      <a id="scroll-top" href="demo1.html#top" title="Top" role="button"><i className="icon-angle-up"></i></a>

    </footer>
  );
};

export default Footer;