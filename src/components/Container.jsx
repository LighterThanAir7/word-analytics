import {useState} from "react";
import Textarea from "./Textarea.jsx";
import Stats from "./Stats.jsx";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../constants/constants.js";

export default function Container() {
  const [inputText, setInputText] = useState('');
  const stats = {
    numberOfWords: inputText.split(/\s/).filter((word) => word !== '').length,
    numberOfChars: inputText.length,
    instagramCharsLeft: INSTAGRAM_MAX_CHARS - inputText.length,
    facebookCharsLeft: FACEBOOK_MAX_CHARS - inputText.length,
  };

  return (
    <main className="container">
      <Textarea inputText={inputText} setInputText={setInputText} />
      <Stats stats={stats} />
    </main>
  )
}