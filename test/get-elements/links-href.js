'use strict'

import path from 'path'
import fs from 'fs'
import test from 'ava'
import m from '../../'

const isObj = arg => {
  return arg !== null && typeof arg === 'object' && !Array.isArray(arg)
}
const html = fs.readFileSync(path.join(__dirname, '../html/links-href.html'), 'utf8')

test(t => {
  const a = m.getElements(html)

  t.true(Array.isArray(a))
  t.true(a.length === 4)

  // <a href="http://site.com"><b>Some site</b></a>
  t.is(a[0].type, 'tag')
  t.is(a[0].name, 'a')
  t.true(isObj(a[0].attribs))
  t.is(a[0].attribs.href, 'http://site.com')
  t.true(Array.isArray(a[0].children))
  t.true(isObj(a[0].next))
  t.true(isObj(a[0].prev))
  t.true(isObj(a[0].parent))

  // <a href="#first">Link in page</a>
  t.is(a[1].type, 'tag')
  t.is(a[1].name, 'a')
  t.true(isObj(a[1].attribs))
  t.is(a[1].attribs.href, '#first')
  t.true(Array.isArray(a[1].children))
  t.true(isObj(a[1].next))
  t.true(isObj(a[1].prev))
  t.true(isObj(a[1].parent))

  // <a href="javascript:alert('Hello, World!');">Hello!</a>
  t.is(a[2].type, 'tag')
  t.is(a[2].name, 'a')
  t.true(isObj(a[2].attribs))
  t.is(a[2].attribs.href, `javascript:alert('Hello, World!');`)
  t.true(Array.isArray(a[2].children))
  t.true(isObj(a[2].next))
  t.true(isObj(a[2].prev))
  t.true(isObj(a[2].parent))

  // <a href="/foo/bar">FooBar</a>
  t.is(a[3].type, 'tag')
  t.is(a[3].name, 'a')
  t.true(isObj(a[3].attribs))
  t.is(a[3].attribs.href, '/foo/bar')
  t.true(Array.isArray(a[3].children))
  t.true(isObj(a[3].next))
  t.true(isObj(a[3].prev))
  t.true(isObj(a[3].parent))
})
