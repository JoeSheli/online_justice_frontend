import React, { useEffect } from "react";

function Notfound() {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);
  return (
    <div className="w-full font-bold text-xl h-screen flex items-center justify-center">
      This page is not found
    </div>
  );
}

export default Notfound;
