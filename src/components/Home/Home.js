import React from 'react';
import Navbarnew from '../Navbarnew/Navbarnew';
import SectionLinks from '../../SectionLinks/SectionLinks';
import "./Home.css"
const Home = () => {
  return (
   <div className="content">
    <Navbarnew/>
        <h1  style={{ color: 'rgb(33, 221, 227)' }}>Welcome to Fund Management website</h1>
        <p className='hello11'>A blockchain-based fund management system leverages the decentralized, transparent, and secure nature of blockchain technology to revolutionize the management of investment funds. By utilizing smart contracts, the system ensures that all transactions and fund allocations are executed automatically based on predefined rules, reducing the need for intermediaries and minimizing the risk of human error. Investors benefit from enhanced transparency as all transactions are recorded on the blockchain, allowing for real-time auditing and verification. The immutable ledger also provides increased security against fraud and tampering.</p>

        <div className='hello' > 
          <img src="https://res.cloudinary.com/priyojit/image/upload/v1722106955/images_wc2ngj.jpg" alt=""  width={250} height={250}  className='hello1' />
          </div> 
          <SectionLinks />
       </div>
  );
};

export default Home;