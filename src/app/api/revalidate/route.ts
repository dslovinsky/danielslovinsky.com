/* eslint-disable import/prefer-default-export */
import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

// @see https://nextjs.org/docs/app/api-reference/functions/revalidatePath#examples
export const GET = async (request: NextRequest) => {
  const token = request.headers.get('x-api-token');

  if (process.env.NODE_ENV !== 'development' && token !== process.env.DATO_API_TOKEN) {
    return NextResponse.json({ revalidated: false, now: Date.now(), error: 'Invalid token' });
  }

  const path = request.nextUrl.searchParams.get('path');

  if (!path) {
    return NextResponse.json({ revalidated: false, now: Date.now(), error: 'No path provided' });
  }

  revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
};
