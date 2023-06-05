import React from 'react';
// import Modal from './';
import App from '../../App';
import { render, fireEvent } from '@testing-library/react';
describe('Display modal open',()=>{
const handleClick = jest.fn();
    const {getByText} = render(<App/>) ;
    const buttonElement = getByText('Active Modal') as HTMLButtonElement;
      fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

})