import { PrismicRichText } from '@prismicio/react';
import CompanyCarousel from '../../sections/carousel-section';

type CompanyCarouselSliceProps = {
  slice: any;
  context?: any;
}

export async function CustomerLogos({ slice, context }: CompanyCarouselSliceProps) {
  // Transform Prismic image items to the format expected by CompanyCarousel
  const companies = slice.items.map((item: any) => ({
    image: item.company_logo,
    alt: item.company_name || ''
  }));

  return (
    <div className={slice.primary.class_string || ''}>
      <div className="rich-text-title">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <CompanyCarousel 
        header={slice.primary.title_text || ''} 
        images={companies}
      />
    </div>
  );
}

export default CustomerLogos;
