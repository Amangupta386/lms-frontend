/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react'

import App from './App'

test("First react test Case", () => { 
render(<App />);
  
  const text = screen.getByText(/First react test Case/i);
  // const title = screen.getByTitle(/AI generated Img/)
  expect(text).toBeInTheDocument();
  // expect(title).toBeInTheDocument();

  
 })