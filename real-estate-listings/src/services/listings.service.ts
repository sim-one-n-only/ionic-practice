export class ListingsService {
  private listings: {address: string}[] = [];

  addListing(listing: {address: string}) {
    this.listings.push(listing);
  }

  getListings() {
    return this.listings.slice();
  }
}
