import React, { useEffect } from "react";
import Button from './Button';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = React.useState("");

  const fetchApi = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="joke">
      <h1>Joke Generator using React and Joke API</h1>
      <Button callApi={fetchApi} />
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
