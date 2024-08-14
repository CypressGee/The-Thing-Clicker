import { useState, useEffect } from "react";
import UpgradeButton from "./components/UpgradeButton";

export default function App() {
  const [cookies, setCookies] = useState(1);
  const [cps, setCps] = useState(1); // cookies per second

  useEffect(() => {
    const theInterval = setInterval(function () {
      setCookies((curr) => curr + cps);
    }, 1000);

    return () => clearInterval(theInterval);
  }, [cps]); // whenever cps changes, rerun the useEffect

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyUpgrade(cost, inc) {
    setCookies(cookies - cost);
    setCps(cps + inc);
  }

  return (
   <div id="main">
      <h1> The Thing Clicker </h1>

      <button onClick={incrementCookies}>MUTATE</button>
      <p>Mutations: {cookies}</p>

      <p>Mutations Per Second  (cps): {cps}</p>
      <UpgradeButton buyUpgrade={buyUpgrade} />

    </div>
  );
}