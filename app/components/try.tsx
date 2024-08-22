"use client";

import React, { useRef } from "react";

type Props = {
  title: string;
  description: string;
};

function Clip({ title, description }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="text-white px-20 flex-col flex items-center justify-center p-6">
        <h2 className="bg-gradient-to-r from-[#F77FA1] to-[#7F7CE3] bg-clip-text text-transparent text-4xl font-medium mb-1">
          {title}
        </h2>

        <div className="text-lg  dark:prose-invert text-white text-center py-1">
          {description}
        </div>
      </div>
    </div>
  );
}

export default Clip;
