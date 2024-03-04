/* eslint-disable import/prefer-default-export */
import { NextResponse, type NextRequest } from 'next/server';

import getDomain from 'utils/getDomain';
import getReferencingPaths from 'utils/getReferencingPaths';

type RequestData = {
  recordId: string;
  recordType: string;
  slug?: string;
};

// @see https://nextjs.org/docs/app/api-reference/functions/revalidatePath#examples
export const POST = async (request: NextRequest) => {
  const authorization = request.headers.get('Authorization');

  if (process.env.NODE_ENV !== 'development' && authorization !== `Bearer ${process.env.DATO_API_TOKEN}`) {
    return NextResponse.json({
      revalidated: false,
      error: 'Invalid token',
    });
  }

  const requestData = (await request.json()) as RequestData;

  const paths = await getReferencingPaths(requestData);

  if (paths.length < 1) {
    return NextResponse.json({
      revalidated: false,
      error: `Found no referencing paths for record with ID: ${requestData.recordId}`,
    });
  }

  const domain = getDomain();

  return NextResponse.json({ domain });
};
