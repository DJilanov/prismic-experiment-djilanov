import React from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

type TalentSectionSliceProps = {
  slice: any;
  context?: any;
}

function TalentSectionSlice({ slice, context }: TalentSectionSliceProps) {
  return (
    <section className="w-screen max-w-[1440px] lg:px-[60px] px-2">
      <div className="bg-primary-400 py-6 px-5 rounded-[12px] lg:px-[60px] lg:py-[56px] lg:rounded-[16px] flex flex-row">
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1 className="z-10">{slice.primary.first_title}</h1>
          {slice.primary.stripe_image && (
            <>
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-11 hidden lg:block"
                fallback="white stripe"
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{ left: 15 }}
              />
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallback="white stripe"
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{ left: 12 }}
              />
            </>
          )}
          <div className="text-[18px] whitespace-pre-line lg:block hidden">
            <PrismicRichText field={slice.primary.first_info} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.first_info_mobile || slice.primary.first_info} />
          </div>
        </div>
        
        <div className="bg-text-primary bg-opacity-10 w-[2px] h-[62px] lg:h-[138px] my-auto mr-9" />
        
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1 className="z-10">{slice.primary.second_title}</h1>
          {slice.primary.stripe_image && (
            <>
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-11 hidden lg:block"
                fallback="white stripe"
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{ left: 15 }}
              />
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallback="white stripe"
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{ left: 12 }}
              />
            </>
          )}
          <div className="text-[18px] whitespace-pre-line lg:block hidden">
            <PrismicRichText field={slice.primary.second_info} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.second_info_mobile || slice.primary.second_info} />
          </div>
        </div>
        
        <div className="bg-text-primary bg-opacity-10 w-full h-[2px] my-6 lg:w-[2px] lg:h-[138px] lg:my-0 lg:mr-9 hidden lg:flex" />
        
        <div className="flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative hidden lg:flex">
          <h1 className="z-10">{slice.primary.third_title}</h1>
          {slice.primary.stripe_image && (
            <>
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-11 hidden lg:block"
                fallback="white stripe"
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{ left: 12 }}
              />
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallback="white stripe"
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{ left: 15 }}
              />
            </>
          )}
          <div className="text-[18px] whitespace-pre-line z-10 hidden lg:block">
            <PrismicRichText field={slice.primary.third_info} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.third_info_mobile || slice.primary.third_info} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentSectionSlice;