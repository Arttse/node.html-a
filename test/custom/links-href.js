'use strict'

import path from 'path'
import fs from 'fs'
import test from 'ava'
import m from '../../'

const isObj = arg => {
  return arg !== null && typeof arg === 'object' && !Array.isArray(arg)
}
const html = fs.readFileSync(path.join(__dirname, '../html/links-href.html'), 'utf8')

test('default-opts', t => {
  const out = m(html)

  t.true(Array.isArray(out))
  t.true(out.length === 4)

  t.is(out[0].innerHTML, '<b>Some site</b>')
  t.is(out[0].href, 'http://site.com')
  t.is(out[0].text, undefined)
  t.is(out[0].attributes, undefined)
  t.is(out[0].element, undefined)

  t.is(out[1].innerHTML, 'Link in page')
  t.is(out[1].href, '#first')
  t.is(out[1].text, undefined)
  t.is(out[1].attributes, undefined)
  t.is(out[1].element, undefined)

  t.is(out[2].innerHTML, 'Hello!')
  t.is(out[2].href, `javascript:alert('Hello, World!');`)
  t.is(out[2].text, undefined)
  t.is(out[2].attributes, undefined)
  t.is(out[2].element, undefined)

  t.is(out[3].innerHTML, 'FooBar')
  t.is(out[3].href, '/foo/bar')
  t.is(out[3].text, undefined)
  t.is(out[3].attributes, undefined)
  t.is(out[3].element, undefined)
})

test('default-opts-reverse', t => {
  const out = m(
    html,
    {
      text: true,
      innerHTML: false,
      href: false,
      attributes: true,
      element: true
    }
  )

  t.is(out[0].innerHTML, undefined)
  t.is(out[0].href, undefined)
  t.is(out[0].text, 'Some site')
  t.deepEqual(out[0].attributes, {href: 'http://site.com'})
  t.true(isObj(out[0].element))

  t.is(out[1].innerHTML, undefined)
  t.is(out[1].href, undefined)
  t.is(out[1].text, 'Link in page')
  t.deepEqual(out[1].attributes, {href: '#first'})
  t.true(isObj(out[1].element))

  t.is(out[2].innerHTML, undefined)
  t.is(out[2].href, undefined)
  t.is(out[2].text, 'Hello!')
  t.deepEqual(out[2].attributes, {href: `javascript:alert('Hello, World!');`})
  t.true(isObj(out[2].element))

  t.is(out[3].innerHTML, undefined)
  t.is(out[3].href, undefined)
  t.is(out[3].text, 'FooBar')
  t.deepEqual(out[3].attributes, {href: '/foo/bar'})
  t.true(isObj(out[3].element))
})

test('all-opts-true', t => {
  const out = m(
    html,
    {
      text: true,
      innerHTML: true,
      href: true,
      attributes: true,
      element: true
    }
  )

  t.is(out[0].innerHTML, '<b>Some site</b>')
  t.is(out[0].href, 'http://site.com')
  t.is(out[0].text, 'Some site')
  t.deepEqual(out[0].attributes, {href: 'http://site.com'})
  t.true(isObj(out[0].element))

  t.is(out[1].innerHTML, 'Link in page')
  t.is(out[1].href, '#first')
  t.is(out[1].text, 'Link in page')
  t.deepEqual(out[1].attributes, {href: '#first'})
  t.true(isObj(out[1].element))

  t.is(out[2].innerHTML, 'Hello!')
  t.is(out[2].href, `javascript:alert('Hello, World!');`)
  t.is(out[2].text, 'Hello!')
  t.deepEqual(out[2].attributes, {href: `javascript:alert('Hello, World!');`})
  t.true(isObj(out[2].element))

  t.is(out[3].innerHTML, 'FooBar')
  t.is(out[3].href, '/foo/bar')
  t.is(out[3].text, 'FooBar')
  t.deepEqual(out[3].attributes, {href: '/foo/bar'})
  t.true(isObj(out[3].element))
})
