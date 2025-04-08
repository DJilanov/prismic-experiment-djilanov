import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

type ChanceSectionSliceProps = {
  slice: any;
  context?: any;
  children?: React.ReactNode;
}

function ChanceSectionSlice({ slice, context, children }: ChanceSectionSliceProps) {
  // Extract properties with defaults
  const imagePosition = slice.primary.image_position || 'top';
  const imagePositionOppositePhone = slice.primary.image_position_opposite_phone || false;
  const bgColor = slice.primary.bg_color || 'bg-black';
  const titleColor = slice.primary.title_color || 'text-text-diap-primary';
  const descriptionColor = slice.primary.description_color || 'text-text-diap-secondary';
  const bgGradient = slice.primary.bg_gradient || false;
  const noBrushesImage = slice.primary.no_brushes_image || false;
  
  return (
    <section 
      id={slice.primary.section_id || "chance-section"} 
      className="w-screen max-w-[1440px] px-[10px] lg:px-[60px] min-h-[700px] lg:min-h-0 flex justify-center"
    >
      <div className={`${bgColor} w-full py-6 px-5 rounded-3xl flex relative max-w-[1440px] lg:py-[144px] lg:px-[60px] overflow-hidden items-start lg:items-center`}>
        {bgGradient && <div className="absolute w-full h-[150px] bottom-0 left-0 bg-gradient-to-b z-20 from-[#E5FDFF00] via-[#E1FBFE59] to-[#E7FAFC]"></div>}
        
        {slice.primary.person_image && (
          <PrismicNextImage
            field={slice.primary.person_image}
            className={`absolute lg:-right-28 z-1 ${imagePosition === 'bottom' ? `bottom-0 ${imagePositionOppositePhone ? 'lg:top-0' : ''}` : `-bottom-28 ${imagePositionOppositePhone ? '' : 'lg:top-0'}`}`}
            width={839}
            fallbackAlt={slice.primary.person_image_alt || "Person image"}
          />
        )}

        <div className="flex-1 flex-col z-20">
          <div className={`whitespace-pre-line z-10 mb-16 relative hidden lg:flex ${titleColor}`}>
            <PrismicRichText field={slice.primary.title} />
            {!noBrushesImage && slice.primary.brushes_image && (
              <PrismicNextImage
                field={slice.primary.brushes_image}
                className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
                width={279}
                height={45}
                fallbackAlt={slice.primary.brushes_image_alt || "Decorative brushes"}
              />
            )}
            {!noBrushesImage && !slice.primary.brushes_image && (
              <img
                src={'/brushes-yellow.webp'}
                className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
                alt="Decorative brushes"
                width={279}
                height={45}
              />
            )}
          </div>
          
          <div className={`whitespace-pre-line z-10 mb-10 relative ${titleColor} lg:hidden`}>
            <PrismicRichText field={slice.primary.title_mobile || slice.primary.title} />
            {!noBrushesImage && slice.primary.brushes_image && (
              <PrismicNextImage
                field={slice.primary.brushes_image}
                className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
                width={279}
                height={45}
                fallbackAlt={slice.primary.brushes_image_alt || "Decorative brushes"}
              />
            )}
            {!noBrushesImage && !slice.primary.brushes_image && (
              <img
                src={'/brushes-yellow.webp'}
                className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
                alt="Decorative brushes"
                width={279}
                height={45}
              />
            )}
          </div>
          
          <div className="flex flex-col lg:max-w-[597px] gap-6 lg:gap-8">
            <div className={`${descriptionColor} z-10`}>
              <PrismicRichText field={slice.primary.description} />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {children || slice.items.map((item: any, index: number) => (
                <div key={`content-${index}`} className="content-item">
                  <PrismicRichText field={item.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// For backward compatibility
interface ChanceSectionProps {
  title: string;
  description: string;
  personImageSrc: string;
  personImageAlt: string;
  brushesImageSrc?: string;
  brushesImageAlt?: string;
  children: React.ReactNode;
  bgColor?: string;
  imagePosition?: 'top' | 'bottom';
  titleColor?: string;
  descriptionColor?: string;
  imagePositionOpositePhone: boolean;
  noBrushesImage?: boolean;
  bgGradient?: boolean;
}

export const ChanceSection: React.FC<ChanceSectionProps> = ({
  title,
  description,
  personImageSrc,
  personImageAlt,
  brushesImageSrc,
  brushesImageAlt,
  imagePosition = 'top',
  imagePositionOpositePhone = false,
  bgColor = 'bg-black',
  titleColor = 'text-text-diap-primary',
  descriptionColor = 'text-text-diap-secondary',
  bgGradient = false,
  noBrushesImage = false,
  children
}) => {
  return (
    <section id="chance-section" className="w-screen max-w-[1440px] px-[10px] lg:px-[60px] min-h-[700px] lg:min-h-0 flex justify-center">
      <div className={`${bgColor} w-full py-6 px-5 rounded-3xl flex relative max-w-[1440px] lg:py-[144px] lg:px-[60px] overflow-hidden items-start lg:items-center`}>
        {bgGradient && <div className="absolute w-full h-[150px] bottom-0 left-0 bg-gradient-to-b z-20 from-[#E5FDFF00] via-[#E1FBFE59] to-[#E7FAFC]"></div>}
        <img
          src={personImageSrc}
          alt={personImageAlt}
          className={`absolute lg:-right-28 z-1 ${imagePosition === 'bottom' ? `bottom-0 ${imagePositionOpositePhone ? 'lg:top-0' : ''}` : `-bottom-28 ${imagePositionOpositePhone ? '' : 'lg:top-0'}`}`}
          width={839}
        />

        <div className="flex-1 flex-col z-20">
          <h2 className={`whitespace-pre-line z-10 mb-16 relative hidden lg:flex ${titleColor}`}>
            {title}
            {!noBrushesImage && <img
              src={brushesImageSrc ?? '/brushes-yellow.webp'}
              className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
              alt={brushesImageAlt ?? 'brushes-yellow'}
              width={279}
              height={45}
            />}
          </h2>
          <h1 className={`whitespace-pre-line z-10 mb-10 relative ${titleColor} lg:hidden`}>
            {title}
            {!noBrushesImage && <img
              src={brushesImageSrc ?? '/brushes-yellow.webp'}
              className="absolute -bottom-1 lg:-bottom-5 left-4 w-[121px] lg:w-[279px]"
              alt={brushesImageAlt ?? 'brushes-yellow'}
              width={279}
              height={45}
            />}
          </h1>
          <div className="flex flex-col lg:max-w-[597px] gap-6 lg:gap-8">
            <p className={`${descriptionColor} z-10`}>{description}</p>

            <div className="flex flex-col lg:flex-row gap-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChanceSectionSlice;