import test from 'ava'
import { getAmount } from '../lib/'

test('getAmount is defined', t => {
  t.true(typeof getAmount === 'function')
})
