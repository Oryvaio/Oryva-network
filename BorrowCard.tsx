"use client";

import { useState } from "react";

export default function BorrowCard() {
  const [collateral, setCollateral] = useState(0);

  const maxBorrow = collateral * 0.5;

  return (
    <section className="max-w-xl mx-auto p-8 border rounded-xl">
      <h2 className="text-2xl font-bold mb-6">
        Borrow SOL
      </h2>

      <input
        type="number"
        className="w-full p-3 border rounded"
        placeholder="Collateral Value"
        onChange={(e) =>
          setCollateral(Number(e.target.value))
        }
      />

      <div className="mt-6">
        Max Borrow: {maxBorrow} SOL
      </div>

      <button className="mt-6 px-6 py-3 bg-violet-600 rounded-lg">
        Borrow
      </button>
    </section>
  );
}
