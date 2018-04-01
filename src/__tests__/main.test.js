// @flow

import helloworld from '../main';

describe('helloworld', () => {
  test('helloworld', () => {
    // given
    const name = 'Paul';

    // when
    const result = helloworld(name);

    // then
    const expectedResult = `Helloworld Paul`;
    expect(result).toEqual(expectedResult);
  });
});
