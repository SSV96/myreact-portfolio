"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const name = "I am Sathya ";
  const title = "Senior backend developer";
  const fullText = `${name}\n${title}`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 150; // Typing speed in milliseconds
    const loopDelay = 2000; // Delay before restarting the typing loop

    const typeText = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Pause before clearing and restarting
        setTimeout(() => {
          index = 0;
          setText(""); // Clear text for the next loop
          typeText(); // Start typing again
        }, loopDelay);
      }
    };

    const cursorBlink = () => {
      setIsCursorVisible((prev) => !prev);
    };

    // Start typing text
    typeText();
    // Start cursor blinking
    const cursorInterval = setInterval(cursorBlink, 500);

    // Clean up interval on component unmount
    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Half for Picture */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIo8Iy7onYMdbphW5ptE7Q5dnb5EGem3ujYN4RDI0ujMGBaU-U=s288-c-no" // Replace with your picture URL
          alt="Sathya Swaroop"
          className="rounded-full shadow-lg animate-bounce"
        />
      </div>

      {/* Right Half for Name */}
      <div className="flex-1 flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 whitespace-pre-line">
            {text}
            {isCursorVisible && (
              <span className="inline-block w-1 h-8 bg-white animate-pulse" />
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
