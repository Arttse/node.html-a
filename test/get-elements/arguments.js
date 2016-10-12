'use strict';

import test from 'ava';
import m from '../../';

test ( 'html', t => {

  t.throws (
    () => {
      m.getElements ();
    },
    'Argument «html» must be a «string», not «undefined»'
  );

  t.throws (
    () => {
      m.getElements ( null );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m.getElements ( [] );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m.getElements ( {} );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m.getElements ( 123 );
    },
    'Argument «html» must be a «string», not «number»'
  );

  t.throws (
    () => {
      m.getElements ( true );
    },
    'Argument «html» must be a «string», not «boolean»'
  );

  t.throws (
    () => {
      m.getElements ( Symbol ( 'foo' ) );
    },
    'Argument «html» must be a «string», not «symbol»'
  );

  t.throws (
    () => {
      m.getElements ( () => {} );
    },
    'Argument «html» must be a «string», not «function»'
  );

  t.notThrows (
    () => {
      m.getElements ( 'beleberda' );
    }
  );

} );
