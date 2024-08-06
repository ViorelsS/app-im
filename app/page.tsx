import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-semibold">
          Benvenuti nella nuova APP IM
        </h1>
        <p className="pt-8 font-semibold">Vai a:</p>
        <div className="flex space-x-2">
          <button className="bg-red-800 p-3 w-[150px] rounded-md font-semibold text-white">
            <Link href={"/JE"}>JEs</Link>
          </button>
          <button className="bg-red-800 p-3 w-[150px] rounded-md font-semibold text-white">
            <Link href={"/Exchange"}>Exchange</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
