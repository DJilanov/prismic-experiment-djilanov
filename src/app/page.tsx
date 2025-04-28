import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { components } from '../slices';
import { getLocales } from '@/utils/getLocales';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { lang = '' },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const home: any = await client.getByUID('page', 'home', { lang }).catch(() => notFound());
  
  // Get site settings for global defaults
  const settings: any = await client.getSingle('site_settings' as any, { lang }).catch(() => null);
  
  // Get all available locales for the page for hreflang tags
  const locales = await getLocales(home, client);
  
  // Determine canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const canonical = `${baseUrl}/${lang === 'en-us' ? 'en' : lang.split('-')[0]}`;
  
  // Create alternate language URLs for hreflang tags
  const alternateLanguages: Record<string, string> = {};
  locales.forEach((locale) => {
    // Convert Prismic language codes to web format (e.g., "en-us" to "en")
    const langCode = locale.lang.split('-')[0];
    alternateLanguages[langCode] = `${baseUrl}/${langCode}`;
  });
  
  // Using nullish coalescing for fallbacks
  const title = prismic.asText(home.data.title) ?? 
                (settings?.data.default_title ? prismic.asText(settings.data.default_title) : 'Home');
                
  const description = home.data.meta_description ?? 
                      (settings?.data.default_description ?? '');
  
  // Get meta title with fallbacks
  const metaTitle = home.data.meta_title ?? 
                   prismic.asText(home.data.title) ?? 
                   (settings?.data.default_title ? prismic.asText(settings.data.default_title) : 'Home');
  
  // Get OG image with fallbacks
  const ogImage = home.data.meta_image?.url ?? 
                  settings?.data.default_og_image?.url;
  
  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    
    // Basic Meta
    keywords: home.data.meta_keywords ?? '',
    
    // Robots
    robots: home.data.no_index ? { index: false, follow: false } : { index: true, follow: true },
    
    // OpenGraph
    openGraph: {
      title: metaTitle,
      description,
      url: canonical,
      siteName: settings?.data.site_name ?? 'Your Site',
      locale: lang.replace('-', '_'), // Convert en-us to en_US format for OG
      type: 'website',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: home.data.meta_image_alt ?? metaTitle,
          },
        ],
      }),
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      ...(settings?.data.twitter_handle && { creator: settings.data.twitter_handle }),
      ...(ogImage && { images: [ogImage] }),
    },
    
    // Alternate languages (for SEO)
    alternates: {
      canonical,
      languages: alternateLanguages,
      // Add x-default (usually English) for search engines
      ...(alternateLanguages.en && { 'x-default': alternateLanguages.en }),
    },
  };
}

export default async function Index({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();
  const home = await client.getByUID('page', 'home', {
    lang,
  });
  const locales = await getLocales(home, client);

  return (
    <div className='pb-20'>
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  );
}