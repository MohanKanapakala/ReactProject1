import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceSearch = ({ showVegItems, addToCart }) => {
  const commands = [
    {
      command: ["show veg items", "display veg items", "vegetarian menu"],
      callback: () => showVegItems(),
    },
    {
      command: ["add * to cart", "put * in cart"],
      callback: (item) => addToCart(item),
    },
    {
      command: ["reset", "clear"],
      callback: () => SpeechRecognition.resetTranscript(),
    },
  ];

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  return (
    <div className="p-4 rounded-2xl shadow-lg bg-white text-center">
      <h2 className="text-xl font-bold mb-2">🤖 Voice Assistant</h2>

      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl"
      >
        {listening ? "Listening..." : "Start Assistant"}
      </button>

      <button
        onClick={SpeechRecognition.stopListening}
        className="ml-2 px-4 py-2 bg-gray-400 text-dark rounded-xl"
      >
        Stop
      </button>

      <p className="mt-3 text-gray-700">
        <b>Transcript:</b> {transcript || "Say a command..."}
      </p>
    </div>
  );
};

export default VoiceSearch;
