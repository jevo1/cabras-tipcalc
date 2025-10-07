interface RightPanelProps {
  tipAmountPerPerson: number;
  totalPerPerson: number;
  reset: () => void;
}


export default function RightPanel({ tipAmountPerPerson, totalPerPerson, reset }: RightPanelProps) {
  return (
    <div className="flex-1  bg-[#00474b] text-white p-6 rounded-xl flex flex-col justify-between shadow-md">
      {/* Tip Amount */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-m">Tip Amount</p>
          <span className="text-gray-400 text-s">/ person</span>
        </div>
        <p className="text-5xl font-bold text-[#22c3ac]">
          ${tipAmountPerPerson.toFixed(2)}
        </p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-m">Total</p>
          <span className="text-gray-400 text-s">/ person</span>
        </div>
        <p className="text-5xl font-bold text-[#22c3ac]">
          ${totalPerPerson.toFixed(2)}
        </p>
      </div>

      {/* Reset button */}
      <button
        onClick={reset}
        disabled={
          tipAmountPerPerson === 0 &&
          totalPerPerson === 0
        }
        className={`w-full font-bold py-2 rounded-lg transition
          ${
            tipAmountPerPerson === 0 && totalPerPerson === 0
              ? "bg-[#0c686d] text-[#00474b] opacity-50 cursor-not-allowed"
              : "bg-[#26c2ad] text-[#00474b] hover:bg-teal-400"
          }
        `}
      >
        RESET
      </button>
    </div>
  );
}