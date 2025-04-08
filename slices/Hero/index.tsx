import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicNextLink } from '@prismicio/next';
import { type Content } from '@prismicio/client';

type HeroSliceProps = {
  slice: Content.HeroSlice | any;
  context?: any;
}

const Hero = ({ slice }: HeroSliceProps) => {
  
  return (
    <div className='w-full lg:h-[862px] h-[95vh] relative bg-gradient-to-b from-[#dae9ef] via-[#ddf3f4] to-[#eef5f6] lg:px-[120px] lg:pt-[159px] lg:pb-[80px]'>
      {slice.primary.header_man_image && (
        <PrismicNextImage
          field={slice.primary.header_man_image}
          className='absolute -left-12 lg:left-1/2 lg:transform lg:translate-x-[calc(-50%+320px)] w-auto h-[40%] bottom-1 lg:top-[68px] lg:h-[584px] z-0'
          fallbackAlt=""
        />
      )}

      {slice.primary.header_woman_image && (
        <PrismicNextImage
          field={slice.primary.header_woman_image}
          className='w-auto h-[35%] lg:h-[529px] -right-12 lg:right-auto lg:left-1/2 lg:transform lg:translate-x-[calc(-50%+630px)] bottom-1 lg:top-[142px] absolute'
          fallbackAlt=""
        />
      )}
      
      <div className='w-full hidden lg:block lg:h-[300px] top-[434px] absolute bg-gradient-to-b from-transparent via-[#dcf2f3] to-[#E6F3F4]'/>
      <div className='w-full h-[20px] z-10 lg:hidden bottom-0 absolute bg-gradient-to-b from-[#dcf2f3]/20 via-[#dcf2f3]/80 to-[#E6F3F4]'/>
      <div className='w-full h-[30%] z-10 lg:hidden bottom-0 absolute bg-gradient-to-b from-transparent via-transparent to-white'/>

      <div className='min-h-[623px] flex-col justify-start items-start gap-40 hidden lg:flex max-w-[1440px] mx-auto'>
        <div className='w-[608px] h-[136px] relative'>
          <div className="w-[797px] left-0 top-0 absolute text-[#121c24] text-[64px] font-bold font-['Apercu Pro'] leading-[68px] whitespace-pre-line">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>
        <div className='self-stretch min-h-[327px] flex-col justify-start items-start gap-16 z-10'>
          <div className='self-stretch justify-start items-start gap-6 inline-flex'>
            <div className='flex-1 grow shrink basis-0 self-stretch px-[60px] pt-10 pb-14 bg-[#f6f7f8] rounded-2xl flex-col justify-start items-start gap-2 inline-flex'>
              <div className='self-stretch min-h-[215px] h-full flex-col justify-start items-start gap-2 flex'>
                <div className="self-stretch text-[#121c24] text-[32px] font-bold font-['Apercu Pro'] leading-[38.40px]">
                  <PrismicRichText field={slice.primary.find_jobs_title} />
                </div>
                <div className='self-stretch flex-col justify-between h-full items-start gap-8 flex'>
                  <div className="self-stretch text-[#121c24] text-lg font-normal font-['Apercu Pro'] leading-[27px]">
                    <PrismicRichText field={slice.primary.find_jobs_description} />
                  </div>
                  <PrismicNextLink 
                    field={slice.primary.find_jobs_button_link}
                    className='min-h-14 px-8 py-2.5 bg-[#fed27a] rounded-xl justify-center items-center gap-3 inline-flex'
                  >
                    <div className="text-center text-[#121c24] text-lg font-bold font-['Apercu Pro'] leading-[27px]">
                      {slice.primary.find_jobs_button_text}
                    </div>
                  </PrismicNextLink>
                </div>
              </div>
            </div>
            <div className='flex-1 grow shrink basis-0 self-stretch px-[60px] pt-10 pb-14 bg-[#242424] rounded-2xl flex-col justify-between gap-2 inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-2 flex'>
                <div className="self-stretch !text-white text-[32px] font-bold font-['Apercu Pro'] leading-[38.40px]">
                  <PrismicRichText field={slice.primary.hire_talent_title} />
                </div>
                <div className='self-stretch grow shrink basis-0 flex-col justify-between gap-8 h-full items-start flex'>
                  <div className="self-stretch !text-white text-lg font-normal font-['Apercu Pro'] leading-[27px]">
                    <PrismicRichText field={slice.primary.hire_talent_description} />
                  </div>
                  <PrismicNextLink 
                    field={slice.primary.hire_talent_button_link}
                    className='min-h-14 px-8 py-2.5 bg-[#fed27a] rounded-xl justify-center items-center gap-3 inline-flex'
                  >
                    <div className="text-center text-[#242424] text-lg font-bold font-['Apercu Pro'] leading-[27px]">
                      {slice.primary.hire_talent_button_text}
                    </div>
                  </PrismicNextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 pt-[120px] pb-8 flex-col justify-start items-start gap-8 inline-flex overflow-hidden lg:hidden'>
        <div className='self-stretch h-[188px] flex-col justify-start items-start gap-10 flex'>
          <div className='h-[76px] relative w-full'>
            <h1 className='z-10 absolute w-full leading-[38.40px] whitespace-pre-line'>
              <PrismicRichText field={slice.primary.mobile_title} />
            </h1>
          </div>
          <div className='self-stretch h-[72px] flex-col justify-start items-start gap-8 flex'>
            <div className="self-stretch text-[#28333e] text-base font-normal @font-['Apercu Pro'] leading-normal">
              <PrismicRichText field={slice.primary.mobile_description} />
            </div>
          </div>
        </div>
        <div className='self-stretch justify-center gap-4 items-start inline-flex'>
          <div className='w-full h-[60px] px-4 py-2.5 bg-[#f6f7f8] rounded-lg justify-center items-center gap-3 flex z-10'>
            <FontAwesomeIcon icon={faArrowRight} className='w-6 h-6'/>
            <PrismicNextLink 
              field={slice.primary.find_jobs_button_link}
              className="text-center text-[#121c24] text-base font-bold font-['Apercu Pro'] leading-normal"
            >
              {slice.primary.find_jobs_button_text}
            </PrismicNextLink>
          </div>
          <div className='w-full h-[60px] px-4 py-2.5 bg-[#242424] rounded-lg justify-center items-center gap-3 flex z-10'>
            <FontAwesomeIcon icon={faArrowRight} className='w-6 h-6 text-white'/>
            <PrismicNextLink 
              field={slice.primary.hire_talent_button_link}
              className="text-center !text-white text-base font-semibold !font-['Apercu Pro'] leading-normal"
            >
              {slice.primary.hire_talent_button_text}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;