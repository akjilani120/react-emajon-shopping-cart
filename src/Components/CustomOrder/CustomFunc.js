import React, { useEffect, useState } from 'react';

const CustomFunc = () => {
   const [items , setItems] =useState([])

   useEffect( () => {
       fetch("http://localhost:5000/product")
       .then(res => res.json())
       .then(data => setItems(data))
   }, [])
   return [items, setItems]
};

export default CustomFunc;