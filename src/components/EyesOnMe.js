// Code EyesOnMe Component Here
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

export default function EyesOnMe() {
  return (
    <div>
       <button  
        onFocus={()=>console.log('Good!')}
        onBlur={()=>console.log("Hey! Eyes on me!")}
        >
        Eyes on me
        </button>
      
    </div>
   
  );
}
