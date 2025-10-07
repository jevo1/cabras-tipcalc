"use client";

import { useState } from "react";
import Image from "next/image";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  
  const [bill, setBill] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<string>(""); // Changed to string

  const calculateTipAmount = () => {
    const billNumber = parseFloat(bill) || 0;
    const peopleNumber = parseFloat(numberOfPeople) || 0; // Parse the string to number
    if (peopleNumber === 0) return 0;
    return (billNumber * (tipPercentage / 100)) / peopleNumber;
  }

  const totalPerPerson = () => {
    const billNumber = parseFloat(bill) || 0;
    const peopleNumber = parseFloat(numberOfPeople) || 0; // Parse the string to number
    if (peopleNumber === 0) return 0;
    return (billNumber / peopleNumber) + calculateTipAmount();
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-bold font-mono bg-[hsl(185, 41%, 84%)] ">
      {/* Logo */}
      <Image
        src="/logo.svg"
        alt="Logo"
        width={80}
        height={40}
        className="mb-10"
      />

      {/* Container */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row max-w-4xl w-full shadow-lg">
        {/* Left Panel */}
        <LeftPanel
          bill={bill}
          setBill={setBill}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />

        {/* Right Panel */}
        <RightPanel 
          tipAmountPerPerson={calculateTipAmount()}
          totalPerPerson={totalPerPerson()}
          reset={() => {
            setBill('');
            setTipPercentage(0);
            setNumberOfPeople(''); // Reset to empty string
          }}
        />
      </div>
    </main>
  );
}