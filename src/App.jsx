import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [toasty, setToast] = useState([]);

  const addCount = () => {
    setToast((prev) => [
      ...prev,
      `Button is Clicked! Total Count Recorded is ${count}`,
    ]);
    setTimeout(() => {
      setToast((prev) => prev.slice(1));
    }, 5000); // Wait for 1 second before removing the first toast
    return setCount(count + 1);
  };

  useEffect(() => {
    alert("You have reached a Hundredth!");
  }, [count === 100]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="vh-100 w-full d-flex justify-content-center align-items-center text-black">
            <ul className="position-fixed top-0 end-0 z-3 px-0 m-3">
              {toasty &&
                toasty.map((item, i) => (
                  <li className="alert alert-primary mx-0 py-2 px-4 mb-2">
                    {item}
                  </li>
                ))}
            </ul>
            <section className="w-25 h-75 border d-flex flex-column justify-content-center align-items-center z-1">
              <h3 className="text-center">The Sheep</h3>
              <figure className="w-75 h-50 bg-light rounded shadow-sm border p-2">
                <img
                  src="https://media.sketchfab.com/models/ac07d57a79bf40feba6e2bb89ec428b3/thumbnails/96559b359d5b44ffa98260788540386b/cf5b303cb55e4316bac4b11e5ffffdda.jpeg"
                  alt="Minecraft Sheep"
                  className="w-100 h-100 object-fit-cover"
                ></img>
              </figure>
              <section className="w-75 text-center">
                <div>
                  <button className="border px-3 py-1" onClick={addCount}>
                    Like
                  </button>
                  <p className="text-secondary p-0 m-0 text-sm">{`The count is ${count}`}</p>
                </div>
              </section>
            </section>
          </main>
        }
      ></Route>
    </Routes>
  );
}
