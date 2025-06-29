import React, { useEffect, useRef, useState } from "react";

const slideTexts = [
  "01 Slide 1 Title",
  "02 Slide 2 Title",
  "03 Slide 3 Title",
  "04 Slide 4 Title",
];

const slideImgs = [
  "https://www.gngmodels.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-06-at-14.27.24-682x1024.jpeg",
  "prd2.png",
  "prd3.png",
  "prd2.png",
];

const slideColors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC"];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTweening, setIsTweening] = useState(false);
  const slidesRef = useRef([]);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleGesture = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX < -50) gotoSlide(1); // Swiped left
    if (deltaX > 50) gotoSlide(-1); // Swiped right
  };

  const gotoSlide = (direction) => {
    if (isTweening) return;

    let nextIndex = currentIndex + direction;
    const totalSlides = slideTexts.length;
    if (nextIndex >= totalSlides) nextIndex = 0;
    if (nextIndex < 0) nextIndex = totalSlides - 1;

    const currentSlide = slidesRef.current[currentIndex];
    const nextSlide = slidesRef.current[nextIndex];

    nextSlide.style.zIndex = 2;
    nextSlide.style.transform = "translateX(100%)";
    currentSlide.style.zIndex = 1;

    textRef.current.style.opacity = "0";
    imgRef.current.style.opacity = "0";

    setTimeout(() => {
      textRef.current.innerHTML = slideTexts[nextIndex];
      imgRef.current.src = slideImgs[nextIndex];
      textRef.current.style.transform = "translateY(50px)";
      imgRef.current.style.transform = "translateY(50px)";
    }, 900);

    nextSlide.style.transition = "transform 2s ease";
    nextSlide.style.transform = "translateX(0%)";

    setTimeout(() => {
      textRef.current.style.transition = "opacity 1s, transform 1s";
      imgRef.current.style.transition = "opacity 1s, transform 1s";
      textRef.current.style.opacity = "1";
      imgRef.current.style.opacity = "1";
      textRef.current.style.transform = "translateY(0px)";
      imgRef.current.style.transform = "translateY(0px)";
    }, 1800);

    setTimeout(() => {
      currentSlide.style.zIndex = 0;
      setIsTweening(false);
    }, 2000);

    setCurrentIndex(nextIndex);
    setIsTweening(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleGesture();
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    touchEndX.current = e.clientX;
    handleGesture();
  };

  useEffect(() => {
    // Set initial zIndex
    slidesRef.current.forEach((slide, i) => {
      slide.style.zIndex = i === 0 ? 2 : 1;
      slide.style.transform = i === 0 ? "translateX(0%)" : "translateX(100%)";
    });
  }, []);

  return (
    <div
      id="wrapper"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ overflow: "hidden", position: "relative", backgroundColor: "#f0f0f0", padding: "40px" }}
    >
      <div className="slides">
        {slideTexts.map((text, i) => (
          <div
            key={i}
            className="slide"
            ref={(el) => (slidesRef.current[i] = el)}
            style={{
              position: "absolute",
              width: "100%",
              top: 0,
              left: 0,
              transition: "transform 2s ease",
              height : "100%",
              backgroundColor: slideColors[i % slideColors.length],
              padding: "20px"
            }}
          >
            {/* Additional content per slide if needed */}
          </div>
        ))}
      </div>

      <div id="text" ref={textRef} style={{ transition: "opacity 1s" , zIndex : "1090" , position : "relative" }}>
        {slideTexts[0]}
      </div>
      <img
        id="img"
        ref={imgRef}
        src={slideImgs[0]}
        alt="Slide"
        style={{ transition: "opacity 1s", width: "200px" , position : "relative" ,  zIndex : "1090" }}
      />

      <button onClick={() => gotoSlide(1)} id="next">
        Next
      </button>
    </div>
  );
};

export default Slider;
