import React, { useState } from 'react';
import { Mic } from 'lucide-react'; 

const VoiceInput = ({ onTextGenerated }) => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTextGenerated(transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
  };

  return (
    <button
      onClick={startListening}
      className="ml-2 text-white hover:text-blue-400"
      title="Click to speak"
    >
      <Mic size={18} className={listening ? 'animate-pulse text-red-500' : ''} />
    </button>
  );
};

export default VoiceInput;
