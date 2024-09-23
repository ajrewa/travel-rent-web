import React from 'react';
import "./Hbanner.css"
import HbannerData from '../../Assets/DataSets/BannerData';

const BannerSection = () => {
  return (
    <div className="banner-section">
      {HbannerData.map((item, index) => (
        <div className="banner-container" key={index}>
          <div className="icon-container">
            {item.icon}
          </div>
          <div className="description-container">
            {item.name_}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSection;


{/*import React from 'react';
import './Hbanner.css'; 
import HbannerData from "../../Assets/BannerData"
const Hbanner = () => {
  return (
    <div id="banner">
          {HbannerData.map((banner) => (
            <div className="banner-items" key={banner.id}>
              <div className="Hback2">
              {banner.icon}
              </div>
              <p className="Hback">{banner.name_}</p>
            </div>
          ))}
      </div>
  );
};

export default Hbanner;



import { LiaShippingFastSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMapShare } from "react-icons/tb";
import { MdOutlineCarRental } from "react-icons/md";


const Hbanner = () => {
  return (
    <div id="banner">
      <div id="banner1">
        <div id="banner-items">
          <div className="banner-items">
             <div className="Hback">""we offer complimentary delivery and pickup services for all rentalsEnjoy the convenience of having your rental delivered right to your door, at no extra cost.""
             </div>
             <div className="Hback2">
                <LiaShippingFastSolid size="30"/>
                <p>Free delivery & shipping</p>
             </div>
          </div>
          <div className="banner-items">
             <div className="Hback">""Our vehicle rental company offers flexible rental options  whether you require a car for a few hours or several months  Enjoy hassle-free modifications and exceptional ""
             </div>
             <div className="Hback2"><MdOutlineCarRental size="30"/>
               <p>Flexible Rentals</p>
            </div>
          </div>
           <div className="banner-items">
              <div className="Hback">""At our vehicle rental company, we believe in a straightforward rental experience with no extra deposit required Simply choose your vehicle and drive""
             </div>
             <div className="Hback2"><GiTakeMyMoney size="30"/>
              <p>No Advanced Deposit</p>
             </div>
           </div>
           <div className="banner-items">
           <div className="Hback">
           ""Our vehicle rental company provides an all-India permit with every rental, allowing you to travel freely across the country without restrictions."" 
           </div>
           <div className="Hback2"><TbMapShare  size="30"/>
           <p>All India Permit</p></div>
           </div>
        </div>
      </div>
    
      <div id="banner2">
      <div id="banner-items">
        <div className="banner-items-row">
          <div className="banner-items">
             <div className="Hback">""we offer complimentary delivery and pickup services for all rentalsEnjoy the convenience of having your rental delivered right to your door, at no extra cost.""
             </div>
             <div className="Hback2">
                <LiaShippingFastSolid size="30"/>
                <p>Free delivery & shipping</p>
             </div>
          </div>
          <div className="banner-items">
             <div className="Hback">""Our vehicle rental company offers flexible rental options  whether you require a car for a few hours or several months  Enjoy hassle-free modifications and exceptional ""
             </div>
             <div className="Hback2"><MdOutlineCarRental size="30"/>
               <p>Flexible Rentals</p>
            </div>
          </div>
        </div>

        <div className="banner-items-row">
           <div className="banner-items">
              <div className="Hback">""At our vehicle rental company, we believe in a straightforward rental experience with no extra deposit required Simply choose your vehicle and drive""
             </div>
             <div className="Hback2"><GiTakeMyMoney size="30"/>
              <p>No Advanced Deposit</p>
             </div>
           </div>
           <div className="banner-items">
           <div className="Hback">
           ""Our vehicle rental company provides an all-India permit with every rental, allowing you to travel freely across the country without restrictions."" 
           </div>
           <div className="Hback2"><TbMapShare  size="30"/>
           <p>All India Permit</p></div>
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Hbanner
*/}