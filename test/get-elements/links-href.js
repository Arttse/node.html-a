'use strict';

import fs from 'fs';
import test from 'ava';
import m from '../../';

const html = fs.readFileSync ( '../html/links-href.html', 'utf8' );

test ( t => {

  const a = m.getElements ( html );

  // <a href="http://site.com"><b>Some site</b></a>
  t.is ( a[0].type, 'tag' );
  t.is ( a[0].name, 'a' );
  t.is ( a[0].attribs.href, 'http://site.com' );
  t.true ( a[0].children !== null );
  t.true ( a[0].next !== null );
  t.true ( a[0].prev !== null );
  t.true ( a[0].parent !== null );

  // <a href="#first">Link in page</a>
  t.is ( a[1].type, 'tag' );
  t.is ( a[1].name, 'a' );
  t.is ( a[1].attribs.href, '#first' );
  t.true ( a[1].children !== null );
  t.true ( a[1].next !== null );
  t.true ( a[1].prev !== null );
  t.true ( a[1].parent !== null );

  // <a href="javascript:alert('Hello, World!');">Hello!</a>
  t.is ( a[2].type, 'tag' );
  t.is ( a[2].name, 'a' );
  t.is ( a[2].attribs.href, `javascript:alert('Hello, World!');` );
  t.true ( a[2].children !== null );
  t.true ( a[2].next !== null );
  t.true ( a[2].prev !== null );
  t.true ( a[2].parent !== null );

  // <a href="/foo/bar">FooBar</a>
  t.is ( a[3].type, 'tag' );
  t.is ( a[3].name, 'a' );
  t.is ( a[3].attribs.href, '/foo/bar' );
  t.true ( a[3].children !== null );
  t.true ( a[3].next !== null );
  t.true ( a[3].prev !== null );
  t.true ( a[3].parent !== null );

} );
