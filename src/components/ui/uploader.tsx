import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";

export default function Uploader() {
  const detectIngredients = useAction(api.myFunctions.detectIngredients);
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageString, setImageString] = useState("");

  const toBase64 = (file: File) => {
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImageString(reader.result);
        console.log(reader.result);
      }
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <>
      <div className="uploaderContainer">
      <b><h1 className="text-center">Upload image here:</h1></b>
        <br />
        <br />

        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}

        ###/* where to return */
        <button
          onClick={async () =>
            setResults(await detectIngredients({ image: imageString }))
          }
        >
          Run the detector
        </button>

        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            toBase64(event.target.files[0]);
          }}
        />
        {/* <h5> Results: {`${results}`} </h5> */}
        <br />
        <br />
        <br />
        <br />
      <b><h2 className="text-center">Or take a photo:</h2></b>

      </div>
    </>
  );
}
