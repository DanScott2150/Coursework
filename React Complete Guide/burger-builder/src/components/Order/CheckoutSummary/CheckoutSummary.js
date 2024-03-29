import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {
  return(
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes great!</h1>
      <div style={{width:'100%', margin:'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
        <Button 
          btnType="Danger"
          clicked={props.checkoutCancel}>CANCEL</Button>
        <Button 
          btnType="Success"
        clicked={props.checkoutContinue}>Continue</Button>
    </div>
  );
}

export default checkoutSummary;