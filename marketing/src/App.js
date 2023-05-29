import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Album from './components/Landing';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div>
      aaaaa
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            {/* <Route exact path="/albums" element={<Album />} /> */}
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}
