/**
 *
 * Tests for Title
 *
 */

import React from 'react';
import { render } from 'utils/testLibrary';

import LoadingIndicator from '../index';

describe('<Title />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<LoadingIndicator />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    // TODO: Implement unit tests
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<LoadingIndicator />);
    expect(firstChild).toMatchSnapshot();
  });
});
