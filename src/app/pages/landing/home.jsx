import React from 'react'
import { DatePicker } from 'antd';
import  './home.css'
import './swiper-bundle.min.css'
import { useEffect, useState } from 'react';

const Home = () => {
    const { RangePicker } = DatePicker;

    function onChange(date, dateString) {
    console.log(date, dateString);
    }

    function toggleMenu() {
        var mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.style.display = (mobileMenu.style.display === 'flex') ? 'none' : 'flex';
        mobileMenu.classList.toggle('hamburger-open');
      }
      
  return (
    <>        
        <div id="nav">
            <div className="part21">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
            </div>

            <div className="part11">
                <img className="logo" src="./media/assets/logo2.png" alt="logo" />
            </div>

            <div className="part31">
                <button className='button1'>
                    Sign up
                </button>
                <button className='button2'>
                    Login
                </button >
            </div>
            <i className="ri-menu-3-fill hamburger" onClick={toggleMenu}></i>
            <div id="mobile-menu">
                
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Sign up</a>
                <a href="#">Login</a>
                
            </div>
        </div>        


        <div className="page1">
            <img className="bgimg" src="./media/assets/img1.png"/>
            <h1>
                Getting Visa Was Never<br/> This Easy.
            </h1>
            <div className="search-bar">
                <div className="search-conti">

                    <div className='dropdwon1'>
                        <select
                            className='journey-from'

                        >
                            <option value=''>From...</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                            <option value='AS'>American Samoa</option>
                            <option value='AD'>Andorra</option>
                            <option value='AO'>Angola</option>
                            <option value='AI'>Anguilla</option>
                            <option value='AQ'>Antarctica</option>
                            <option value='AG'>Antigua and Barbuda</option>
                            <option value='AR'>Argentina</option>
                            <option value='AM'>Armenia</option>
                            <option value='AW'>Aruba</option>
                            <option value='AU'>Australia</option>
                            <option value='AT'>Austria</option>
                            <option value='AZ'>Azerbaijan</option>
                            <option value='BS'>Bahamas</option>
                            <option value='BH'>Bahrain</option>
                            <option value='BD'>Bangladesh</option>
                            <option value='BB'>Barbados</option>
                            <option value='BY'>Belarus</option>
                            <option value='BE'>Belgium</option>
                            <option value='BZ'>Belize</option>
                            <option value='BJ'>Benin</option>
                            <option value='BM'>Bermuda</option>
                            <option value='BT'>Bhutan</option>
                            <option value='BO'>Bolivia, Plurinational State of</option>
                            <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                            <option value='BA'>Bosnia and Herzegovina</option>
                            <option value='BW'>Botswana</option>
                            <option value='BV'>Bouvet Island</option>
                            <option value='BR'>Brazil</option>
                            <option value='IO'>British Indian Ocean Territory</option>
                            <option value='BN'>Brunei Darussalam</option>
                            <option value='BG'>Bulgaria</option>
                            <option value='BF'>Burkina Faso</option>
                            <option value='BI'>Burundi</option>
                            <option value='KH'>Cambodia</option>
                            <option value='CM'>Cameroon</option>
                            <option value='CA'>Canada</option>
                            <option value='CV'>Cape Verde</option>
                            <option value='KY'>Cayman Islands</option>
                            <option value='CF'>Central African Republic</option>
                            <option value='TD'>Chad</option>
                            <option value='CL'>Chile</option>
                            <option value='CN'>China</option>
                            <option value='CX'>Christmas Island</option>
                            <option value='CC'>Cocos (Keeling) Islands</option>
                            <option value='CO'>Colombia</option>
                            <option value='KM'>Comoros</option>
                            <option value='CG'>Congo</option>
                            <option value='CD'>Congo, the Democratic Republic of the</option>
                            <option value='CK'>Cook Islands</option>
                            <option value='CR'>Costa Rica</option>
                            <option value='CI'>Côte d'Ivoire</option>
                            <option value='HR'>Croatia</option>
                            <option value='CU'>Cuba</option>
                            <option value='CW'>Curaçao</option>
                            <option value='CY'>Cyprus</option>
                            <option value='CZ'>Czech Republic</option>
                            <option value='DK'>Denmark</option>
                            <option value='DJ'>Djibouti</option>
                            <option value='DM'>Dominica</option>
                            <option value='DO'>Dominican Republic</option>
                            <option value='EC'>Ecuador</option>
                            <option value='EG'>Egypt</option>
                            <option value='SV'>El Salvador</option>
                            <option value='GQ'>Equatorial Guinea</option>
                            <option value='ER'>Eritrea</option>
                            <option value='EE'>Estonia</option>
                            <option value='ET'>Ethiopia</option>
                            <option value='FK'>Falkland Islands (Malvinas)</option>
                            <option value='FO'>Faroe Islands</option>
                            <option value='FJ'>Fiji</option>
                            <option value='FI'>Finland</option>
                            <option value='FR'>France</option>
                            <option value='GF'>French Guiana</option>
                            <option value='PF'>French Polynesia</option>
                            <option value='TF'>French Southern Territories</option>
                            <option value='GA'>Gabon</option>
                            <option value='GM'>Gambia</option>
                            <option value='GE'>Georgia</option>
                            <option value='DE'>Germany</option>
                            <option value='GH'>Ghana</option>
                            <option value='GI'>Gibraltar</option>
                            <option value='GR'>Greece</option>
                            <option value='GL'>Greenland</option>
                            <option value='GD'>Grenada</option>
                            <option value='GP'>Guadeloupe</option>
                            <option value='GU'>Guam</option>
                            <option value='GT'>Guatemala</option>
                            <option value='GG'>Guernsey</option>
                            <option value='GN'>Guinea</option>
                            <option value='GW'>Guinea-Bissau</option>
                            <option value='GY'>Guyana</option>
                            <option value='HT'>Haiti</option>
                            <option value='HM'>Heard Island and McDonald Islands</option>
                            <option value='VA'>Holy See (Vatican City State)</option>
                            <option value='HN'>Honduras</option>
                            <option value='HK'>Hong Kong</option>
                            <option value='HU'>Hungary</option>
                            <option value='IS'>Iceland</option>
                            <option value='IN'>India</option>
                            <option value='ID'>Indonesia</option>
                            <option value='IR'>Iran, Islamic Republic of</option>
                            <option value='IQ'>Iraq</option>
                            <option value='IE'>Ireland</option>
                            <option value='IM'>Isle of Man</option>
                            <option value='IL'>Israel</option>
                            <option value='IT'>Italy</option>
                            <option value='JM'>Jamaica</option>
                            <option value='JP'>Japan</option>
                            <option value='JE'>Jersey</option>
                            <option value='JO'>Jordan</option>
                            <option value='KZ'>Kazakhstan</option>
                            <option value='KE'>Kenya</option>
                            <option value='KI'>Kiribati</option>
                            <option value='KP'>Korea, Democratic People's Republic of</option>
                            <option value='KW'>Kuwait</option>
                            <option value='KG'>Kyrgyzstan</option>
                            <option value='LA'>Lao People's Democratic Republic</option>
                            <option value='LV'>Latvia</option>
                            <option value='LB'>Lebanon</option>
                            <option value='LS'>Lesotho</option>
                            <option value='LR'>Liberia</option>
                            <option value='LY'>Libya</option>
                            <option value='LI'>Liechtenstein</option>
                            <option value='LT'>Lithuania</option>
                            <option value='LU'>Luxembourg</option>
                            <option value='MO'>Macao</option>
                            <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                            <option value='MG'>Madagascar</option>
                            <option value='MW'>Malawi</option>
                            <option value='MY'>Malaysia</option>
                            <option value='MV'>Maldives</option>
                            <option value='ML'>Mali</option>
                            <option value='MT'>Malta</option>
                            <option value='MH'>Marshall Islands</option>
                            <option value='MQ'>Martinique</option>
                            <option value='MR'>Mauritania</option>
                            <option value='MU'>Mauritius</option>
                            <option value='YT'>Mayotte</option>
                            <option value='MX'>Mexico</option>
                            <option value='FM'>Micronesia, Federated States of</option>
                            <option value='MD'>Moldova, Republic of</option>
                            <option value='MC'>Monaco</option>
                            <option value='MN'>Mongolia</option>
                            <option value='ME'>Montenegro</option>
                            <option value='MS'>Montserrat</option>
                            <option value='MA'>Morocco</option>
                            <option value='MZ'>Mozambique</option>
                            <option value='MM'>Myanmar</option>
                            <option value='NA'>Namibia</option>
                            <option value='NR'>Nauru</option>
                            <option value='NP'>Nepal</option>
                            <option value='NL'>Netherlands</option>
                            <option value='NC'>New Caledonia</option>
                            <option value='NZ'>New Zealand</option>
                            <option value='NI'>Nicaragua</option>
                            <option value='NE'>Niger</option>
                            <option value='NG'>Nigeria</option>
                            <option value='NU'>Niue</option>
                            <option value='NF'>Norfolk Island</option>
                            <option value='MP'>Northern Mariana Islands</option>
                            <option value='NO'>Norway</option>
                            <option value='OM'>Oman</option>
                            <option value='PK'>Pakistan</option>
                            <option value='PW'>Palau</option>
                            <option value='PS'>Palestinian Territory, Occupied</option>
                            <option value='PA'>Panama</option>
                            <option value='PG'>Papua New Guinea</option>
                            <option value='PY'>Paraguay</option>
                            <option value='PE'>Peru</option>
                            <option value='PH'>Philippines</option>
                            <option value='PN'>Pitcairn</option>
                            <option value='PL'>Poland</option>
                            <option value='PT'>Portugal</option>
                            <option value='PR'>Puerto Rico</option>
                            <option value='QA'>Qatar</option>
                            <option value='RE'>Réunion</option>
                            <option value='RO'>Romania</option>
                            <option value='RU'>Russian Federation</option>
                            <option value='RW'>Rwanda</option>
                            <option value='BL'>Saint Barthélemy</option>
                            <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value='KN'>Saint Kitts and Nevis</option>
                            <option value='LC'>Saint Lucia</option>
                            <option value='MF'>Saint Martin (French part)</option>
                            <option value='PM'>Saint Pierre and Miquelon</option>
                            <option value='VC'>Saint Vincent and the Grenadines</option>
                            <option value='WS'>Samoa</option>
                            <option value='SM'>San Marino</option>
                            <option value='ST'>Sao Tome and Principe</option>
                            <option value='SA'>Saudi Arabia</option>
                            <option value='SN'>Senegal</option>
                            <option value='RS'>Serbia</option>
                            <option value='SC'>Seychelles</option>
                            <option value='SL'>Sierra Leone</option>
                            <option value='SG'>Singapore</option>
                            <option value='SX'>Sint Maarten (Dutch part)</option>
                            <option value='SK'>Slovakia</option>
                            <option value='SI'>Slovenia</option>
                            <option value='SB'>Solomon Islands</option>
                            <option value='SO'>Somalia</option>
                            <option value='ZA'>South Africa</option>
                            <option value='GS'>South Georgia and the South Sandwich Islands</option>
                            <option value='KR'>South Korea</option>
                            <option value='SS'>South Sudan</option>
                            <option value='ES'>Spain</option>
                            <option value='LK'>Sri Lanka</option>
                            <option value='SD'>Sudan</option>
                            <option value='SR'>Suriname</option>
                            <option value='SJ'>Svalbard and Jan Mayen</option>
                            <option value='SZ'>Swaziland</option>
                            <option value='SE'>Sweden</option>
                            <option value='CH'>Switzerland</option>
                            <option value='SY'>Syrian Arab Republic</option>
                            <option value='TW'>Taiwan, Province of China</option>
                            <option value='TJ'>Tajikistan</option>
                            <option value='TZ'>Tanzania, United Republic of</option>
                            <option value='TH'>Thailand</option>
                            <option value='TL'>Timor-Leste</option>
                            <option value='TG'>Togo</option>
                            <option value='TK'>Tokelau</option>
                            <option value='TO'>Tonga</option>
                            <option value='TT'>Trinidad and Tobago</option>
                            <option value='TN'>Tunisia</option>
                            <option value='TR'>Turkey</option>
                            <option value='TM'>Turkmenistan</option>
                            <option value='TC'>Turks and Caicos Islands</option>
                            <option value='TV'>Tuvalu</option>
                            <option value='UG'>Uganda</option>
                            <option value='UA'>Ukraine</option>
                            <option value='AE'>United Arab Emirates</option>
                            <option value='GB'>United Kingdom</option>
                            <option value='US'>United States</option>
                            <option value='UY'>Uruguay</option>
                            <option value='UZ'>Uzbekistan</option>
                            <option value='VU'>Vanuatu</option>
                            <option value='VE'>Venezuela, Bolivarian Republic of</option>
                            <option value='VN'>Vietnam</option>
                            <option value='VI'>Virgin Islands</option>
                            <option value='WF'>Wallis and Futuna</option>
                            <option value='EH'>Western Sahara</option>
                            <option value='YE'>Yemen</option>
                            <option value='ZM'>Zambia</option>
                            <option value='ZW'>Zimbabwe</option>
                        </select>
                    </div> 
                    <div className='dropdwon2'>
                        <select
                            className='journey-from'

                        >
                            <option value=''>To...</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                            <option value='AS'>American Samoa</option>
                            <option value='AD'>Andorra</option>
                            <option value='AO'>Angola</option>
                            <option value='AI'>Anguilla</option>
                            <option value='AQ'>Antarctica</option>
                            <option value='AG'>Antigua and Barbuda</option>
                            <option value='AR'>Argentina</option>
                            <option value='AM'>Armenia</option>
                            <option value='AW'>Aruba</option>
                            <option value='AU'>Australia</option>
                            <option value='AT'>Austria</option>
                            <option value='AZ'>Azerbaijan</option>
                            <option value='BS'>Bahamas</option>
                            <option value='BH'>Bahrain</option>
                            <option value='BD'>Bangladesh</option>
                            <option value='BB'>Barbados</option>
                            <option value='BY'>Belarus</option>
                            <option value='BE'>Belgium</option>
                            <option value='BZ'>Belize</option>
                            <option value='BJ'>Benin</option>
                            <option value='BM'>Bermuda</option>
                            <option value='BT'>Bhutan</option>
                            <option value='BO'>Bolivia, Plurinational State of</option>
                            <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                            <option value='BA'>Bosnia and Herzegovina</option>
                            <option value='BW'>Botswana</option>
                            <option value='BV'>Bouvet Island</option>
                            <option value='BR'>Brazil</option>
                            <option value='IO'>British Indian Ocean Territory</option>
                            <option value='BN'>Brunei Darussalam</option>
                            <option value='BG'>Bulgaria</option>
                            <option value='BF'>Burkina Faso</option>
                            <option value='BI'>Burundi</option>
                            <option value='KH'>Cambodia</option>
                            <option value='CM'>Cameroon</option>
                            <option value='CA'>Canada</option>
                            <option value='CV'>Cape Verde</option>
                            <option value='KY'>Cayman Islands</option>
                            <option value='CF'>Central African Republic</option>
                            <option value='TD'>Chad</option>
                            <option value='CL'>Chile</option>
                            <option value='CN'>China</option>
                            <option value='CX'>Christmas Island</option>
                            <option value='CC'>Cocos (Keeling) Islands</option>
                            <option value='CO'>Colombia</option>
                            <option value='KM'>Comoros</option>
                            <option value='CG'>Congo</option>
                            <option value='CD'>Congo, the Democratic Republic of the</option>
                            <option value='CK'>Cook Islands</option>
                            <option value='CR'>Costa Rica</option>
                            <option value='CI'>Côte d'Ivoire</option>
                            <option value='HR'>Croatia</option>
                            <option value='CU'>Cuba</option>
                            <option value='CW'>Curaçao</option>
                            <option value='CY'>Cyprus</option>
                            <option value='CZ'>Czech Republic</option>
                            <option value='DK'>Denmark</option>
                            <option value='DJ'>Djibouti</option>
                            <option value='DM'>Dominica</option>
                            <option value='DO'>Dominican Republic</option>
                            <option value='EC'>Ecuador</option>
                            <option value='EG'>Egypt</option>
                            <option value='SV'>El Salvador</option>
                            <option value='GQ'>Equatorial Guinea</option>
                            <option value='ER'>Eritrea</option>
                            <option value='EE'>Estonia</option>
                            <option value='ET'>Ethiopia</option>
                            <option value='FK'>Falkland Islands (Malvinas)</option>
                            <option value='FO'>Faroe Islands</option>
                            <option value='FJ'>Fiji</option>
                            <option value='FI'>Finland</option>
                            <option value='FR'>France</option>
                            <option value='GF'>French Guiana</option>
                            <option value='PF'>French Polynesia</option>
                            <option value='TF'>French Southern Territories</option>
                            <option value='GA'>Gabon</option>
                            <option value='GM'>Gambia</option>
                            <option value='GE'>Georgia</option>
                            <option value='DE'>Germany</option>
                            <option value='GH'>Ghana</option>
                            <option value='GI'>Gibraltar</option>
                            <option value='GR'>Greece</option>
                            <option value='GL'>Greenland</option>
                            <option value='GD'>Grenada</option>
                            <option value='GP'>Guadeloupe</option>
                            <option value='GU'>Guam</option>
                            <option value='GT'>Guatemala</option>
                            <option value='GG'>Guernsey</option>
                            <option value='GN'>Guinea</option>
                            <option value='GW'>Guinea-Bissau</option>
                            <option value='GY'>Guyana</option>
                            <option value='HT'>Haiti</option>
                            <option value='HM'>Heard Island and McDonald Islands</option>
                            <option value='VA'>Holy See (Vatican City State)</option>
                            <option value='HN'>Honduras</option>
                            <option value='HK'>Hong Kong</option>
                            <option value='HU'>Hungary</option>
                            <option value='IS'>Iceland</option>
                            <option value='IN'>India</option>
                            <option value='ID'>Indonesia</option>
                            <option value='IR'>Iran, Islamic Republic of</option>
                            <option value='IQ'>Iraq</option>
                            <option value='IE'>Ireland</option>
                            <option value='IM'>Isle of Man</option>
                            <option value='IL'>Israel</option>
                            <option value='IT'>Italy</option>
                            <option value='JM'>Jamaica</option>
                            <option value='JP'>Japan</option>
                            <option value='JE'>Jersey</option>
                            <option value='JO'>Jordan</option>
                            <option value='KZ'>Kazakhstan</option>
                            <option value='KE'>Kenya</option>
                            <option value='KI'>Kiribati</option>
                            <option value='KP'>Korea, Democratic People's Republic of</option>
                            <option value='KW'>Kuwait</option>
                            <option value='KG'>Kyrgyzstan</option>
                            <option value='LA'>Lao People's Democratic Republic</option>
                            <option value='LV'>Latvia</option>
                            <option value='LB'>Lebanon</option>
                            <option value='LS'>Lesotho</option>
                            <option value='LR'>Liberia</option>
                            <option value='LY'>Libya</option>
                            <option value='LI'>Liechtenstein</option>
                            <option value='LT'>Lithuania</option>
                            <option value='LU'>Luxembourg</option>
                            <option value='MO'>Macao</option>
                            <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                            <option value='MG'>Madagascar</option>
                            <option value='MW'>Malawi</option>
                            <option value='MY'>Malaysia</option>
                            <option value='MV'>Maldives</option>
                            <option value='ML'>Mali</option>
                            <option value='MT'>Malta</option>
                            <option value='MH'>Marshall Islands</option>
                            <option value='MQ'>Martinique</option>
                            <option value='MR'>Mauritania</option>
                            <option value='MU'>Mauritius</option>
                            <option value='YT'>Mayotte</option>
                            <option value='MX'>Mexico</option>
                            <option value='FM'>Micronesia, Federated States of</option>
                            <option value='MD'>Moldova, Republic of</option>
                            <option value='MC'>Monaco</option>
                            <option value='MN'>Mongolia</option>
                            <option value='ME'>Montenegro</option>
                            <option value='MS'>Montserrat</option>
                            <option value='MA'>Morocco</option>
                            <option value='MZ'>Mozambique</option>
                            <option value='MM'>Myanmar</option>
                            <option value='NA'>Namibia</option>
                            <option value='NR'>Nauru</option>
                            <option value='NP'>Nepal</option>
                            <option value='NL'>Netherlands</option>
                            <option value='NC'>New Caledonia</option>
                            <option value='NZ'>New Zealand</option>
                            <option value='NI'>Nicaragua</option>
                            <option value='NE'>Niger</option>
                            <option value='NG'>Nigeria</option>
                            <option value='NU'>Niue</option>
                            <option value='NF'>Norfolk Island</option>
                            <option value='MP'>Northern Mariana Islands</option>
                            <option value='NO'>Norway</option>
                            <option value='OM'>Oman</option>
                            <option value='PK'>Pakistan</option>
                            <option value='PW'>Palau</option>
                            <option value='PS'>Palestinian Territory, Occupied</option>
                            <option value='PA'>Panama</option>
                            <option value='PG'>Papua New Guinea</option>
                            <option value='PY'>Paraguay</option>
                            <option value='PE'>Peru</option>
                            <option value='PH'>Philippines</option>
                            <option value='PN'>Pitcairn</option>
                            <option value='PL'>Poland</option>
                            <option value='PT'>Portugal</option>
                            <option value='PR'>Puerto Rico</option>
                            <option value='QA'>Qatar</option>
                            <option value='RE'>Réunion</option>
                            <option value='RO'>Romania</option>
                            <option value='RU'>Russian Federation</option>
                            <option value='RW'>Rwanda</option>
                            <option value='BL'>Saint Barthélemy</option>
                            <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value='KN'>Saint Kitts and Nevis</option>
                            <option value='LC'>Saint Lucia</option>
                            <option value='MF'>Saint Martin (French part)</option>
                            <option value='PM'>Saint Pierre and Miquelon</option>
                            <option value='VC'>Saint Vincent and the Grenadines</option>
                            <option value='WS'>Samoa</option>
                            <option value='SM'>San Marino</option>
                            <option value='ST'>Sao Tome and Principe</option>
                            <option value='SA'>Saudi Arabia</option>
                            <option value='SN'>Senegal</option>
                            <option value='RS'>Serbia</option>
                            <option value='SC'>Seychelles</option>
                            <option value='SL'>Sierra Leone</option>
                            <option value='SG'>Singapore</option>
                            <option value='SX'>Sint Maarten (Dutch part)</option>
                            <option value='SK'>Slovakia</option>
                            <option value='SI'>Slovenia</option>
                            <option value='SB'>Solomon Islands</option>
                            <option value='SO'>Somalia</option>
                            <option value='ZA'>South Africa</option>
                            <option value='GS'>South Georgia and the South Sandwich Islands</option>
                            <option value='KR'>South Korea</option>
                            <option value='SS'>South Sudan</option>
                            <option value='ES'>Spain</option>
                            <option value='LK'>Sri Lanka</option>
                            <option value='SD'>Sudan</option>
                            <option value='SR'>Suriname</option>
                            <option value='SJ'>Svalbard and Jan Mayen</option>
                            <option value='SZ'>Swaziland</option>
                            <option value='SE'>Sweden</option>
                            <option value='CH'>Switzerland</option>
                            <option value='SY'>Syrian Arab Republic</option>
                            <option value='TW'>Taiwan, Province of China</option>
                            <option value='TJ'>Tajikistan</option>
                            <option value='TZ'>Tanzania, United Republic of</option>
                            <option value='TH'>Thailand</option>
                            <option value='TL'>Timor-Leste</option>
                            <option value='TG'>Togo</option>
                            <option value='TK'>Tokelau</option>
                            <option value='TO'>Tonga</option>
                            <option value='TT'>Trinidad and Tobago</option>
                            <option value='TN'>Tunisia</option>
                            <option value='TR'>Turkey</option>
                            <option value='TM'>Turkmenistan</option>
                            <option value='TC'>Turks and Caicos Islands</option>
                            <option value='TV'>Tuvalu</option>
                            <option value='UG'>Uganda</option>
                            <option value='UA'>Ukraine</option>
                            <option value='AE'>United Arab Emirates</option>
                            <option value='GB'>United Kingdom</option>
                            <option value='US'>United States</option>
                            <option value='UY'>Uruguay</option>
                            <option value='UZ'>Uzbekistan</option>
                            <option value='VU'>Vanuatu</option>
                            <option value='VE'>Venezuela, Bolivarian Republic of</option>
                            <option value='VN'>Vietnam</option>
                            <option value='VI'>Virgin Islands</option>
                            <option value='WF'>Wallis and Futuna</option>
                            <option value='EH'>Western Sahara</option>
                            <option value='YE'>Yemen</option>
                            <option value='ZM'>Zambia</option>
                            <option value='ZW'>Zimbabwe</option>
                        </select>
                    </div>

                    <RangePicker onChange={onChange}
                    style={{
                            
                        
                    }} />
                    <button onclick="search()">Search</button>
                </div>
            </div>

            <div className="search-bar1">
                <div className="search-conti1">
                    <input type="text" id="journey-from" placeholder="From"/>
                    <input type="text" id="journey-to" placeholder="To"/>
                    <input type="text" className="datepicker" id="datepicker5" placeholder="Boarding Date"/>
                    <input type="text" className="datepicker" id="datepicker6" placeholder="Returning Date"/>
                    <button onclick="search()">Search</button>
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


        <div className="page2">
            <h1 className="head">Premium Offers In Premium Destinations </h1>
            <div className="conti">
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
            </div>
            <div className="conti">
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
            </div>
            <div className="conti">
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
                <a href="/inner" className="cards-single">
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
                </a>
            </div>
        </div>


        <div className="page3">
            <img className="img-service" src="./media/assets/contact.png" />
            
            <div className="services">
                <h1 className="service-head">Why Choose Us</h1>
                <p className="service-para">Enjoy different experiences in every place you visit and<br/> discover new and affordable adventures of course.</p>
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

                <a className="cta" href="#">Get Yours Now <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>


        <div className="page4">
            <img className="testimonial-bg" src="/media/assets/testimonial.png" alt=""/>
            <div className="testimonial-front">
                <h2>PROMOTION</h2>
                <h1>See What Our Clients Say<br/> About Us</h1>
            </div>
            <div className="testimonial mySwiper">
                <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                    <img src="/media/assets/img1.jpg" alt="" className="image" />
                    <p><span style={{position:' absolute', top:'60px', left:'70px'}}><svg width="62" height="48" viewBox="0 0 62 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.65858 43.18C2.13942 39.4422 0.25 35.2499 0.25 28.4542C0.25 16.4958 8.64475 5.77777 20.8525 0.478516L23.9036 5.18668C12.509 11.3503 10.2813 19.3488 9.393 24.3918C11.2278 23.4419 13.6297 23.1105 15.9838 23.3292C22.1474 23.8998 27.0059 28.9598 27.0059 35.2499C27.0059 38.4215 25.746 41.4631 23.5034 43.7058C21.2608 45.9484 18.2191 47.2083 15.0476 47.2083C13.2937 47.1929 11.5603 46.8289 9.94842 46.1373C8.33652 45.4458 6.87829 44.4405 5.65858 43.18ZM39.8253 43.18C36.3061 39.4422 34.4167 35.2499 34.4167 28.4542C34.4167 16.4958 42.8114 5.77777 55.0192 0.478516L58.0703 5.18668C46.6757 11.3503 44.448 19.3488 43.5597 24.3918C45.3944 23.4419 47.7963 23.1105 50.1504 23.3292C56.3141 23.8998 61.1726 28.9598 61.1726 35.2499C61.1726 38.4215 59.9127 41.4631 57.6701 43.7058C55.4274 45.9484 52.3858 47.2083 49.2142 47.2083C47.4603 47.1929 45.727 46.8289 44.1151 46.1373C42.5032 45.4458 41.045 44.4405 39.8253 43.18Z" fill="black" fill-opacity="0.19"/>
                    </svg></span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    saepe provident dolorem a quaerat quo error facere nihil deleniti
                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                    doloremque deserunt eum nemo. <span style={{top: '-4px', position:' relative'}}><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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


        <footer className="footer-sec">
            <img className="footer-bg" src="./media/assets/footer.png" alt=""/>
            <div className="mains">
            <div className="logo rowsa">
                <div className="footer-header">
                <img src="./media/assets/logo2.png" className="manik" alt=""/>
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
            <hr/>
                <p>Copyright @ Visa24/7 2023. All Rights Reserved.</p>
            </div>
        </footer>
        
    </>
  )
}

export default Home;