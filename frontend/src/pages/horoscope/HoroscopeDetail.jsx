import React from 'react'
import { HoroHeader } from './components/HoroHeader';
import { HoroPicture } from './components/HoroPicture';
import { Detail } from './components/Detail';
import  ProductCard  from "../../components/ui/ProductCard";



export const HoroscopeDetail = () => {
  return (
    <div>
        <HoroHeader/>
        <HoroPicture/>
        <Detail/>
        <ProductCard/>
    </div>
  );
};
