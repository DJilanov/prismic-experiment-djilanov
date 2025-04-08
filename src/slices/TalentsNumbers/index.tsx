import React from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

type TalentsNumbersSliceProps = {
  slice: any;
  context?: any;
}

function TalentsNumbersSlice({ slice, context }: TalentsNumbersSliceProps) {
  return (
    <section className="w-screen max-w-[1440px] lg:px-[60px] px-2">
      <div className="bg-primary-400 py-6 px-5 rounded-[12px] lg:px-[60px] lg:py-[56px] lg:rounded-[16px] flex lg:flex-row flex-col">
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1>{slice.primary.first_number}</h1>
          {slice.primary.plus_image && (
            <>
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-12 hidden lg:block"
                fallbackAlt={slice.primary.image_alt || ""}
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 15,
                }}
              />
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallbackAlt={slice.primary.image_alt || ""}
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 12,
                }}
              />
            </>
          )}
          <div className="hidden lg:block">
            <PrismicRichText field={slice.primary.first_text} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.first_text_mobile || slice.primary.first_text} />
          </div>
        </div>
        <div className="bg-text-primary bg-opacity-10 w-full h-[2px] my-6 lg:w-[2px] lg:h-[138px] lg:my-0 lg:mr-9" />
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1>{slice.primary.second_number}</h1>
          {slice.primary.plus_image && (
            <>
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-12 hidden lg:block"
                fallbackAlt={slice.primary.image_alt || ""}
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 15,
                }}
              />
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallbackAlt={slice.primary.image_alt || ""}
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 12,
                }}
              />
            </>
          )}
          <div className="hidden lg:block">
            <PrismicRichText field={slice.primary.second_text} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.second_text_mobile || slice.primary.second_text} />
          </div>
        </div>
        <div className="bg-text-primary bg-opacity-10 w-full h-[2px] my-6 lg:w-[2px] lg:h-[138px] lg:my-0 lg:mr-9" />
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1>{slice.primary.third_number}</h1>
          {slice.primary.plus_image && (
            <>
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-12 hidden lg:block"
                fallbackAlt={slice.primary.image_alt || ""}
                width={133}
                height={34}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 12,
                }}
              />
              <PrismicNextImage
                field={slice.primary.plus_image}
                className="absolute mt-6 lg:mt-10 block lg:hidden"
                fallbackAlt={slice.primary.image_alt || ""}
                width={66}
                height={17}
                imgixParams={{ fit: "crop" }}
                style={{
                  left: 15,
                }}
              />
            </>
          )}
          <div className="hidden lg:block">
            <PrismicRichText field={slice.primary.third_text} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={slice.primary.third_text_mobile || slice.primary.third_text} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentsNumbersSlice;