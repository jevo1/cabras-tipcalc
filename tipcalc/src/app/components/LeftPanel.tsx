"use client";
import Image from "next/image";

interface LeftPanelProps {
  bill: number;
  setBill: (value: number) => void;
  tipPercentage: number;
  setTipPercentage: (value: number) => void;
  numberOfPeople: number;
  setNumberOfPeople: (value: number) => void;
}

export default function LeftPanel({ bill, setBill, tipPercentage, setTipPercentage, numberOfPeople, setNumberOfPeople }: LeftPanelProps) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
      {/* Bill */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Bill</label>
        <div className="relative">
          <Image
            src="/icon-dollar.svg"
            alt="Dollar Icon"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="number"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value) || 0)}
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Select Tip % */}
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Select Tip %</label>
        <div className="grid grid-cols-3 gap-3">
          {tipOptions.map((tip) => (
            <button
              key={tip}
              className={`py-2 rounded-lg transition ${
                tip === tip ? "bg-teal-400 text-teal-900" : "bg-teal-900 text-white hover:bg-teal-700"
              }`}
              onClick={() => setTipPercentage(tip)}
              >
              {tip}%
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(Number(e.target.value) || 0)}
            className="w-full text-center py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Number of People */}
      <div>
        <label className="block text-gray-600 mb-2">Number of People</label>
        <div className="relative">
          <Image
            src="/icon-person.svg"
            alt="Person Icon"
            width={16}
            height={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="number"
            placeholder="0"
            value={numberOfPeople}
            min={1}
            onChange={(e) => setNumberOfPeople(Number(e.target.value) || 0)}
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );
}
