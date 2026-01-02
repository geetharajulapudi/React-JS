import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="orange" maxRating={10} OnSetRating={setMovieRating} />
      <p>This movie as rated {movieRating} stars </p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating
      maxRating={5}
      size={30}
      color="blue"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
    <App />
  </StrictMode>
);
