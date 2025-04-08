import React from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicNextLink } from '@prismicio/next';
import SectionBoxSlice, { SectionBox } from "../SectionBox";

type ProcessSectionSliceProps = {
  slice: any;
  context?: any;
}

function ProcessSectionSlice({ slice, context }: ProcessSectionSliceProps) {
  const renderTitle = (step: any) => (
    <div className="hidden lg:block">
      <PrismicRichText field={step.title} />
      {step.subtitle?.length > 0 && (
        <span className="font-normal"> 
          <PrismicRichText field={step.subtitle} />
        </span>
      )}
    </div>
  );

  const renderTitleMobile = (step: any) => (
    <div className="lg:hidden self-center">
      <PrismicRichText field={step.title} />
      {step.subtitle?.length > 0 && (
        <span className="font-normal"> 
          <PrismicRichText field={step.subtitle} />
        </span>
      )}
    </div>
  );

  const renderStepTitle = (step: any) =>
    step.href?.url ? (
      <PrismicNextLink field={step.href} className="block" target="_blank" rel="noreferrer">
        {renderTitle(step)}
        {renderTitleMobile(step)}
      </PrismicNextLink>
    ) : (
      <>
        {renderTitle(step)}
        {renderTitleMobile(step)}
      </>
    );

  // Create a mock slice for the SectionBox
  const sectionBoxSlice = {
    id: `section-box-${slice.id}`,
    slice_type: 'section_box',
    primary: {
      title: slice.primary.title,
      header: slice.primary.header,
      title_href: slice.primary.title_href,
      section_id: slice.primary.section_id
    },
    items: []
  };

  return (
    <SectionBoxSlice slice={sectionBoxSlice as any}>
      <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-9 relative">
        <div className="flex-1 flex flex-col lg:gap-10 gap-[26px] relative w-full">
          <div className="absolute w-[2px] left-[15px] top-4 bg-border-primary -z-10 h-full" />
          {slice.items.map((step: any, index: number) => (
            <div className="flex flex-col lg:gap-2" key={index}>
              <div className="flex flex-row gap-5 lg:gap-6 items-center">
                <div className="w-8 min-w-8 h-8 min-h-8 rounded-full bg-primary-400 border-[2px] pt-[2px] border-background-primary text-center flex items-center justify-center">
                  <h6 className="dark:text-black">{index + 1}</h6>
                </div>
                {renderStepTitle(step)}
              </div>
              <div className="pl-[52px] lg:pl-[56px]">
                <PrismicRichText field={step.description} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex pt-0">
          {slice.primary.image && (
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full rounded-[12px] lg:rounded-[16px] object-cover"
              fallbackAlt={slice.primary.image_alt || "Process illustration"}
            />
          )}
        </div>
      </div>
    </SectionBoxSlice>
  );
}

// For backward compatibility
export const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  title, 
  header, 
  steps, 
  imageSrc, 
  imageAlt, 
  titleHref 
}) => {
  const renderTitle = (step: ProcessStep) => (
    <h4 className="hidden lg:block">
      {step.title}
      {step.subtitle && <span className="font-normal"> {step.subtitle}</span>}
    </h4>
  );

  const renderTitleMobile = (step: ProcessStep) => (
    <h3 className="lg:hidden self-center">
      {step.title}
      {step.subtitle && <span className="font-normal"> {step.subtitle}</span>}
    </h3>
  );

  const renderStepTitle = (step: ProcessStep) =>
    step.href ? (
      <a href={step.href} className="block" target="_blank" rel="noreferrer">
        {renderTitle(step)}
        {renderTitleMobile(step)}
      </a>
    ) : (
      <>
        {renderTitle(step)}
        {renderTitleMobile(step)}
      </>
    );

  return (
    <SectionBox title={title} header={header} titleHref={titleHref}>
      <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-9 relative">
        <div className="flex-1 flex flex-col lg:gap-10 gap-[26px] relative w-full">
          <div className="absolute w-[2px] left-[15px] top-4 bg-border-primary -z-10 h-full" />
          {steps.map((step, index) => (
            <div className="flex flex-col lg:gap-2" key={index}>
              <div className="flex flex-row gap-5 lg:gap-6 items-center">
                <div className="w-8 min-w-8 h-8 min-h-8 rounded-full bg-primary-400 border-[2px] pt-[2px] border-background-primary text-center flex items-center justify-center">
                  <h6 className="dark:text-black">{index + 1}</h6>
                </div>
                {renderStepTitle(step)}
              </div>
              <p
                className="pl-[52px] lg:pl-[56px]"
                dangerouslySetInnerHTML={{ __html: step.description }}
              ></p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex pt-0">
          <img
            src={imageSrc}
            className="w-full rounded-[12px] lg:rounded-[16px] object-cover"
            alt={imageAlt}
          />
        </div>
      </div>
    </SectionBox>
  );
};

interface ProcessStep {
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
}

interface ProcessSectionProps {
  title: string;
  header: string;
  steps: ProcessStep[];
  imageSrc: string;
  imageAlt: string;
  titleHref?: string;
}

export default ProcessSectionSlice;