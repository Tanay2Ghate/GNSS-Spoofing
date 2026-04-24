import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import plane from "./assets/plane.jpg";

function App() {
  const [result, setResult] = useState("");

  const detectSpoofing = () => {
    const spoof = Math.random() > 0.5;
    setResult(spoof ? "SPOOFED" : "AUTHENTIC");
  };

  return (
    <div style={styles.container}>
      {/* Background Image */}
      <div style={styles.overlay}></div>

      {/* Animated Radar */}
      <motion.div
        style={styles.radar}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      {/* Main Panel */}
      <motion.div
        style={styles.panel}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 style={styles.title}>GNSS SPOOFING DETECTOR</h1>

        <button style={styles.button} onClick={detectSpoofing}>
          Start Detection
        </button>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              ...styles.result,
              borderColor:
                result === "SPOOFED" ? "#ff3b3b" : "#00ff9f",
            }}
          >
            {result === "SPOOFED" ? (
              <>
                <AlertTriangle size={40} color="#ff3b3b" />
                <h2 style={{ color: "#ff3b3b" }}>
                  Spoofing Detected
                </h2>
              </>
            ) : (
              <>
                <ShieldCheck size={40} color="#00ff9f" />
                <h2 style={{ color: "#00ff9f" }}>
                  Signal Secure
                </h2>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url(${plane})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
  },

  radar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300px",
    height: "300px",
    border: "2px solid rgba(0,255,150,0.5)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 40px rgba(0,255,150,0.4)",
  },

  panel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
  },

  title: {
    marginBottom: "20px",
    letterSpacing: "2px",
  },

  button: {
    padding: "12px 25px",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#00ff9f,#00c3ff)",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  },

  result: {
    marginTop: "20px",
    padding: "20px",
    border: "2px solid",
    borderRadius: "15px",
  },
};

export default App;