import { FileDrop } from "./components/dragNdrop.tsx";
import Uploader from "./components/ui/uploader.tsx";
import Webcam from "./components/webcam.tsx";
import GetRecipeData from "./getrecipe.js"
export default function App() {
  
  const cards = document.querySelectorAll(".typeDesign");

  for (let i = 0; i < cards.length && i < example.length; i++) {
    const card = cards[i];
    card.textContent = example[i]["title"].toUpperCase();
  }

  for (let i = 0; i < cards.length && i < example.length; i++) {    
    const card = cards[i];

    card.textContent = example[i]["unused"];
    for (let s=0; s<cards.length && s < example[i]["unused"].length; s++){
      blobby.textContent = f`all keys in s : all connected keys`

    }
  }



  const cardContainers = document.querySelectorAll(".cardContainer");

  cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener("click", () => {
      const cardContainer = document.querySelector(".cardContainer");
      cardContainer.classList.toggle("expanded");
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
        {/* <FileDrop className="dragNdrop"></FileDrop> */}
        <div className="inputDisplay">
          <Uploader className="dragNdrop"></Uploader>
          <Webcam className='webcam'></Webcam>
        </div>
        <div className="cardContainers">
          <div className="cardContainer p-5 transition-all">
            <p className="typeDesign"></p>
          </div>
          <div className="cardContainer p-5 transition-all">
            <p className="typeDesign"></p>
          </div>
          <div className="cardContainer p-5 transition-all">
            <p className="typeDesign"></p>
          </div>
        </div>
      </main>
    </>
  );
}
