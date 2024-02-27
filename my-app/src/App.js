import React from 'react';
import './App.css';
import logo from "../src/assests/logo.png"
import logo1 from "../src/assests/1.png"
import logo2 from "../src/assests/2.png"
import logo3 from "../src/assests/3.png"
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <div className="container">
      <div className="item title">
        <img  className="header"src={logo} alt="logo" />
      </div>

      <div class="award-logos-container">
  <img className="award logo1" src={logo1} alt="logo1" />
  <div class="content">
    <div class="text">
      <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
      <p>
        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as
        trustworthy products for various projects across the globe to save energy.
      </p>
      <p>
        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services
        Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with
        IoT enabled control panel.
      </p>
    </div>
    <img className="award logo2" src={logo2} alt="C.R.I. Pumps" />
    <p>
      Government of India has awarded the "National Energy Conservation Award 2018". Mr.G.selvraj, joint managing director of C.R.I Group received the award from Smt.Sumithra Mahajan, speaker of Lok Sabha & Shri.Raj Kumar Honorable Minister of State
    </p>
  </div>
</div>

      

      

      <div className="item details">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
          CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className='logo3'>
        <img src={logo3} alt="pumps.png" />
        <p>Valves-pumps-pipes-IOT Drives &Controllers - Wires &Cables -Solar System -Motors </p>
        <hr/>
        </div>
       
      </div>

      <div className="item social">
           <h1>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS 
          </h1>
          <p>
          CHEMICALS & PROCESS | POWER| WATER & WASTE WATER| OILS & GAS | PHARMA | SUGARS & DISTILLERIES| PAPER 
          PULP |MARINE & DEFENCE| METAL & MINING| FOOD & BEVERAGE| PETROCHEMICAL & REFINERIES |SOLAR | BUILDING |
          HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      <div className="item footer">
        <ul>
          <li>
            <i className="fas fa-phone-alt"></i> Toll-Free: 1800 200 1234
          </li>
          <li>
            <i className="fab fa-facebook-f"></i> www.facebook.com/cripumps
          </li>
          <li>
            <i className="fas fa-globe"></i> www.crigroups.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
