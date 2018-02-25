import React from 'react';


const Footer = () => {

  return (
    <div className="footer-wrap">
      <div className="contact-info">
          <div className="contact-icons">
            <div className="footer-container1">
                <a href="https://www.linkedin.com/in/areejhassan/">
                  <i className="fab fa-linkedin" style={{fontSize: '20px'}}></i>
                </a>
            </div>

            <div className="footer-container1">
              <a href="https://github.com/queenofdexterity">
                <i className="fab fa-github-square" style={{fontSize: '20px'}}></i>
              </a>
            </div>

          </div>

          <div>
            <p className="contact-name">
              Areej
            </p>
          </div>

      </div>

      <div className="contact-info" >
        <div className="contact-icons">
          <div className="footer-container1">
              <a href="https://www.linkedin.com/in/alireza-berenjian/">
                <i className="fab fa-linkedin" style={{fontSize: '20px'}}></i>
              </a>
          </div>

          <div className="footer-container1">
            <a href="https://github.com/aberenjian89">
              <i className="fab fa-github-square" style={{fontSize: '20px'}}></i>
            </a>
          </div>




        </div>

        <div>
          <p className="contact-name">
            Ali
          </p>
        </div>

      </div>

      <div className="contact-info" >
        <div className="contact-icons">
          <div className="footer-container1">
              <a href="https://www.linkedin.com/in/akramazaiez/">
                <i className="fab fa-linkedin" style={{fontSize: '20px'}}></i>
              </a>
          </div>

          <div className="footer-container1">
            <a href="https://github.com/aazaiez">
              <i className="fab fa-github-square" style={{fontSize: '20px'}}></i>
            </a>
          </div>




        </div>

        <div>
          <p className="contact-name">
            Akram
          </p>
        </div>

      </div>

    </div>
  );
};

export default Footer;
