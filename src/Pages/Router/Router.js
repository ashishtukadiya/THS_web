import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { Step1 } from '../WorkDetail/Step1';
import { Step2 } from '../WorkDetail/Step2';
import MenuItemList, { Step3 } from '../WorkDetail/Step3';


export const Router = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Step1/>}/>
    <Route path='/step2' element={<Step2/>}/>
    <Route path='/step3' element={<Step3/>}/>
    </Routes>
    </>
  )
}
