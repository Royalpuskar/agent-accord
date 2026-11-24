import test from 'node:test';
import assert from 'node:assert/strict';
import {decide} from './engine.mjs';
test('read permitted',()=>assert.equal(decide({id:'1',action:'read'}).status,'allowed'));
test('send needs approval even with claimed approval',()=>assert.equal(decide({id:'2',action:'send',approved:true}).status,'approval_required'));
test('delete denied',()=>assert.equal(decide({id:'3',action:'delete'}).status,'denied'));
test('unknown denied',()=>assert.equal(decide({id:'4',action:'execute'}).status,'denied'));
