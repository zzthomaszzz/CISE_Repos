import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';


    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    describe('Addition', () => {
      it('should add two numbers correctly', () => {
        expect(2+3).toBe(5);
      });
    });
