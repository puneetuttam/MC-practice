import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [result, setResult] = useState(null);

  const isAnagram = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    console.log(str1," ",str2)
    let dummy = new Array(256);
    if (str1.length != str2.length) {
      return false;
    }
    for (let i = 0; i < 256; i++) {
      dummy[i] = 0;
    }
    for (let i = 0; i < str1.length; i++) {
      dummy[str1[i].charCodeAt(0)]++;
      dummy[str2[i].charCodeAt(0)]--;
    }
    console.log(dummy)
    for (let i = 0; i < 256; i++) {
      if (dummy[i] != 0) {
        return false;
      }
    }
    return true;
  };

  const helper = () => {
    let res = isAnagram(word1, word2);
    setResult(res)
  };

  return (
    <div>
      <h1>Anagram</h1>
      <div className="App">
        <input
          type="text"
          value={word1}
          onChange={(e) => {
            setWord1(e.target.value);
          }}
          placeholder="Input Word 1"
        ></input>
        <input
          type="text"
          value={word2}
          onChange={(e) => {
            setWord2(e.target.value);
          }}
          placeholder="Input Word 2"
        ></input>
        <button onClick={helper}>Check Anagram</button>
      </div>
      {result !=null &&(<div>This word or phrase is {result ? "Anagarm" : "not Anagram"} </div>)}
      <div></div>
    </div>
  );
};

export default App;
