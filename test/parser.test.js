/* eslint-env node, mocha */
import { expect } from 'chai';
import { parser } from '../lib';

describe('Test CSVToJSON function', () => {
  it('Expect to convert to a valid JSON', () => {
    const CSVContent = [
      ['col1', 'col2', 'col3'],
      [1, 2, 3],
      [10, 20, 30],
    ];
    const res = parser.CSVToJSON(CSVContent);
    expect(res).to.have.lengthOf(2);
    expect(res[0]).to.be.a('Object');
    expect(res[0]).to.have.property('col1');
    expect(res[0]).to.have.property('col2');
    expect(res[0]).to.have.property('col3');
  });

  it('Expect to convert to a valid CSV format', () => {
    const JSONContent = [
      { col1: 1, col2: 2, col3: 3 },
      { col1: 4, col2: 5, col6: 6 },
    ];
    const res = parser.JSONToCSV(JSONContent);
    expect(res).to.have.lengthOf(3);
    expect(res[0]).to.be.a('Array');
    expect(res[0][0]).to.be.equal('col1');
    expect(res[1][0]).to.be.equal(1);
  });
});
