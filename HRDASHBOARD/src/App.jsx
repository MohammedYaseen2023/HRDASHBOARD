import { useState } from "react";
import MiniDrawer from "./sidebar";
import R_Status from "./R_Status";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <R_Status />
        <MiniDrawer />
      </div>
    </>
  );
}

export default App;
