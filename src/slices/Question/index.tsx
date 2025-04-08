import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';
import QuestionSlice from '../Question';

type FAQSectionSliceProps = {
  slice: any;
  context?: any;
}

async function FAQSectionSlice({ slice, context }: FAQSectionSliceProps) {
  // Fetch questions if they're linked rather than embedded
  let questions = slice.items;
  
  if (slice.primary.fetch_questions && slice.primary.faq_content_type) {
    const client = createClient();
    const faqContent: any = await client.getSingle(slice.primary.faq_content_type);
    
    if (faqContent && faqContent.data && faqContent.data.slices) {
      questions = faqContent.data.slices.filter((slice: any) => slice.slice_type === 'question');
    }
  }

  return (
    <div className="faq-section">
      {slice.primary.title && (
        <div className="faq-title">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      
      {slice.primary.description && (
        <div className="faq-description">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      
      <div className="faq-questions">
        {questions.map((question: any, index: number) => (
          <QuestionSlice 
            key={`question-${index}`} 
            slice={question}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQSectionSlice;
