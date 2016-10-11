'use strict';

import fs from 'fs';
import test from 'ava';
import m from '../../';

const html = fs.readFileSync ( '../html/no-links.html', 'utf8' );

test ( t => {

  const out = m.getElements ( html );

  t.true ( out.length === 0 );

} );
