"use client";
import Image from "next/image";
import { useState } from "react";

interface LeftPanelProps {
  bill: string;
  setBill: (value: string) => void;
  tipPercentage: number;
  setTipPercentage: (value: number) => void;
  numberOfPeople: string;
  setNumberOfPeople: (value: string) => void;
}

export default function LeftPanel({ bill, setBill, tipPercentage, setTipPercentage, numberOfPeople, setNumberOfPeople }: LeftPanelProps) {
  const tipOptions = [5, 10, 15, 25, 50];
  const [isCustomActive, setIsCustomActive] = useState(false);
  const [customTipValue, setCustomTipValue] = useState("");
  
  // Check if bill has a value and is greater than 0
  const hasBill = bill !== "" && parseFloat(bill) > 0;
  
  // Show warning only if there's a bill AND number of people is 0 or empty
  const showWarning = hasBill && (numberOfPeople === "" || parseFloat(numberOfPeople) === 0);

  const handleCustomTipClick = () => {
    setIsCustomActive(true);
    setTipPercentage(0);
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomTipValue(value);
    setTipPercentage(Number(value) || 0);
  };

  const handlePredefinedTipClick = (tip: number) => {
    setIsCustomActive(false);
    setCustomTipValue("");
    setTipPercentage(tip);
  };

  const handleCustomInputBlur = () => {
    if (customTipValue === "") {
      setIsCustomActive(false);
    }
  };

  return (
    <div className="flex-1 bg-white p-6 ">
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
            onChange={(e) => setBill(e.target.value)}
            className="w-full text-right pr-3 pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#f3f8fb]"
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
              type="button"
              className={`py-2 rounded-lg transition ${
                tip === tipPercentage && !isCustomActive
                  ? "bg-teal-400 text-[#00474b]"
                  : "bg-[#00474b] text-white hover:bg-teal-400 hover:text-[#00474b]"
              }`}
              onClick={() => handlePredefinedTipClick(tip)}
            >
              {tip}%
            </button>
          ))}
          <div className="relative">
            <input
              type="number"
              placeholder="CUSTOM"
              value={isCustomActive ? customTipValue : ""}
              onClick={handleCustomTipClick}
              onChange={handleCustomTipChange}
              onBlur={handleCustomInputBlur}
              className="w-full text-right pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#f3f8fb] cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Number of People */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-gray-600">Number of People</label>
          {showWarning && (
            <span className="text-red-500 text-sm text-right">Can't be zero</span>
          )}
        </div>
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
            onChange={(e) => setNumberOfPeople(e.target.value)}
            className={`w-full text-right pr-3 pl-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              showWarning
                ? "border-red-500 bg-red-50"
                : "border-gray-300 bg-[#f3f8fb]"
            }`}
          />
        </div>
      </div>
    </div>
  );
}