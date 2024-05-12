import {useState} from "react";

export function useHoverPosition() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({x, y});
  };

  return {mousePosition, handleMouseOver};
}
