import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleNav = (props) => {
  console.log({ 'SingleNav component loaded': props });
  // need to have currentBeer and place it after hash


  return (
    <div className="container">
      <div className="container">
        <NavLink to="/BeersList/BeerDetails" className="singleNav">
          <p>Prev</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/BeerEdit" className="singleNav" isadd={"false"}>

          <p>Edit</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/" className="singleNav" type={props.type} onClick={()=> props.deleteBeer(props.id)} >
          <p>Delete</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/BeerDetails#9" className="singleNav">
          <p>Next</p>
        </NavLink>
      </div>

    </div>
  );
};

export default SingleNav;
