import { useState, useEffect } from "react";

const setDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  if (width < 360) {
    return {
      windowWidth: 360,
      windowHeight: height,
    };
  } else {
    return {
      windowWidth: width,
      windowHeight: height,
    };
  }
};

const GetWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(setDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(setDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

export default GetWindowDimensions;
