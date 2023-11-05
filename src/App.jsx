import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './componnent/Footer'
import Header from './componnent/Header'
import Home from './componnent/Home'
import Header from './componnent/Header'
import Home from './componnent/Home'
import Card_info from './componnent/Home/Card_Info'
import Search from './componnent/Home/Search'


const App = () => {
  return (
    <>
      <Header title= "Header"/>
      <Home title= "Home"/>
      <Footer title = "Footer"/>
      <Logo title= "Logo"/>
      <Generations title = "Generations"/>
      <Gen1 title = "Gen1" />
      <Gen2 title = "Gen2" />
      <Gen3 title = "Gen3" />
      <Gen4 title = "Gen4" />
      <Search title = "Search" />
      <Card_info title = "Card Info" />
    </>
  );
};

export default App
