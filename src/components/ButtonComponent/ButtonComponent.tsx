import React, { FC, forwardRef, Ref } from 'react';
import { ButtonComponentProps } from 'src/types/interface';
import './ButtonComponent.scss';

const ButtonComponent: FC<ButtonComponentProps> = forwardRef(
  (
    {
      text,
      children,
      onClick,
      color = 'rgb(1, 0, 0)',
      backgroundColor = '#feecb1',
      borderColor,
      borderRadius='4px',
      padding='10px 15px',
      margin='2px',
      fontSize='16px',
      fontWeight='normal',
      width='fit-content',
      height='fit-content',
    },
    ref: Ref<HTMLButtonElement>
  ) => (
    <button
      ref={ref}
      onClick={onClick}
      className='ButtonComponent'
      style={{
        color,
        backgroundColor,
        borderColor,
        borderRadius,
        padding,
        margin,
        fontSize,
        fontWeight,
        width,
        height,
        borderStyle: 'solid',
        cursor: 'pointer',
      }}
      data-testid="ButtonComponent"
    >
      {children ?? text}
    </button>
  )
);

export default ButtonComponent;
