import React from 'react';
import axios from 'axios';
import Cars from './components/Cars';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';

class App extends React.Component{

  state={
    name: '',
    cost: 0,
    fuel: '',
    color: '',
    status: '',
    category: '',
    cars: []
  };

  componentDidMount = () => {
    this.getCar();
    
  };

  getCar =() => {
    axios.get('http://localhost:8080/api')
    .then(async (response) => {
      const data2= response.data;
      //console.log('Data: ', data2);
     await  this.setState({cars: data2});
      console.log('Data has been received!');
      console.log('Data: ', this.state.cars[0].name);
    })
    .catch(() => {
      console.log('Error retrieving data!');
    });
  }

  displayCar = (cars) => {
   
      if(cars.length==0) return <p>Lengthhhh {cars.length}</p>;

    return cars.map((car, index) => {
        <div key={index}>
          <h3>{car.name}</h3>
          <p>{car.fuel}</p>
        </div>
    });
    
  };



  render (){
    //this.getCar();
    return(
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
        <div className="car" >
          <Cars></Cars>
        </div>
      </div>
    );
  }

  

}

export default App;