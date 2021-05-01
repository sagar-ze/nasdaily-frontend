import React from 'react';
import Stories from './components/stories'
import Navbar from './components/navbar'
import Category from './components/category'

import './App.css'

function App(props) {
  return (
    <div>
      <Navbar />
      <main class="main">
        <Category />
        <Stories />
      </main>
    </div>
  );
}

export default App;