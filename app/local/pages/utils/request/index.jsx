import React, { useEffect } from 'react';
import Ajax from '~/utils/request';

export default () => {
  useEffect(() => {
    Ajax({
      url: '/',
    }).then((e) => console.log(11, e)).catch((e) => console.log(22, e));
  }, []);
  return <div>123</div>
}
