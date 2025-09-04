import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h1 className="text-lg font-semibold text-indigo-700 border-b pb-3 mb-4">
        {title}
      </h1>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
}
