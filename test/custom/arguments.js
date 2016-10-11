'use strict';

import test from 'ava';
import m from '../../';

test ( 'html', t => {

  t.throws (
    () => {
      m ();
    },
    'Argument «html» must be a «string», not «undefined»'
  );

  t.throws (
    () => {
      m ( null );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m ( [] );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m ( {} );
    },
    'Argument «html» must be a «string», not «object»'
  );

  t.throws (
    () => {
      m ( 123 );
    },
    'Argument «html» must be a «string», not «number»'
  );

  t.notThrows (
    () => {
      m ( 'beleberda' );
    }
  );

} );
