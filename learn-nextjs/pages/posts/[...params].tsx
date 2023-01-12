import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsSpaceProps {}

export default function ParamsSpace(props: ParamsSpaceProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Params Detail Page</h1>
      <p>Query : {JSON.stringify(router.query)}</p>
    </div>
  );
}
