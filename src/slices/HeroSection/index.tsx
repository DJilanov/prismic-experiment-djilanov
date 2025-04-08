import { faArrowDown } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { ScrollABit } from "socialbee-ui";

type HeroSectionSliceProps = {
  slice: any;
  context?: any;
  children?: ReactNode;
}

function HeroSectionSlice({ slice, context, children }: HeroSectionSliceProps) {
  // Default values and fallbacks
  const stripeStyle = slice.primary.stripe_style ? JSON.parse(slice.primary.stripe_style) : undefined;
  const stripeStylePhone = slice.primary.stripe_style_phone ? JSON.parse(slice.primary.stripe_style_phone) : undefined;
  const backgroundPosition = slice.primary.background_position || undefined;
  const onSubmitId = slice.primary.on_submit_id || 'contact';
  const onMoreId = slice.primary.on_more_id || 'more';
  
  return (
    <section
      className={`w-screen relative px-5 pt-[120px] bg-bottom lg:content-center overflow-hidden h-[840px] lg:min-h-[795px] lg:h-[90dvh] lg:pt-[144px] lg:pl-[140px] bg-cover lg:bg-center ${backgroundPosition && 'lg:bg-' + backgroundPosition}`}
      style={{ 
        backgroundImage: slice.primary.background_image ? 
          `url(${slice.primary.background_image.url})` : 
          undefined 
      }}
    >
      <div className="relative flex flex-col gap-10 lg:gap-[56px]">
        <h1 className="text-text-primary whitespace-pre-line relative">
          <span
            style={{
              position: 'relative',
              zIndex: stripeStyle?.zIndex === -1 ? 2 : 1,
            }}
          >
            <PrismicRichText field={slice.primary.title} />
          </span>
          {slice.primary.stripe_image ? (
            <>
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute hidden lg:block"
                fallback="decorative stripe"
                imgixParams={{ fit: "crop" }}
                style={stripeStyle}
              />
              <PrismicNextImage
                field={slice.primary.stripe_image}
                className="absolute lg:hidden"
                fallback="decorative stripe"
                imgixParams={{ fit: "crop" }}
                style={stripeStylePhone}
              />
            </>
          ) : (
            <>
              <img
                src={'/brushes-yellow.webp'}
                className="absolute hidden lg:block"
                alt="yellow stripe"
                style={stripeStyle}
              />
              <img
                src={'/brushes-yellow.webp'}
                className="absolute lg:hidden"
                alt="yellow stripe"
                style={stripeStylePhone}
              />
            </>
          )}
        </h1>
        <div className="flex flex-col gap-8">
          <div className="lg:w-[597px] whitespace-pre-wrap">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center w-fit">
            <ScrollABit 
              className="button-bold bg-primary-400 h-14 rounded-[12px] py-[10px] px-8" 
              elementId={onSubmitId}
            >
              {slice.primary.button_text || 'Submit'}
            </ScrollABit>
            <ScrollABit elementId={onMoreId}>
              <>
                <FontAwesomeIcon icon={faArrowDown} className="w-3 h-3 button-bold" />
                {slice.primary.more_text || 'Learn More'}
              </>
            </ScrollABit>
          </div>
        </div>
      </div>
    </section>
  );
}

// For backward compatibility
interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  children?: ReactNode;
  stripeStyle?: React.CSSProperties | undefined;
  stripeStylePhone?: React.CSSProperties | undefined;
  buttonText: string;
  moreText: string;
  onSubmitId: string;
  onMoreId: string;
  backgroundPosition?: string | undefined;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  stripeStyle,
  stripeStylePhone,
  buttonText,
  moreText,
  onSubmitId,
  onMoreId,
  backgroundPosition,
}) => {
  return (
    <section
      className={`w-screen relative px-5 pt-[120px] bg-bottom lg:content-center overflow-hidden h-[840px] lg:min-h-[795px] lg:h-[90dvh] lg:pt-[144px] lg:pl-[140px] bg-cover lg:bg-center ${backgroundPosition && 'lg:bg-' + backgroundPosition}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative flex flex-col gap-10 lg:gap-[56px]">
        <h1 className="text-text-primary whitespace-pre-line relative">
          <span
            style={{
              position: 'relative',
              zIndex: stripeStyle?.zIndex === -1 ? 2 : 1,
            }}
          >
            {title}
          </span>
          <img
            src={'/brushes-yellow.webp'}
            className="absolute hidden lg:block"
            alt="yellow stripe"
            style={stripeStyle}
          />
          <img
            src={'/brushes-yellow.webp'}
            className="absolute lg:hidden"
            alt="yellow stripe"
            style={stripeStylePhone}
          />
        </h1>
        <div className="flex flex-col gap-8">
          <p className="lg:w-[597px] whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: description }} />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center w-fit">
            <ScrollABit className="button-bold bg-primary-400 h-14 rounded-[12px] py-[10px] px-8" elementId={onSubmitId}>
              {buttonText}
            </ScrollABit>
            <ScrollABit elementId={onMoreId}>
              <>
                <FontAwesomeIcon icon={faArrowDown} className="w-3 h-3 button-bold" />
                {moreText}
              </>
            </ScrollABit>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSlice;
