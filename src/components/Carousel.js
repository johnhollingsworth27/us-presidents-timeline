import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import PresidentCard from './PresidentCard';
import presidents from '../data/presidents';
import './Carousel.css'; // Ensure this CSS file includes necessary styles

/**
 * HorizontalScroll Component
 * Enables horizontal dragging to scroll through its children.
 */
const HorizontalScroll = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseUp);

      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
      container.addEventListener('touchmove', handleTouchMove);

      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseUp);

        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [handleMouseDown, handleMouseUp, handleMouseMove, handleTouchStart, handleTouchEnd, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`horizontal-scroll ${isDragging ? 'dragging' : ''}`}
      style={{
        overflowX: 'auto',
        display: 'flex',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        scrollBehavior: 'smooth',
      }}
      aria-label="Presidents Carousel"
    >
      {children}
    </div>
  );
};

/**
 * CarouselComponent
 * Renders a responsive and seamlessly scrollable list of presidents.
 */
const CarouselComponent = () => {
  const presidentCards = useMemo(() => {
    return presidents.map((president) => (
      <div key={president.id} className="slide">
        <PresidentCard president={president} />
      </div>
    ));
  }, [presidents]);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Presidents Carousel</h2>
      <HorizontalScroll>
        {presidentCards}
      </HorizontalScroll>
    </div>
  );
};

export default CarouselComponent;
