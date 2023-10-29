<<<<<<< HEAD
import { useAction, useMutation, useQuery } from "convex/react"
import { api } from "../convex/_generated/api"
import { useState } from "react"
import { FileDrop } from "./components/dragNdrop.tsx"
import React from "react";
import Webcam from "./components/webcam.tsx";

function App() {
  const example = [
    {'unused': {'apple': '1', 'banana': '2'},
      'used': {'kiwi': '3', 'orange': '4'},
      'instructions': ['cut', 'lick'],
      'title': "apple pie"
    },
    {'unused': {'apple': '1', 'banana': '2'},
      'used': {'kiwi': '3', 'orange': '4'},
      'instructions': ['cut', 'lick'],
      'title': "banana pie"
    }
  ]

  const cards = document.querySelectorAll('.typeDesign')

  for (let i = 0; i < cards.length && i < example.length; i++) {
    const card = cards[i];
    card.textContent = example[i]['title'].toUpperCase();
  }

  const cardContainers = document.querySelectorAll('.cardContainer');

    cardContainers.forEach((cardContainer) => {
      cardContainer.addEventListener('click', () => {
        const cardContainer= document.querySelector('.cardContainer');
        cardContainer.classList.toggle('expanded');
      });
    });
 

  return (
    <>
      <main className="container max-w-2xl flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold mt-8 text-center">
          <div className="titleContainer">
          Recommended Recipes brought to you by Plates2People!

          </div>
        </h1>
        <h2 className="titleDesign">What's in your refrigerator?</h2>
        <FileDrop className='dragNdrop'></FileDrop>
        <Webcam></Webcam>
        <div className="cardContainers">
            <div className= "cardContainer p-5">
                <p className='typeDesign'>'Seans part'</p>
            </div>
            <div className= "cardContainer p-5">
                <p className='typeDesign'>'Seans part'</p>
            </div>
            <div className= "cardContainer p-5">
                <p className='typeDesign'>'Seans part'</p>
            </div>
        </div>
        
      </main>

=======
function App() {
  return (
    <>
      <main className="container max-w-2xl flex flex-col gap-8"></main>
>>>>>>> 1d4cbe80f8e01ebb8ef3f5b694b164f33a137878
    </>
  );
}

export default App;
