import Link from "next/link";

const SuggestionBar = () => {
  return (
    <div className="flex flex-row sm:flex-row justify-between items-center p-10 text-white bg-gradient-to-br from-[#7277ff] via-[#f1f1f1] to-[#111111]">
      <div className="flex-grow mb-3 sm:mb-0">
        <p className="text-6xl sm:text-2xl mb-2 text-[#090d4c]">
          Have any suggestions?
        </p>
        <p className="text-6xl sm:text-2xl text-[#f97a01]">
          We'd love to hear them!
        </p>
      </div>
      <a
        href="/suggestions"
        className="bg-[#f97a01] text-white  px-2 py-2 rounded hover:bg-orange-600 transition duration-300"
      >
        Leave a Suggestion
      </a>
    </div>
  );
};

export default SuggestionBar;
