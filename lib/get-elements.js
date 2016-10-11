'use strict';

/** Modules */
const htmlParser = require ( 'htmlparser2' );


/**
 * Parse innerHTML, get all elements «a»
 *
 * @param {String} html — code innerHTML
 *
 * @returns {Array}
 *
 * @example
 * htmla.getElements('<a href="/in"><span>Some Text</span></a>');
 */
module.exports = html => {

  /** Check argument */
  if ( typeof html !== 'string' ) {
    throw new TypeError ( `Argument «html» must be a «string», not «${typeof html}»` );
  }

  /** Parse HTML */
  const htmlParsed = htmlParser.parseDOM ( html );

  /** Return all «a» elements */
  return htmlParser.DomUtils.getElementsByTagName ( 'a', htmlParsed );

};
