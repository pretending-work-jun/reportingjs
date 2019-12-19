/* eslint-env node, mocha */
import { expect } from 'chai';
import typeParser from '../src/typeParser';

describe('Test JSONParse function', () => {
  it('Expect to convert to integer', () => {
    expect(typeParser.JSONParse('1')).to.be.equal(1);
  });

  it('Expect to convert to float', () => {
    expect(typeParser.JSONParse('1.1')).to.be.equal(1.1);
  });

  it('Expect to convert to string', () => {
    expect(typeParser.JSONParse('1,1')).to.be.equal('1,1');
  });
});