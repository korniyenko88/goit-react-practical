import React from "react";
import { TailSpin } from "react-loader-spinner"; // Import from your chosen loader spinner

const Loader = () => {
  return (
    <div>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
