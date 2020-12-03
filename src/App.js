import React from "react";

function Food({fav}){
  return <h1>I hate {fav}</h1>;
}

const foodIlike = [{}]

function App() {
  return (
    <div>
      <h1>Hellllllo</h1>
      <Food fav="pizza" />
      <Food fav="hamburgur" />
    </div>
  );   
}

export default App;
