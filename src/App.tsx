import { useAction, useMutation, useQuery } from "convex/react"
import { api } from "../convex/_generated/api"
import { useState } from "react"
import { FileDrop } from "./components/dragNdrop.tsx"

function App() {
  const example = [
    {'unused': {'apple': '1', 'banana': '2'},
      'used': {'kiwi': '3', 'orange': '4'},
      'instructions': ['cut', 'lick'],
      'title': "apple pie"
    }
  ]

  cards = document.querySelectorAll('cardContainer p-5')

  for (const card of cards) {

  }


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

    </>
  )
}

export default App
