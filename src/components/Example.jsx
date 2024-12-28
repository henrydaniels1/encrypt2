import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Example = () => {
  const { scrollYProgress } = useViewportScroll();

  // Subtle scaling and opacity effect for the entire section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0]);

  // Text and button animations
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 1], [0, 1, 0]);
  const buttonTranslateY = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <div className="wrapper w-[90%] mx-auto" style={{ height: "100vh", overflow: "hidden" }}>
      <motion.div
        className="container"
        style={{
          scale,
          opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#0d1b2a", // Dark background for contrast
          color: "#fff",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <motion.h1
          style={{
            opacity: textOpacity,
            fontSize: "2.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}
        >
          Advanced Encryption Solutions
        </motion.h1>

        <motion.p
          style={{
            opacity: textOpacity,
            maxWidth: "700px",
            textAlign: "center",
            fontSize: "1.25rem",
            lineHeight: "1.5",
            color: "#c4c4c4",
            marginBottom: "2rem",
          }}
        >
          Secure your data with cutting-edge encryption technology that meets
          the highest industry standards. Our solutions protect your sensitive
          information with advanced algorithms, ensuring privacy and security.
        </motion.p>

        <motion.button
          style={{
            opacity: textOpacity,
            transform: `translateY(${buttonTranslateY}px)`,
            padding: "0.75rem 2rem",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
          whileHover={{ backgroundColor: "#f77f7f" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};
