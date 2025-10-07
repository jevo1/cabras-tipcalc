"use client";

import { useState } from "react";
import Image from "next/image";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");

const billNumber = parseFloat(bill) || 0;
const peopleNumber = parseFloat(numberOfPeople) || 0;
const tipAmountPerPerson = peopleNumber > 0 ? (billNumber * (tipPercentage / 100)) / peopleNumber : 0;
const totalPerPerson = peopleNumber > 0 ? billNumber / peopleNumber + tipAmountPerPerson : 0;

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
          tipAmountPerPerson={tipAmountPerPerson}
          totalPerPerson={totalPerPerson}
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