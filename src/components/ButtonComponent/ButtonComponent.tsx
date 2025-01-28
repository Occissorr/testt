import React, { FC } from 'react';
import './ButtonComponent.scss';
import { ButtonComponentProps } from 'src/assets/interface';

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
  
  
  const buttonClick = () =>{
    props.click('1234');
  }

  return(
    <div className="ButtonComponent" data-testid="ButtonComponent">
      <button onClick={buttonClick}>
        {props.text}
      </button>
      
    </div>
  )
};

export default ButtonComponent;
