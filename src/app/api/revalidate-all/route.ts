/* eslint-disable import/prefer-default-export */
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import graphqlQuery from 'graphql/apolloClient';
import { AllTemplatePageSlugsDocument } from 'graphql/sdk';

import type { NextRequest } from 'next/server';

const delayedLoop = async <T>(array: T[], callback: (item: T) => void, delay = 10) => {
  for (const item of array) {
    await new Promise(resolve => setTimeout(resolve, delay));
    callback(item);
  }
};

// @see https://nextjs.org/docs/app/api-reference/functions/revalidatePath#examples
export const GET = async (request: NextRequest) => {
  const token = request.headers.get('x-api-token');

  if (process.env.NODE_ENV !== 'development' && token !== process.env.DATO_API_TOKEN) {
    return NextResponse.json({ revalidated: false, now: Date.now(), error: 'Invalid token' });
  }

  // TODO: Add all templates here
  const { allTemplatePages } = await graphqlQuery<AllTemplatePageSlugsQuery>(AllTemplatePageSlugsDocument);

  // revlidating all at once doesn't work without delay
  await delayedLoop(
    allTemplatePages,
    ({ slug }) => {
      const path = slug === 'home' ? '/' : `/${slug}`;

      revalidatePath(path);
    },
    5,
  );

  return NextResponse.json({ revalidated: true, now: Date.now() });
};
