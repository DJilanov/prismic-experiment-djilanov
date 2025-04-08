import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { components } from '../../slices';
import { getLocales } from '@/utils/getLocales';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const pages = await client.getAllByType("page", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    lang: "en-us",
  });
  const home = await client.getByUID('page', 'home', { lang }).catch(() => notFound());

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || '',
        },
      ],
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
    <>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}