import { useCallback, useEffect, useRef } from 'react';

function useIntersectionObserver(data: any, callback: () => void) {
  const ref = useRef(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!entries[0].isIntersecting) return;
      callback();
    },
    [callback],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver, ref, data]);

  return ref;
}

export default useIntersectionObserver;
