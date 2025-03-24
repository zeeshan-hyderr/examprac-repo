import React, { useState, useEffect } from "react";

const TypeSpeedTracker = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (text.length === 1) {
      setStartTime(Date.now());
    }

    if (text.length > 1) {
      const elapsedTime = (Date.now() - startTime) / 1000;
      setSpeed((text.length / elapsedTime).toFixed(2));
    }

    // Update tab title dynamically
    document.title = `Speed: ${speed} chars/sec`;

    return () => {
      console.log("Cleaning up...");
    };
  }, [text]); // Runs when 'text' changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Type Something...</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        style={{ padding: "10px", fontSize: "18px" }}
      />
      <h3>Speed: {speed} characters per second</h3>
    </div>
  );
};

export default TypeSpeedTracker;
