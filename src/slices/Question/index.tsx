import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { createClient } from '@/prismicio';
import QuestionSlice from '.';
import { getServerTranslations } from '@/i18n/server';
import { isFilled } from '@prismicio/client';

type FAQSectionSliceProps = {
  slice: any;
  context?: any;
}

async function FAQSectionSlice({ slice, context }: FAQSectionSliceProps) {
  const { language } = await getServerTranslations('translation');
  const isGerman = language === 'de';

  // Get language-specific content for title
  const titleField = isGerman
    ? (isFilled.richText(slice.primary.title_de) ? slice.primary.title_de : slice.primary.title)
    : (isFilled.richText(slice.primary.title_en) ? slice.primary.title_en : slice.primary.title);

  // Get language-specific content for description
  const descriptionField = isGerman
    ? (isFilled.richText(slice.primary.description_de) ? slice.primary.description_de : slice.primary.description)
    : (isFilled.richText(slice.primary.description_en) ? slice.primary.description_en : slice.primary.description);

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
      {titleField && (
        <div className="faq-title">
          <PrismicRichText field={titleField} />
        </div>
      )}
      
      {descriptionField && (
        <div className="faq-description">
          <PrismicRichText field={descriptionField} />
        </div>
      )}
      
      <div className="faq-questions">
        {questions.map((question: any, index: number) => (
          <QuestionSlice 
            key={`question-${index}`} 
            slice={question}
            context={{ language }}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQSectionSlice;