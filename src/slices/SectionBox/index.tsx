import React, { FC } from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import { SectionBoxProps } from "socialbee-ui/dist/components/SectionBox/SectionBox";

type SectionBoxSliceProps = {
  slice: any;
  context?: any;
  children?: React.ReactNode;
}

function SectionBoxSlice({ slice, context, children }: SectionBoxSliceProps) {
  const renderTitle = () => {
    if (!slice.primary.title?.length) return null;

    const TitleElement = (
      <div className="dark:text-gray-300">
        <PrismicRichText field={slice.primary.title} />
      </div>
    );

    return slice.primary.title_href?.url ? (
      <PrismicNextLink 
        field={slice.primary.title_href} 
        className="text-text-tertiary dark:text-gray-300 w-fit" 
        target="_blank" 
        rel="noreferrer"
      >
        {TitleElement}
      </PrismicNextLink>
    ) : (
      TitleElement
    );
  };

  return (
    <section
      id={slice.primary.section_id || undefined}
      className="w-screen max-w-[1440px] px-4 py-14 lg:px-10 lg:py-[120px] xl:p-[120px] flex flex-col gap-10 lg:gap-[64px] dark:text-gray-300"
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="text-overheader dark:text-gray-300 hidden lg:block">
          <PrismicRichText field={slice.primary.header} />
        </div>
        <div className="text-overheader dark:text-gray-300 lg:hidden">
          <PrismicRichText field={slice.primary.header_mobile || slice.primary.header} />
        </div>
        {renderTitle()}
      </div>
      {children || (
        <div className="section-content">
          {slice.items.map((item: any, i: number) => (
            <div key={`content-${i}`} className="section-item">
              <PrismicRichText field={item.content} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// For backward compatibility with existing code
export const SectionBox: FC<SectionBoxProps> = ({ title, header, children, id, titleHref }) => {
  const renderTitle = () => {
    if (!title) return null;

    const TitleElement = (
      <h2 className="dark:text-gray-300">
        {title}
      </h2>
    );

    return titleHref ? (
      <a href={titleHref} className="text-text-tertiary dark:text-gray-300 w-fit" target="_blank" rel="noreferrer">
        {TitleElement}
      </a>
    ) : (
      TitleElement
    );
  };

  return (
    <section
      id={id}
      className="w-screen max-w-[1440px] px-4 py-14 lg:px-10 lg:py-[120px] xl:p-[120px] flex flex-col gap-10 lg:gap-[64px] dark:text-gray-300"
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        <h6 className="text-overheader dark:text-gray-300 hidden lg:block">{header}</h6>
        <h4 className="text-overheader dark:text-gray-300 lg:hidden">{header}</h4>
        {renderTitle()}
      </div>
      {children}
    </section>
  );
};

export default SectionBoxSlice;
