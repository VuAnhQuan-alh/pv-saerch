import { useRef, useState } from "react";
import listBook from "./dataFake";

function App() {
  const inRef = useRef(null);
  const [items, setItems] = useState([]);
  const onKeyPressed = (e) => {
    if (e.keyCode === 13) {
      const result = listBook
        .filter((value) => {
          const { title } = value;
          return inRef.current.value
            .split(" ")
            .every(
              (item) =>
                title.toLowerCase().includes(item) &&
                title.split(" ").some((el) => el.toLowerCase().startsWith(item))
            );
        })
        .filter((el, idx) => idx < 19);
      setItems(result);
    }
  };

  return (
    <div className="container mx-auto py-4 text-slate-800 font-sans">
      Search component
      <div className="mt-3 flex">
        <input
          onKeyDown={onKeyPressed}
          ref={inRef}
          type="text"
          className="w-72 border border-slate-400 py-1 px-3 placeholder:text-slate-400 focus:outline-noe rounded"
          placeholder="Enter search"
        />
      </div>
      <div className="mt-5">
        <ul className="list-disc">
          {items.length > 0
            ? items.map((el, idx) => <li key={idx}>{el?.title}</li>)
            : "search books..."}
        </ul>
      </div>
    </div>
  );
}

export default App;
