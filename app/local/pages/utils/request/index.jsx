import React, { useEffect } from 'react';
import Request from '@/utils/request';

export default () => {
  useEffect(() => {
    Request({
      url: '/',
    }).then((e) => console.log(11, e)).catch((e) => console.log(22, e));
  }, []);
  return <div>123</div>
}
