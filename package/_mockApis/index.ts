import mock from './mockAdapter';

import './header/Menu';
import './custom-components';

mock.onAny().passThrough();
