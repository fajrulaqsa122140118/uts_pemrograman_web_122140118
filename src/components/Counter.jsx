import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect akan dipanggil setiap kali count berubah
  useEffect(() => {
    console.log(`Count sekarang: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Kamu menekan tombol sebanyak {count} kali.</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default Counter;
