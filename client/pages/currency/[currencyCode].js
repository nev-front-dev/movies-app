import React from 'react';
import { useRouter } from 'next/router';
import Rates from '../../components/rates';

export default function CurrencyCode() {
    const router = useRouter();
const {currencyCode} = router.query;

  return <div>
      <Rates currencyCode={currencyCode}/>
  </div>;
}
