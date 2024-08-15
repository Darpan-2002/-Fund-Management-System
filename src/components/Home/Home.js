import React from 'react';
import Navbarnew from '../Navbarnew/Navbarnew';
import SectionLinks from '../../SectionLinks/SectionLinks';
import "./Home.css"
const Home = () => {
  return (
   <div className="content">
    <Navbarnew/>
        <h1  style={{ color: 'rgb(33, 221, 227)' }}>Welcome to Fund Management website</h1>
        <p className='hello11'>
        The <bold> Blockchain-Based Fund Management System </bold> is designed to streamline the allocation 
and monitoring of funds in critical sectors, reducing the risk of illegal money fraud and enhancing overall 
efficiency. By employing smart contracts, the system automates the execution of financial transactions, 
ensuring that funds are only released when specific, pre-defined conditions are met. This not only reduces the 
need for intermediaries but also minimizes the chances of human error and corruption. 
 
 <br></br>
 <br></br>
Public fund management in sectors like health, education, natural disaster relief, and road construction is 
plagued by inefficiencies,lack of transparency and vulnerability to fraud. Traditional systems fail to ensure 
secure, accountable, and traceable transactions,leading to the misallocation of resources and erosion of public 
trust. This project aims to develop a Blockchain-Based Fund Management System to enhance transparency, 
security and accountability,reducing the risk of illegal money fraud and ensuring ethical fund allocation. 
        </p>

        <div className='hello' > 
          <img src="https://res.cloudinary.com/priyojit/image/upload/v1722106955/images_wc2ngj.jpg" alt=""  width={250} height={250}  className='hello1' />
          </div> 
          <SectionLinks />
       </div>
  );
};

export default Home;