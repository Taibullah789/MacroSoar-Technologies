import { useEffect, useRef } from "react";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX - 6}px, ${currentY - 6}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!cursor) return;
      // Make gray shade "breathe" while scrolling
      const blur = 8 + (window.scrollY % 20); // 8px – 28px
      cursor.style.boxShadow = `0 0 ${blur}px rgba(128,128,128,0.6)`; // gray shade
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] 
                 bg-[#ff612f] mix-blend-difference"
    ></div>
  );
}

export default CustomCursor;
