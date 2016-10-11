'use strict';

/** Modules */
const htmlParser = require ( 'htmlparser2' );
const getElements = require ( './get-elements' );

const DomUtils = htmlParser.DomUtils;


/**
 * Get custom info about «a» elements
 *
 * @param {String} html — code innerHTML
 * @param {Object} opts — pass your options
 *
 * @returns {Array}
 *
 * @example
 * htmla('<a href="/in"><span>Some Text</span></a>', {innerHTML: true, href: true})
 */
module.exports = ( html, opts ) => {

  /** Check arguments */
  if ( typeof html !== 'string' ) {
    throw new TypeError ( `Argument «html» must be a «string», not «${typeof html}»` );
  }

  /** Options */
  opts = Object.assign ( {
    text       : false,
    innerHTML  : true,
    href       : true,
    attributes : false,
    element    : false
  }, opts );

  /** All «a» elements */
  const aElements = getElements ( html );

  /** Check if «a» elements exists */
  if ( aElements.length ) {

    const links = [];

    /** Get info each «a» */
    aElements.forEach ( el => {

      const link = {};

      if ( opts.text ) {
        link.text = DomUtils.getText ( el );
      }

      if ( opts.innerHTML ) {
        link.innerHTML = DomUtils.getInnerHTML ( el );
      }

      if ( opts.href ) {
        link.href = el.attribs.href;
      }

      if ( opts.attributes ) {
        link.attributes = el.attribs;
      }

      if ( opts.element ) {
        link.element = el;
      }

      links.push ( link );

    } );

    return links;

  }

  /** If elements «a» not exists */
  return [];

};
