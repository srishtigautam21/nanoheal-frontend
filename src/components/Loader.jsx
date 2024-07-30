import React from "react";
import { CircularProgress } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className='flex gap-4'>
      <CircularProgress size='md' aria-label='Loading...' />
      {/* <CircularProgress size="lg" aria-label="Loading..."/> */}
    </div>
  );
};

export default Loader;
