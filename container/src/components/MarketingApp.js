import React, { useRef, useEffect } from 'react';

import { marketingMount } from 'marketing/MarketingIndex';

export default function MarketingApp() {
  const htmlElementRef = useRef(null);

  useEffect(() => {
    marketingMount(htmlElementRef.current);
  }, []);

  return <div ref={htmlElementRef} />;
}
