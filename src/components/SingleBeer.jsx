import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleBeer = (props) => {
  console.log({ 'SingleBeer component loaded': props });
  return (

    <NavLink
      to={`/BeersList/BeerDetails#${props.id}`}
      activeClassName="active"
      key={props.id}
    >

      <div className="singleBeer">
        {props.id}
        {/* <<  to hide later, using for reference  */ }
        <p>  {props.name} </p>
        <p> {props.brewery} </p>


      </div>
    </NavLink>
  );
};

export default SingleBeer;

