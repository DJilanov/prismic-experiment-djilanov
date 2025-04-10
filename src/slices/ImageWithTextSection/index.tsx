import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

type ImageWithTextSectionSliceProps = {
  slice: any;
  context?: any;
  children?: React.ReactNode;
}

function ImageWithTextSectionSlice({ slice, context, children }: ImageWithTextSectionSliceProps) {
  const imagePosition = slice.primary.image_position || 'right';
  
  return (
    <section
      id={slice.primary.section_id || undefined}
      className="w-full px-5 py-14 lg:px-10 lg:py-[120px] xl:p-[120px] flex flex-col gap-10 dark:text-gray-300"
    >
      <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-3 lg:gap-10`}>
        <div className="flex-1 min-w-0 mb-2 hidden lg:block">
          {slice.primary.image && (
            <PrismicNextImage
              field={slice.primary.image}
              className="w-full h-full object-cover rounded-[16px]"
              fallbackAlt={slice.primary.image_alt || ""}
            />
          )}
        </div>
        <div className={`flex-1 min-w-0 flex flex-col gap-10 lg:gap-2 ${imagePosition == 'right' ? 'lg:pr-6' : 'lg:pl-6'}`}>
          <div className='flex flex-col gap-6'>
            <div className="text-overheader dark:text-gray-300">
              <PrismicRichText field={slice.primary.header} />
            </div>
            <div className='whitespace-pre-line'>
              <PrismicRichText field={slice.primary.title} />
            </div>
          </div>
          <div className="flex-1 min-w-0 mb-2 lg:hidden">
            {slice.primary.image && (
              <PrismicNextImage
                field={slice.primary.image}
                className="w-full h-full object-cover rounded-[16px]"
                fallbackAlt={slice.primary.image_alt || ""}
              />
            )}
          </div>
          <div className="whitespace-pre-line text-text-secondary">
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div className="flex-col gap-4 hidden lg:flex">
            {children || slice.items.map((item: any, index: number) => (
              <div key={`content-${index}`} className="content-item">
                <PrismicRichText field={item.content} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col gap-4 flex lg:hidden">
          {children || slice.items.map((item: any, index: number) => (
            <div key={`content-mobile-${index}`} className="content-item">
              <PrismicRichText field={item.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// For backward compatibility
export const ImageWithTextSection: React.FC<ImageWithTextSectionProps> = ({ 
  title, 
  header, 
  id, 
  children, 
  text, 
  imagePosition, 
  image, 
  altImage 
}) => {
  return (
    <section
      id={id}
      className="w-full px-5 py-14 lg:px-10 lg:py-[120px] xl:p-[120px] flex flex-col gap-10 dark:text-gray-300"
    >
      <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-3 lg:gap-10`}>
        <div className="flex-1 min-w-0 mb-2 hidden lg:block">
          <img src={image} alt={altImage} className="w-full h-full object-cover rounded-[16px]" />
        </div>
        <div className={`flex-1 min-w-0 flex flex-col gap-10 lg:gap-2 ${imagePosition == 'right' ? 'lg:pr-6' : 'lg:pl-6'}`}>
          <div className='flex flex-col gap-6'>
            <h6 className="text-overheader dark:text-gray-300">{header}</h6>
            <h2 className='whitespace-pre-line'>{title}</h2>
          </div>
          <div className="flex-1 min-w-0 mb-2 lg:hidden">
            <img src={image} alt={altImage} className="w-full h-full object-cover rounded-[16px]" />
          </div>
          <p className=" whitespace-pre-line text-text-secondary">{text}</p>
          <div className=" flex-col gap-4 hidden lg:flex">
            {children}
          </div>
        </div>
        <div className=" flex-col gap-4 flex lg:hidden">
          {children}
        </div>
      </div>
    </section>
  );
};

// Type definitions
interface ImageWithTextSectionProps extends React.PropsWithChildren {
  title: string;
  header: string;
  id?: string;
  text: string;
  imagePosition: 'left' | 'right';
  image: string;
  altImage: string;
}

export default ImageWithTextSectionSlice;