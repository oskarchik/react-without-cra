import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
  beforeAll(() => render(<App />));
  afterAll(() => cleanup);
  it('should have the right message on screen', () => {
    const message = 'Hello World';

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
