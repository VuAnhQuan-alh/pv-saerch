import { useEffect } from "react";
import { getBooks } from "./api";

function App() {
  const getData = async () => {
    const data = await getBooks();
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">search component</div>;
}

export default App;
