import React from 'react';
import { renderShallow } from '../../util/test-helpers';
import { createUser, createListing, fakeIntl } from '../../util/test-data';
import { ListingCardComponent } from './ListingCard';

describe('listingCard', () => {
  it('matches snapshot', () => {
    const listing = createListing('listing1', {}, { author: createUser('user1') });
    const tree = renderShallow(<ListingCardComponent intl={fakeIntl} listing={listing} />);
    expect(tree).toMatchSnapshot();
  });
});
