import React from "react";

type PageHeadlineProps = {
  hl: string;
  p: string;
};

const PageHeadline: React.FC<PageHeadlineProps> = ({ hl, p }) => {
  return (
    <div className="max-w-[750px] w-full mx-auto flex flex-col justify-center items-center gap-8 text-center">
      <h1 className="text-4xl text-tint">{hl}</h1>
      <p>{p}</p>
    </div>
  );
};

export default PageHeadline;
