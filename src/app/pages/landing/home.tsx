import React, { useState } from 'react';
import { DatePicker } from 'antd';
import './home.css';
import './swiper-bundle.min.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeApply from '../../components/HomeApply';
import axiosInstance from '../../helpers/axiosInstance';
import Loader from '../../components/Loader';
import { VisaTable } from '../../components/VisaTable';

type Props = {
    className: string;
    title: string;
    show: (value: boolean) => void;
    visaList: boolean;
    visaListLoader: (value: boolean) => void;
    apiData: any;
    onSelectClick: (entryData: any) => void;
  };
  
  const Home: React.FC<Props> = ({
    className,
    title,
    show,
    visaList,
    visaListLoader,
    apiData,
    onSelectClick,
  }) => {
    const navigate = useNavigate();
  
    const [apiDataState, setApiData] = useState(null);
    const [visaListState, setVisaList] = useState(false);
    const [visaListLoaderState, setVisalistLoader] = useState(false);
  
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
  
    const toggleMenu = () => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        mobileMenu.classList.toggle('hamburger-open');
      }
    };
  
    const search = () => {
      console.log('clicked!');
    };
  
    const handleApiDataReceived = (data) => {
        setApiData(data);
        if (data && data.visaList) {
          setVisaList(data.visaList);
        }
        setVisalistLoader(true);
      
        // Log the data before navigating
        console.log('Data before navigating:', data);
      
        // Navigate to Inner component
        navigate('/inner', { state: { apiData: data } });
      };
  

  return (
    <>        
        <div id="nav">
            <div className="part21">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
            </div>

            <div className="part11">
                <img className="logo" src="./media/logos/logo.png" alt="logo" />
            </div>

            <div className="part31">
                <button className='button2'>
                    Login
                </button>
                <button className='button1'>
                    Sign up
                </button>
            </div>
            <i className="ri-menu-3-fill hamburger" onClick={toggleMenu}></i>
            <div id="mobile-menu">
                
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Sign up</a>
                <a href="#">Login</a>
                
            </div>
        </div>        


        <div className="page1h">
            <img className="bgimg" src="./media/assets/img1.png"/>
            <h1>
                Getting Visa Was Never<br/> This Easy.
            </h1>
            <div className="search-bar">
                <div className="search-conti">
                <HomeApply
                  show={(value) => setVisaList(value)}
                  visaList={visaList}
                  visaListLoader={setVisalistLoader}
                  onApiDataReceived={handleApiDataReceived}
                />
                </div>
            </div>

            <div className="search-bar1">
                <div className="search-conti1">
                    <input type="text" id="journey-from" placeholder="From"/>
                    <input type="text" id="journey-to" placeholder="To"/>
                    <input type="text" className="datepicker" id="datepicker5" placeholder="Boarding Date"/>
                    <input type="text" className="datepicker" id="datepicker6" placeholder="Returning Date"/>
                    <button onClick={search}>Search</button>
                </div>
            </div>
        </div>


        <div className="vacation" id="vacation">
            <h1>Top vacation Destinations</h1>
            <div className="cards">
                <div className="card-vac">
                    <img src="./media/assets/c2.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Bali, Indonesia</h1>
                </div>
                <div className="card-vac">
                    <img src="./media/assets/c3.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Kerry, Ireland</h1>
                </div>
                <div className="card-vac">
                    <img src="./media/assets/c4.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Sydney, Australia</h1>
                </div>
                <div className="card-vac">
                    <img src="./media/assets/c2.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Bali, Indonesia</h1>
                </div>
                <div className="card-vac">
                    <img src="./media/assets/c3.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Kerry, Ireland</h1>
                </div>
                <div className="card-vac">
                    <img src="./media/assets/c4.png" />
                    <div className="gradient-layer"></div>
                    <h1 className="vac-title">Sydney, Australia</h1>
                </div>
            </div>
        </div>


        <div className="page2h">
            <h1 className="head">Premium Offers In Premium Destinations </h1>
            <div className="conti">
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Island</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd3.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Maldives</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd4.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Mauritius</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Islands</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
            </div>
            <div className="conti">
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Island</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd3.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Maldives</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd4.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Mauritius</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Islands</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
            </div>
            <div className="conti">
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Island</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd3.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Maldives</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd4.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Mauritius</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd1.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Havelock</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
                <Link to="/inner" className="cards-single">
                    <div className="img-conti">
                        <img className="imgr" src="./media/assets/cd2.png" alt="" />
                    </div>
                    <div className="title">
                        <h1 className="heading">Whitsunday Islands</h1>
                        <span className="rating">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0318 8.38835L14.5745 7.59522L12.1349 2.64945C12.0683 2.51403 11.9586 2.40442 11.8232 2.33778C11.4836 2.17013 11.0709 2.30984 10.9011 2.64945L8.46157 7.59522L3.00424 8.38835C2.85379 8.40984 2.71622 8.48077 2.6109 8.58824C2.48358 8.71911 2.41341 8.89517 2.41583 9.07775C2.41825 9.26032 2.49305 9.43447 2.6238 9.56192L6.57225 13.4115L5.63941 18.8473C5.61753 18.9738 5.63153 19.1038 5.6798 19.2227C5.72807 19.3416 5.8087 19.4446 5.91253 19.52C6.01636 19.5954 6.13924 19.6403 6.26725 19.6494C6.39525 19.6585 6.52325 19.6316 6.63673 19.5717L11.518 17.0053L16.3993 19.5717C16.5326 19.6426 16.6873 19.6662 16.8356 19.6405C17.2096 19.576 17.4611 19.2213 17.3966 18.8473L16.4638 13.4115L20.4122 9.56192C20.5197 9.4566 20.5906 9.31904 20.6121 9.16858C20.6702 8.79243 20.4079 8.44423 20.0318 8.38835Z" fill="black"/>
                            </svg>
                            4.7
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
                </Link>
            </div>
        </div>


        <div className="page3h">
            <img className="img-service" src="./media/assets/contact.png" />
            
            <div className="services">
                <h1 className="service-head">Why Choose Us</h1>
                <p className="service-para">Enjoy different experiences in every place you visit and discover<br/> new and affordable adventures of course.</p>
                <div className="service-conti2">
                    <img className="inoc" src="./media/assets/co1.png" alt=""/>
                    <div className="service-text">
                        <h2>On-Time Visa Approval</h2>
                        <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
                    </div>
                </div>
                <div className="service-conti2">
                    <img className="inoc" src="./media/assets/co2.png" alt=""/>
                    <div className="service-text">
                        <h2>90% Approval Rate</h2>
                        <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
                    </div>
                </div>
                <div className="service-conti2">
                    <img className="inoc" src="./media/assets/co3.png" alt=""/>
                    <div className="service-text">
                        <h2>Best Price</h2>
                        <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
                    </div>
                </div>

                <button className='service-btn'>
                    Search for Packages
                </button>
            </div>
        </div>


        <div className="page4h">
            <img className="testimonial-bg" src="/media/assets/testimonial.png" alt=""/>
            <div className="testimonial-front">
                <h2>PROMOTION</h2>
                <h1>See What Our Clients Say<br/> About Us</h1>
            </div>
            <div className="testimonial mySwiper">
                <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                    <img src="/media/assets/img1.jpg" alt="" className="image" />
                    <p><span style={{position:'absolute', top:'60px', left:'70px'}}><svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65858 43.18C2.13942 39.4422 0.25 35.2499 0.25 28.4542C0.25 16.4958 8.64475 5.77777 20.8525 0.478516L23.9036 5.18668C12.509 11.3503 10.2813 19.3488 9.393 24.3918C11.2278 23.4419 13.6297 23.1105 15.9838 23.3292C22.1474 23.8998 27.0059 28.9598 27.0059 35.2499C27.0059 38.4215 25.746 41.4631 23.5034 43.7058C21.2608 45.9484 18.2191 47.2083 15.0476 47.2083C13.2937 47.1929 11.5603 46.8289 9.94842 46.1373C8.33652 45.4458 6.87829 44.4405 5.65858 43.18ZM39.8253 43.18C36.3061 39.4422 34.4167 35.2499 34.4167 28.4542C34.4167 16.4958 42.8114 5.77777 55.0192 0.478516L58.0703 5.18668C46.6757 11.3503 44.448 19.3488 43.5597 24.3918C45.3944 23.4419 47.7963 23.1105 50.1504 23.3292C56.3141 23.8998 61.1726 28.9598 61.1726 35.2499C61.1726 38.4215 59.9127 41.4631 57.6701 43.7058C55.4274 45.9484 52.3858 47.2083 49.2142 47.2083C47.4603 47.1929 45.727 46.8289 44.1151 46.1373C42.5032 45.4458 41.045 44.4405 39.8253 43.18Z" fill="black" fill-opacity="0.19"/>
                    </svg></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    saepe provident dolorem a quaerat quo error facere nihil deleniti
                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                    doloremque deserunt eum nemo. <span style={{top: '-4px', position:'relative'}}><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7085 1.33889C9.2235 1.88589 9.5 2.49939 9.5 3.49389C9.5 5.24389 8.2715 6.81239 6.485 7.58789L6.0385 6.89889C7.706 5.99689 8.032 4.82639 8.162 4.08839C7.8935 4.22739 7.542 4.27589 7.1975 4.24389C6.2955 4.16039 5.5845 3.41989 5.5845 2.49939C5.5845 2.03526 5.76887 1.59014 6.09706 1.26195C6.42525 0.933764 6.87037 0.74939 7.3345 0.74939C7.59117 0.751633 7.84483 0.804907 8.08072 0.906112C8.31661 1.00732 8.53001 1.15443 8.7085 1.33889ZM3.7085 1.33889C4.2235 1.88589 4.5 2.49939 4.5 3.49389C4.5 5.24389 3.2715 6.81239 1.485 7.58789L1.0385 6.89889C2.706 5.99689 3.032 4.82639 3.162 4.08839C2.8935 4.22739 2.542 4.27589 2.1975 4.24389C1.2955 4.16039 0.5845 3.41989 0.5845 2.49939C0.5845 2.03526 0.768874 1.59014 1.09706 1.26195C1.42525 0.933765 1.87037 0.74939 2.3345 0.74939C2.59117 0.751634 2.84483 0.804908 3.08072 0.906112C3.31661 1.00732 3.53001 1.15443 3.7085 1.33889Z" fill="black"/>
                        </svg></span>
                    </p>
        
                    <div className="details">
                    <span className="name">Marnie Lotter - Developer</span>
                    </div>
        
                </div>
                <div className="slide swiper-slide">
                    <img src="/media/assets/img2.jpg" alt="" className="image" />
                    <p><span style={{position: 'absolute', top:'50px', left:'90px'}}><svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65858 43.18C2.13942 39.4422 0.25 35.2499 0.25 28.4542C0.25 16.4958 8.64475 5.77777 20.8525 0.478516L23.9036 5.18668C12.509 11.3503 10.2813 19.3488 9.393 24.3918C11.2278 23.4419 13.6297 23.1105 15.9838 23.3292C22.1474 23.8998 27.0059 28.9598 27.0059 35.2499C27.0059 38.4215 25.746 41.4631 23.5034 43.7058C21.2608 45.9484 18.2191 47.2083 15.0476 47.2083C13.2937 47.1929 11.5603 46.8289 9.94842 46.1373C8.33652 45.4458 6.87829 44.4405 5.65858 43.18ZM39.8253 43.18C36.3061 39.4422 34.4167 35.2499 34.4167 28.4542C34.4167 16.4958 42.8114 5.77777 55.0192 0.478516L58.0703 5.18668C46.6757 11.3503 44.448 19.3488 43.5597 24.3918C45.3944 23.4419 47.7963 23.1105 50.1504 23.3292C56.3141 23.8998 61.1726 28.9598 61.1726 35.2499C61.1726 38.4215 59.9127 41.4631 57.6701 43.7058C55.4274 45.9484 52.3858 47.2083 49.2142 47.2083C47.4603 47.1929 45.727 46.8289 44.1151 46.1373C42.5032 45.4458 41.045 44.4405 39.8253 43.18Z" fill="black" fill-opacity="0.19"/>
                    </svg></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    saepe provident dolorem a quaerat quo error facere nihil deleniti
                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                    doloremque deserunt eum nemo.<span style={{top: '-4px', position: 'relative'}}><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7085 1.33889C9.2235 1.88589 9.5 2.49939 9.5 3.49389C9.5 5.24389 8.2715 6.81239 6.485 7.58789L6.0385 6.89889C7.706 5.99689 8.032 4.82639 8.162 4.08839C7.8935 4.22739 7.542 4.27589 7.1975 4.24389C6.2955 4.16039 5.5845 3.41989 5.5845 2.49939C5.5845 2.03526 5.76887 1.59014 6.09706 1.26195C6.42525 0.933764 6.87037 0.74939 7.3345 0.74939C7.59117 0.751633 7.84483 0.804907 8.08072 0.906112C8.31661 1.00732 8.53001 1.15443 8.7085 1.33889ZM3.7085 1.33889C4.2235 1.88589 4.5 2.49939 4.5 3.49389C4.5 5.24389 3.2715 6.81239 1.485 7.58789L1.0385 6.89889C2.706 5.99689 3.032 4.82639 3.162 4.08839C2.8935 4.22739 2.542 4.27589 2.1975 4.24389C1.2955 4.16039 0.5845 3.41989 0.5845 2.49939C0.5845 2.03526 0.768874 1.59014 1.09706 1.26195C1.42525 0.933765 1.87037 0.74939 2.3345 0.74939C2.59117 0.751634 2.84483 0.804908 3.08072 0.906112C3.31661 1.00732 3.53001 1.15443 3.7085 1.33889Z" fill="black"/>
                        </svg></span>
                    </p>
                    <div className="details">
                    <span className="name">Marnie Lotter - Developer</span>
        
                    </div>
                </div>
                <div className="slide swiper-slide">
                    <img src="/media/assets/img3.jpg" alt="" className="image" />
                    <p><span style={{position: 'absolute', top:'60px', left:'70px'}}><svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65858 43.18C2.13942 39.4422 0.25 35.2499 0.25 28.4542C0.25 16.4958 8.64475 5.77777 20.8525 0.478516L23.9036 5.18668C12.509 11.3503 10.2813 19.3488 9.393 24.3918C11.2278 23.4419 13.6297 23.1105 15.9838 23.3292C22.1474 23.8998 27.0059 28.9598 27.0059 35.2499C27.0059 38.4215 25.746 41.4631 23.5034 43.7058C21.2608 45.9484 18.2191 47.2083 15.0476 47.2083C13.2937 47.1929 11.5603 46.8289 9.94842 46.1373C8.33652 45.4458 6.87829 44.4405 5.65858 43.18ZM39.8253 43.18C36.3061 39.4422 34.4167 35.2499 34.4167 28.4542C34.4167 16.4958 42.8114 5.77777 55.0192 0.478516L58.0703 5.18668C46.6757 11.3503 44.448 19.3488 43.5597 24.3918C45.3944 23.4419 47.7963 23.1105 50.1504 23.3292C56.3141 23.8998 61.1726 28.9598 61.1726 35.2499C61.1726 38.4215 59.9127 41.4631 57.6701 43.7058C55.4274 45.9484 52.3858 47.2083 49.2142 47.2083C47.4603 47.1929 45.727 46.8289 44.1151 46.1373C42.5032 45.4458 41.045 44.4405 39.8253 43.18Z" fill="black" fill-opacity="0.19"/>
                    </svg></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    saepe provident dolorem a quaerat quo error facere nihil deleniti
                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                    doloremque deserunt eum nemo.<span style={{top: '-4px', position: 'relative'}}><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7085 1.33889C9.2235 1.88589 9.5 2.49939 9.5 3.49389C9.5 5.24389 8.2715 6.81239 6.485 7.58789L6.0385 6.89889C7.706 5.99689 8.032 4.82639 8.162 4.08839C7.8935 4.22739 7.542 4.27589 7.1975 4.24389C6.2955 4.16039 5.5845 3.41989 5.5845 2.49939C5.5845 2.03526 5.76887 1.59014 6.09706 1.26195C6.42525 0.933764 6.87037 0.74939 7.3345 0.74939C7.59117 0.751633 7.84483 0.804907 8.08072 0.906112C8.31661 1.00732 8.53001 1.15443 8.7085 1.33889ZM3.7085 1.33889C4.2235 1.88589 4.5 2.49939 4.5 3.49389C4.5 5.24389 3.2715 6.81239 1.485 7.58789L1.0385 6.89889C2.706 5.99689 3.032 4.82639 3.162 4.08839C2.8935 4.22739 2.542 4.27589 2.1975 4.24389C1.2955 4.16039 0.5845 3.41989 0.5845 2.49939C0.5845 2.03526 0.768874 1.59014 1.09706 1.26195C1.42525 0.933765 1.87037 0.74939 2.3345 0.74939C2.59117 0.751634 2.84483 0.804908 3.08072 0.906112C3.31661 1.00732 3.53001 1.15443 3.7085 1.33889Z" fill="black"/>
                        </svg></span>
                    </p>
                    <div className="details">
                    <span className="name">Marnie Lotter - Developer</span>
                    </div>
                </div>
                </div>
                <div className="swiper-button-next nav-btn"></div>
                <div className="swiper-button-prev nav-btn"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>


        <footer className="footer-sech">
            <img className="footer-bg" src="./media/assets/footer.png" alt=""/>
            <div className="mains">
            <div className="logo rowsa">
                <div className="footer-header">
                <img src="./media/logos/logo.png" className="manik" alt=""/>
                </div>
                <div className="logo-des">
                <p style={{color:"rgba(50, 113, 19, 1)"}}>Visa247 facilitates seamless<br/> Visa online instantly..</p>
                <div className="icons">
                    <a href="#"><i className="social-icon ri-facebook-fill"></i></a>
                    <a href="#"><i className="social-icon ri-instagram-line"></i></a>
                    <a href="#"><i className="social-icon ri-linkedin-fill"></i></a>
                    <a href="#"><i className="social-icon ri-infinity-fill"></i></a>
                </div>
                </div>
            </div>
            
            <div className="office rowsa">
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
            
            
            <div className="link rowsa">
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
            
            
            <div className="newsletter rowsa">
                <div className="footer-header">
                <h3>Join Our Newsletter</h3>
                </div>
                <div className="newsletter-des">
                <div className="subcribe">
                    <input type="mail" placeholder = "Your email address" required/>
                    <button className="butt">Subscribe</button>
                </div>
                <div className="icons">
                    <p style={{fontSize: '15px'}}>• Will send you weekly updates for your better tour packages</p>
                </div>
                </div>
            </div>
            
            
            </div>
            <div className="copyright">
            <hr className='divider'/>
                <p>Copyright @ Visa24/7 2023. All Rights Reserved.</p>
            </div>
        </footer>
        
    </>
  )
}

export default Home;