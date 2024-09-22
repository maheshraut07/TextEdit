import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleReverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text Reversed!", "success");
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert("Capitalized first letter of each word!", "success");
    }

    const handleAlternateCase = () => {
        let newText = text.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("");
        setText(newText);
        props.showAlert("Text converted to alternate case!", "success");
    }

    const handleRemoveVowels = () => {
        let newText = text.replace(/[aeiouAEIOU]/g, '');
        setText(newText);
        props.showAlert("Vowels removed from text!", "success");
    }

    const handleRemoveNumbers = () => {
        let newText = text.replace(/[0-9]/g, '');
        setText(newText);
        props.showAlert("Numbers removed from text!", "success");
    }

    const countVowelsAndConsonants = () => {
        let vowels = text.match(/[aeiouAEIOU]/g) || [];
        let consonants = text.match(/[^aeiouAEIOU\s\d\W]/g) || [];
        return { vowels: vowels.length, consonants: consonants.length };
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox" rows="8"></textarea>
                </div>
                
                <div className="row">
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Words</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleAlternateCase}>Alternate Case</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveVowels}>Remove Vowels</button>
                    </div>
                    <div className="col">
                        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveNumbers}>Remove Numbers</button>
                    </div>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Vowel and Consonant Count</h2>
                <p>{`Vowels: ${countVowelsAndConsonants().vowels}, Consonants: ${countVowelsAndConsonants().consonants}`}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
