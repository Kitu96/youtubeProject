import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ButtonList() {
  const buttons = [
    'All', 'Music', 'Mixes', 'Live', 'Playlists', 'T-Series', 'Recently Uploaded', 'Watched',
    
  ];

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Handle arrow visibility dynamically
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container && container.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center bg-white py-3 px-6">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 z-10"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide px-8"
      >
        {buttons.map((item, index) => (
          <Button key={index} value={item} />
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 z-10"
          onClick={() => scroll('right')}
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      )}
    </div>
  );
}

export default ButtonList;
