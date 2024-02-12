import React, { useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
