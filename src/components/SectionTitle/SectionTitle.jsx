import React from "react";
import { useState, useEffect, useRef } from "react";
import "./SectionTitleStyles.css"

export const SectionTitle = ({ title }) => {
  const [isFocused, setIsFocused] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFocused) {
          setIsFocused(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the title is visible
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [isFocused]);

  return (
    <>
      <h3
        ref={titleRef}
        className={`sub-title ${isFocused && "tracking-in-contract"}`}
      >
        {title}
      </h3>
    </>
  );
};
