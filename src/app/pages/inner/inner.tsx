import React from 'react'
import  './inner.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    className: string;
    title: String;
    show: (value: boolean) => void;
    visaList: boolean;
    visaListLoader: (value: boolean) => void;
    apiData: any;  // Add this line
    onApiDataReceived: (data: any) => void;
    onSelectClick: (entryData: any) => void; 
  }
  
  
  const Inner: React.FC<Props> = ({
    className,
    title,
    show,
    visaList,
    visaListLoader,
    apiData,
    onApiDataReceived,
    onSelectClick,
  }) => {
    console.log('Props in Inner:', { className, title, visaList, visaListLoader, apiData });
    const location = useLocation();
    const receivedData: any = location.state as any;
    console.log("ye rha:",receivedData)
    useEffect(() => {
      }, [apiData]);
    const handleSelectClick = (entryData) => {
      onSelectClick(entryData)
      
    }
  
    const handleApplyNowClick = () => {
      onSelectClick(apiData[selectedTicket]);
    };
    
    const markup_percentage = localStorage.getItem('markup_percentage')??'1';
  
    const [expandedCardIndex, setExpandedCardIndex] = useState(-1)
  
    const [priceCardIndex, setPriceCardIndex] = useState(-1)
  
    const [selectedTicket, setSelectedTicket] = useState(0);
  
    const [selectedTicketPrice, setSelectedTicketPrice] = useState(0);
  
    const [selectedQuantity, setSelectedQuantity] = useState(0);  
    
    const receivedDataArray = receivedData.dataArray || [];
    
    const handleTicketSelection = (ticketIndex) => {
        setSelectedTicket(ticketIndex);
        const selectedEntry = receivedData.apiData[ticketIndex];  
        const visaFees = selectedEntry.receipt['Visa Fees'] || 0;
        const serviceFees = selectedEntry.receipt['Service Fees'] || 0;
        const markupPercentageString = localStorage.getItem('markup_percentage');
        const markupPercentage = markupPercentageString !== null ? parseFloat(markupPercentageString) : 1;
        const calculatedPrice = Math.ceil((visaFees * (1 + markupPercentage / 100)) + serviceFees);
        const initialPrice = calculatedPrice * selectedQuantity;
        setSelectedTicketPrice(initialPrice);
      };
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
          mobileMenu.classList.toggle('hamburger-open');
        }
      };
      console.log("Received Data:", receivedData);

        
      const [showLoginModal, setShowLoginModal] = useState(false);
      const handleLoginClick = () => setShowLoginModal(true);
      const handleCloseLoginModal = () => setShowLoginModal(false);
      const handleCloseSignUpModal = () => setShowSignUpModal(false);
      const [showSignUpModal, setShowSignUpModal] = useState(false); 
      const handleSignUpClick = () => {
        setShowLoginModal(false);
        setShowSignUpModal(true);
      }

  return (
    <div>
  
  <div id="nav">
            <a href='/' className="part11">
                <img className="logo" src="./media/logos/logo.png" alt="logo" />
            </a>

            <div className="part21">
                {/* <a href="#">About Us</a> */}
                <a href="#">Contact</a>
                {/* Button to open the login modal */}
                <button className="button2" onClick={handleLoginClick}>
                    Login
                </button>
            </div>

            <i className="ri-menu-3-fill hamburger" onClick={toggleMenu}></i>
            <div id="mobile-menu">
                <a href="#">Home</a>
                {/* <a href="#">About Us</a> */}
                <a href="#">Sign up</a>
                <a href="#">Login</a>
            </div>
        </div>

      {showLoginModal && (
        <div className="modal-container">
        <div className="modal-content">
          <span className="close" onClick={handleCloseLoginModal}>
            &times;
          </span>
          <h1>Login</h1>
      
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
      
          <button className="social-login" style={{ backgroundColor: '#327113' }}>
            Login
          </button>
      

          <p style={{ marginTop: '10px', textAlign: 'center' }}>
            Don't have an account? <button style={{background:"none", border:"none"}} className="button2" onClick={handleSignUpClick}>
            Sign up
          </button>
          </p>
        </div>
      </div>
      )}
      {showSignUpModal && (
    <div className="sign-up-modal-container">
        <div className="modal-content">
          <span className="close" onClick={handleCloseSignUpModal}>
            &times;
          </span>
          <h1>Signup</h1>

          <div className="mb-3">
            <label htmlFor="email">Full Name</label>
            <input type="email" className="form-control" id="email" />
          </div>
      
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
      
          <button className="social-login" style={{ backgroundColor: '#327113' }}>
            Signup
          </button>
      
        </div>
    </div>
)}

        <div className="choice-maini">
        <h1>Choose Your Visa Type</h1>
        <div className="choice">
      <div className="ticket-container" id="ticketContainer">
      {receivedData.apiData.map((entry: any, index: number) => {
        return (
            <div
            key={index}
            className={`ticket ${selectedTicket === index ? 'selected' : ''}`}
            onClick={() => handleTicketSelection(index)}
            >   
                <div className="days">
                    <h1 className="days-size">{entry.day}</h1>
                    <span>Days</span>
                </div>
                <div className="ticket-area">
                    <div className="visa-type">TOURIST VISA&nbsp;
                    <svg width="15" height="15" viewBox="0 0 28 23" xmlns="http://www.w3.org/2000/svg">
                        <g transform="rotate(180, 14, 11.5)">
                            <g clip-path="url(#clip0_102_11795)">
                            <path
                                d="M9.83104 19.5355V13.1389C9.83104 12.5967 9.6337 12.0667 9.26398 11.6159C8.89426 11.1651 8.36876 10.8137 7.75393 10.6062C7.13911 10.3987 6.46257 10.3444 5.80988 10.4502C5.15718 10.556 4.55764 10.8171 4.08707 11.2005C3.61651 11.5839 3.29605 12.0723 3.16622 12.6041C3.03639 13.1359 3.10302 13.6871 3.35769 14.188C3.61236 14.6889 4.04363 15.1171 4.59695 15.4183C5.15028 15.7195 5.80082 15.8803 6.4663 15.8803M18.8037 18.6217V8.56993C18.8037 8.02774 19.001 7.49772 19.3707 7.0469C19.7405 6.59608 20.266 6.2447 20.8808 6.03721C21.4956 5.82972 22.1722 5.77543 22.8248 5.88121C23.4775 5.98699 24.0771 6.24808 24.5477 6.63147C25.0182 7.01486 25.3387 7.50333 25.4685 8.03511C25.5983 8.56689 25.5317 9.11809 25.277 9.61902C25.0224 10.1199 24.5911 10.5481 24.0378 10.8493C23.4844 11.1505 22.8339 11.3113 22.1684 11.3113M14.3174 20.4493L14.3174 4.91474C14.3174 4.37254 14.12 3.84252 13.7503 3.3917C13.3806 2.94088 12.8551 2.58951 12.2403 2.38202C11.6254 2.17453 10.9489 2.12024 10.2962 2.22602C9.6435 2.3318 9.04396 2.59289 8.57339 2.97628C8.10283 3.35967 7.78237 3.84814 7.65254 4.37992C7.52271 4.9117 7.58934 5.4629 7.84401 5.96383C8.09868 6.46475 8.52994 6.8929 9.08327 7.19413C9.6366 7.49535 10.2871 7.65613 10.9526 7.65613"
                                stroke="#FFFFFF"
                                stroke-width="2.66667"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            </g>
                            <defs>
                            <clipPath id="clip0_102_11795">
                                <rect
                                width="21.9312"
                                height="26.9179"
                                fill="white"
                                transform="matrix(0 -1 1 0 0.859375 22.2769)"
                                />
                            </clipPath>
                            </defs>
                        </g>
                    </svg>
                    </div>
                    <div className="visa-des">
                        <div className="upper">
                            <div className="travel-from">
                                <p className="from">From</p>
                                <h2 className="country">IND</h2>
                            </div>
                            <div className="svg-area">
                                <svg width="307" height="36" viewBox="0 0 387 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_114_11506)">
                                    <path d="M209.383 13.4072C212.26 13.4072 217.265 15.3947 217.265 17.7935C217.265 20.2607 212.26 22.1797 209.383 22.1797H199.575L191.121 34.235C190.641 34.9135 189.75 35.3384 188.782 35.3384H184.055C183.163 35.3384 182.515 34.6393 182.759 33.9403L186.89 22.1797H178.234L174.6 26.1273C174.346 26.4014 173.947 26.5659 173.523 26.5659H169.993C169.341 26.5659 168.812 26.1342 168.812 25.5448C168.812 25.5173 168.828 25.4282 168.858 25.3392L171.504 17.7935L168.858 10.2478C168.828 10.1587 168.812 10.0696 168.812 9.98049C168.812 9.45277 169.341 9.021 169.993 9.021H173.523C173.947 9.021 174.346 9.18548 174.6 9.45962L178.234 13.4072H186.89L182.759 1.64665C182.515 0.945535 183.163 0.248535 184.055 0.248535H188.782C189.75 0.248535 190.641 0.67023 191.121 1.35332L199.575 13.4072H209.383V13.4072Z" fill="#111111"/>
                                    </g>
                                    <rect x="0.578125" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="222.648" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="113.633" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="57.1016" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="279.176" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="363.969" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="28.8398" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="250.914" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="335.703" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="141.895" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="85.3672" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <rect x="307.441" y="16.697" width="22.8802" height="4.38623" rx="2.19312" fill="black"/>
                                    <defs>
                                    <clipPath id="clip0_114_11506">
                                    <rect width="48.4522" height="35.0899" fill="white" transform="translate(168.812 0.248535)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="travel-to">
                                <p className="from">To</p>
                                <h2 className="country">UAE</h2>
                            </div>
                        </div>
                        <div className="lower">
                            <div className="details">
                                <p>Days of stays</p>
                                <h2>{entry.day} Days</h2>
                            </div>
                            <div className="details">
                                <p>Entry Type</p>
                                <h2>{entry.entryType}</h2>
                            </div>
                            <div className="details">
                                <p>Price</p>
                                <h2>{Math.ceil((entry.receipt['Visa Fees'] ? entry.receipt['Visa Fees'] : 0)*((parseFloat(markup_percentage)?(1+(parseFloat(markup_percentage)/100)):1))) +
                                    (entry.receipt['Service Fees'] ? entry.receipt['Service Fees'] : 0)}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        })}

      </div>
      <div className="apply-card">
          <div className="text-cont">
              <h2><img className="icons" src="/media/assets/vt2.png"/>Length of Stay</h2>
              <p>{receivedData.apiData[selectedTicket].day} Days</p>
          </div>

          <div className="text-cont1">
              <h2 className="tb"><img className="icons" src="/media/assets/vt4.png"/>Total</h2>
              <div className="pb">
                  <p style={{top:"10px"}} className="amount">₹{selectedTicketPrice}</p>
                  <h2 className="tax-des">(includes all government related fees)</h2>
              </div>
          </div>

          <button onClick={handleApplyNowClick}>
              Apply Now
          </button>
      </div>
      
    </div>
    
        </div>
 
        <div className="image-sectioni">
            <div className="img-conti6">
                <img src="/media/assets/mainbg1.jpg" />
            </div>
            <h1 className="hero-text">Travel Made Fun</h1>
        </div>

        <div className="page2i">
            <h1 className="head">Most Popular </h1>
            <div className="conti6">
                <a href="#" className="cards-single">
                    <div className="img-conti6">
                        <img className="imgr" src="./media/assets/turkey.jpg" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Turkey</h1>
                        <span className="rating">
                            
                        </span>

                    </div>
                    <div className="title-2">Tourist Visa</div>
                    <div className="card-info">
                        <ul>
                            <li>Approval Chances 90%</li>
                            <li>Visa within 6 Days</li>
                            <li>Curious Corner</li>
                        </ul>  
                    </div>
                    <div className="card-price">
                        <del className="del">₹88,952</del>
                        <div className="amount">
                            ₹88,952 <span className="per">Per Person</span>
                        </div>
                    </div>
                </a>
                <a href="#" className="cards-single">
                    <div className="img-conti6">
                        <img className="imgr" src="./media/assets/uzbekistan.jpg" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Uzbekistan</h1>
                        <span className="rating">
                            
                        </span>

                    </div>
                    <div className="title-2">Tourist Visa</div>
                    <div className="card-info">
                        <ul>
                            <li>Approval Chances 90%</li>
                            <li>Visa within 6 Days</li>
                            <li>Curious Corner</li>
                        </ul>  
                    </div>
                    <div className="card-price">
                        <del className="del">₹88,952</del>
                        <div className="amount">
                            ₹88,952 <span className="per">Per Person</span>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
 
        <footer className="footer-seci">
            <img className="footer-bg" src="./media/assets/footer.png" alt=""/>
            <div className="mains">
              <div className="logo rowse">
                  <div className="footer-header">
                    <img src="./media/assets/logo3.png" className="manik" alt=""/>
                  </div>
                  <div className="logo-des">
                    <p>Visa24/7 facilitates seamless<br/> Visa online instantly..</p>
                    <div className="icons">
                        <a href="#"><i className="social-icon ri-facebook-fill"></i></a>
                        <a href="#"><i className="social-icon ri-instagram-line"></i></a>
                        <a href="#"><i className="social-icon ri-linkedin-fill"></i></a>
                        <a href="#"><i className="social-icon ri-infinity-fill"></i></a>
                    </div>
                  </div>
              </div>
            
              <div className="office rowse">
                  <div className="footer-header">
                      <h3>Company</h3>
                      </div>                   
                      <div className="link-des">
                      <a href="#" className="footer-links">About</a>
                      <a href="#" className="footer-links">Career</a>
                      <a href="#" className="footer-links">Blog</a>
                      <a href="#" className="footer-links">Pricing</a>
                  </div>
              </div>
            
            
              <div className="link rowse">
                  <div className="footer-header">
                    <h3>Destinations</h3>
                  </div> 
                  <div className="link-des">
                    <a href="#" className="footer-links">Maldives</a>
                    <a href="#" className="footer-links">Los Angeles</a>
                    <a href="#" className="footer-links">Las Vegas</a>
                    <a href="#" className="footer-links">Torronto</a>
                  </div>
              </div>
            
            
              <div className="newsletter rowse">
                  <div className="footer-header">
                    <h3 >Join Our Newsletter</h3>
                  </div>
                  <div className="newsletter-des">
                    <div className="subcribe">
                        <input type="mail" placeholder = "Your email address" required/>
                        <button className="butt">Subscribe</button>
                    </div>
                    <div className="icons">
                        <p>• Will send you weekly updates for your better tour packages</p>
                    </div>
                  </div>
              </div>
            
            </div>
            <div className="copyright">
              <hr/>
              <p>Copyright @ Visa24/7 2023. All Rights Reserved.</p>
            </div>
        </footer>
  
    </div>
  )
}

export default Inner;