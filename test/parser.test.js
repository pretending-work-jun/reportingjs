/* eslint-env node, mocha */
import { expect } from 'chai';
import { parser } from '../src';

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
});

describe('Test JSONToCSV function', () => {
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

describe('Test functions to exchange between csv and string format', () => {
  it('Expect to convert between csv and string format', () => {
    const CSVContent = [
      ['col1', 'col2', 'col3'],
      [1, 2, 3],
      [10, 20, 30],
    ];
    const res = parser.stringifyCSV(CSVContent);
    const revert = parser.readCSV(res);

    expect(res).to.be.a('String');
    expect(revert).to.deep.equal(CSVContent);
  });
});

describe('Test renameJSONKeys function', () => {
  it('Expect to rename JSON keys', () => {
    const JSONContent = [
      { key1: 0, key2: 1, key3: 2 },
      { key1: 3, key2: 4, key3: 5 },
      { key1: 6, key2: 7, key3: 8 },
    ];

    const renameObj = { key1: 'newKey1', key2: 'newKey2', key3: 'newKey3' };
    const newJSONContent = parser.renameJSONKeys(JSONContent, renameObj);

    expect(newJSONContent[0]).to.have.property('newKey1');
    expect(newJSONContent[0]).to.have.property('newKey2');
    expect(newJSONContent[0]).to.have.property('newKey3');
    expect(newJSONContent[0]).not.to.have.property('key1');
    expect(newJSONContent[0]).not.to.have.property('key2');
    expect(newJSONContent[0]).not.to.have.property('key3');
  });
});

describe('Test getJSONByKeys function', () => {
  it('Expect to get only JSON with keys', () => {
    const JSONContent = [
      { key1: 0, key2: 1, key3: 2 },
      { key1: 3, key2: 4, key3: 5 },
      { key1: 6, key2: 7, key3: 8 },
    ];

    const extractedJSON = parser.getJSONByKeys(JSONContent, ['key1', 'key2']);

    expect(extractedJSON[0]).to.have.property('key1');
    expect(extractedJSON[0]).to.have.property('key2');
    expect(extractedJSON[0]).not.to.have.property('key3');
  });
});
