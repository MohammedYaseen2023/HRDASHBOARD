import { useState } from "react";
import MiniDrawer from "./sidebar";
import AlertFunc from "./R_Status";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AlertFunc />
        <MiniDrawer />
      </div>
    </>
  );
}

export default App;
