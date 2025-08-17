import {useState} from "react";
import Warning from "./Warning.jsx";

export default function Textarea({ inputText, setInputText }) {
  const [warningText, setWarningText] = useState('');

  const handleTextChange = (e) => {
    let newText = e.target.value;

    // Basic validation
    if (newText.includes('<script>')) {
      setWarningText('You cannot use script tags!');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      newText = newText.replace('@', '');
      setWarningText('You cannot use @ symbol!');
    } else {
      setWarningText('');
    }

    setInputText(newText);
  }

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your text..."
        spellCheck="false"
        value={inputText}
        onChange={handleTextChange}
      >
      </textarea>
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  )
}