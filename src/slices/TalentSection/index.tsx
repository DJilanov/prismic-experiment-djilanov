import React from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { getServerTranslations } from '@/i18n/server';
import { isFilled } from '@prismicio/client';

type TalentSectionSliceProps = {
  slice: any;
  context?: any;
}

async function TalentSectionSlice({ slice, context }: TalentSectionSliceProps) {
  const { language } = await getServerTranslations('translation');
  const isGerman = language === 'de';

  // Get language-specific content for title fields
  const firstTitleField = isGerman
    ? (slice.primary.first_title_de || slice.primary.first_title)
    : (slice.primary.first_title_en || slice.primary.first_title);

  const secondTitleField = isGerman
    ? (slice.primary.second_title_de || slice.primary.second_title)
    : (slice.primary.second_title_en || slice.primary.second_title);

  const thirdTitleField = isGerman
    ? (slice.primary.third_title_de || slice.primary.third_title)
    : (slice.primary.third_title_en || slice.primary.third_title);

  // Get language-specific content for info fields using rich text
  const firstInfoField = isGerman
    ? (isFilled.richText(slice.primary.first_info_de) ? slice.primary.first_info_de : slice.primary.first_info)
    : (isFilled.richText(slice.primary.first_info_en) ? slice.primary.first_info_en : slice.primary.first_info);

  const secondInfoField = isGerman
    ? (isFilled.richText(slice.primary.second_info_de) ? slice.primary.second_info_de : slice.primary.second_info)
    : (isFilled.richText(slice.primary.second_info_en) ? slice.primary.second_info_en : slice.primary.second_info);

  const thirdInfoField = isGerman
    ? (isFilled.richText(slice.primary.third_info_de) ? slice.primary.third_info_de : slice.primary.third_info)
    : (isFilled.richText(slice.primary.third_info_en) ? slice.primary.third_info_en : slice.primary.third_info);

  // Get language-specific content for mobile info fields
  const firstInfoMobileField = isGerman
    ? (isFilled.richText(slice.primary.first_info_mobile_de) 
        ? slice.primary.first_info_mobile_de 
        : (isFilled.richText(slice.primary.first_info_de) 
            ? slice.primary.first_info_de 
            : (slice.primary.first_info_mobile || slice.primary.first_info)))
    : (isFilled.richText(slice.primary.first_info_mobile_en) 
        ? slice.primary.first_info_mobile_en 
        : (isFilled.richText(slice.primary.first_info_en) 
            ? slice.primary.first_info_en 
            : (slice.primary.first_info_mobile || slice.primary.first_info)));

  const secondInfoMobileField = isGerman
    ? (isFilled.richText(slice.primary.second_info_mobile_de) 
        ? slice.primary.second_info_mobile_de 
        : (isFilled.richText(slice.primary.second_info_de) 
            ? slice.primary.second_info_de 
            : (slice.primary.second_info_mobile || slice.primary.second_info)))
    : (isFilled.richText(slice.primary.second_info_mobile_en) 
        ? slice.primary.second_info_mobile_en 
        : (isFilled.richText(slice.primary.second_info_en) 
            ? slice.primary.second_info_en 
            : (slice.primary.second_info_mobile || slice.primary.second_info)));

  const thirdInfoMobileField = isGerman
    ? (isFilled.richText(slice.primary.third_info_mobile_de) 
        ? slice.primary.third_info_mobile_de 
        : (isFilled.richText(slice.primary.third_info_de) 
            ? slice.primary.third_info_de 
            : (slice.primary.third_info_mobile || slice.primary.third_info)))
    : (isFilled.richText(slice.primary.third_info_mobile_en) 
        ? slice.primary.third_info_mobile_en 
        : (isFilled.richText(slice.primary.third_info_en) 
            ? slice.primary.third_info_en 
            : (slice.primary.third_info_mobile || slice.primary.third_info)));

  return (
    <section className="w-screen lg:px-[60px] px-2">
      <div className="bg-primary-400 py-6 px-5 rounded-[12px] lg:px-[60px] lg:py-[56px] lg:rounded-[16px] flex flex-row">
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1 className="z-10">{firstTitleField}</h1>
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
            <PrismicRichText field={firstInfoField} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={firstInfoMobileField} />
          </div>
        </div>
        
        <div className="bg-text-primary bg-opacity-10 w-[2px] h-[62px] lg:h-[138px] my-auto mr-9" />
        
        <div className="flex flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative">
          <h1 className="z-10">{secondTitleField}</h1>
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
            <PrismicRichText field={secondInfoField} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={secondInfoMobileField} />
          </div>
        </div>
        
        <div className="bg-text-primary bg-opacity-10 w-full h-[2px] my-6 lg:w-[2px] lg:h-[138px] lg:my-0 lg:mr-9 hidden lg:flex" />
        
        <div className="flex-1 flex-col lg:py-4 gap-3 lg:gap-4 relative hidden lg:flex">
          <h1 className="z-10">{thirdTitleField}</h1>
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
            <PrismicRichText field={thirdInfoField} />
          </div>
          <div className="lg:hidden">
            <PrismicRichText field={thirdInfoMobileField} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalentSectionSlice;