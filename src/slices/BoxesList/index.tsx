import React from "react";
import { PrismicRichText } from '@prismicio/react';

type BoxesListSliceProps = {
  slice: any;
  context?: any;
}

export function BoxesListSlice({ slice, context }: BoxesListSliceProps) {
  return (
    <div className="mt-10 lg:mt-16">
      <div className="mb-6">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-6">
        {slice.items.map((item: any, index: number) => (
          <div
            key={index}
            className="px-4 py-3 rounded-xl bg-primary-400 flex items-center justify-center"
          >
            {item.box_text}
          </div>
        ))}
      </div>
    </div>
  );
}

// For backward compatibility
interface BoxesListProps {
  title: string;
  boxes: string[];
}

export const BoxesList: React.FC<BoxesListProps> = ({ title, boxes }) => {
  return (
    <div className="mt-10 lg:mt-16">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-wrap gap-3 lg:gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="px-4 py-3 rounded-xl bg-primary-400 flex items-center justify-center"
          >
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BoxesListSlice;