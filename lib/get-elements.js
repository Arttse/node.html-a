'use strict';

/** Modules */
const htmlParser = require ( 'htmlparser2' );


/**
 * Parses HTML, gets all DOM «a» elements
 *
 * @param {String} html — code HTML
 *
 * @returns {Array}
 *
 * @example
 * htmla.getElements ( '<a href="/in"><span>Some Text</span></a>' )
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
