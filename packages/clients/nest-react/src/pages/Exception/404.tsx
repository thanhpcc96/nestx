import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { Exception } from 'ant-design-pro';

const Exception404 = () => (
  <Exception
    type="404"
    desc={formatMessage({ id: 'app.exception.description.404' })}
    linkElement={Link as any}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception404;
