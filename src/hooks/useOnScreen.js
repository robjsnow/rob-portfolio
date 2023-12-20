// src/hooks/useOnScreen.js

import { useEffect, useState } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  // State and observer logic
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
