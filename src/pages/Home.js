import React, { useContext, useState } from 'react';
// import axios from 'axios';
import { ThemeContext } from '../ThemeChange/ThemeProvider';



const mockProducts = [
  {
    id: 1,
    title: "prthamesh.45",
    Follower:632,
    following:642
    // description: "The Nike Air Max 270 offers comfort with a large Air unit in the heel.",
    // image: "https://link-to-nike-air-max-270-image.jpg"
  },
  {
    id: 2,
    title: "sharad.patil_16",
    Follower:710,
    following:733,
    description: "A classic shoe with a modern twist, featuring a low-cut silhouette.",
    // image: "https://link-to-nike-air-force-1-image.jpg"
  },
  {
    id: 3,
    title: "prajya_._07",
    Follower: 513,
    following: 534,
    // image: "https://link-to-nike-react-infinity-run-image.jpg"
  },
  {
    id: 4,
    title: "_sanketpatil_",
    Follower:641,
    following:616
    // description: "The Nike Air Max 270 offers comfort with a large Air unit in the heel.",
    // image: "https://link-to-nike-air-max-270-image.jpg"
  },
  // {
  //   id: 1,
  //   title: "prthamesh.45",
  //   Follower:632,
  //   following:642
  //   // description: "The Nike Air Max 270 offers comfort with a large Air unit in the heel.",
  //   // image: "https://link-to-nike-air-max-270-image.jpg"
  // },
];




const Home = () => {
  const [products] = useState(mockProducts);
  const { theme } = useContext(ThemeContext);



  return (
    <div className={`${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'} min-vh-100 py-5`}>
      <div className='profileContainer'>
        <div className='row'>
          {products.map((product) => (
            <div className='col-12 col-md-4 col-lg-4 my-3' key={product.title}> 
            
              <div className="card shadow-sm" style={{ backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40', color: theme === 'light' ? '#000' : '#fff' }}>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h8 className="card-subtitle mb-2">Follower: {product.Follower}</h8>
                  <p className="card-text">following: {product.following}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
