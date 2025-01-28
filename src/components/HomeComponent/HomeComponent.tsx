import React, { FC, useRef, useState } from 'react';
import './HomeComponent.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { HomeComponentProps } from 'src/assets/interface';

const HomeComponent: FC<HomeComponentProps> = (props) => {
  const [gg, setGg] = useState<string[]>(['dsf', 'adass','asdasfdsfdg']);
  const ref = useRef(null);

  const buttonClicked = () =>{
    props.click({title: 'Updated Title', 
      header: 'Updated Header', 
      footer: 'Updated Footer', 
      body: 'Updated Body'});
  }

  const updateArr = (newele : string) =>{
    setGg([...gg, newele]);
  };

  const refClick = () =>{
    console.log(ref);
  }

  return(
    <div ref={ref} className="HomeComponent" data-fun="" data-testid="HomeComponent">
      <div>{props.title}</div>
      <div>{props.header}</div>
      <div>{props.body}</div>
      <div>{props.footer}</div>
      <ButtonComponent text='Test Button' click={buttonClicked}/>
      <ButtonComponent text='Update Button' click={updateArr} />
      <button onClick={refClick}>
          Button
      </button>
      {
        gg.map((g, index) => {
        return(<div key={index}>{g}</div>) 
      })
      }
    </div>
  )
};

export default HomeComponent;
