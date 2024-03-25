'use client';

import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="flex justify-center items-center min-h-screen min-w-full"
      onClick={() => {
        window?.navigator?.vibrate(200);
        setCounter((prev) => prev + 1);
      }}
    >
      <p className="text-9xl font-semibold">{counter}</p>
    </div>
  );
}
