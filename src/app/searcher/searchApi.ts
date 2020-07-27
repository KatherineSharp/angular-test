// DO NOT MODIFY THIS FILE!!
export class SearchApi {
  private searchInProgress = false;
  names = [
    'Adam',
    'Alex',
    'Aaron',
    'Ben',
    'Carl',
    'Dan',
    'David',
    'Edward',
    'Fred',
    'Frank',
    'George',
    'Hal',
    'Hank',
    'Ike',
    'John',
    'Jack',
    'Joe',
    'Larry',
    'Monte',
    'Matthew',
    'Mark',
    'Nathan',
    'Otto',
    'Paul',
    'Peter',
    'Roger',
    'Roger',
    'Steve',
    'Thomas',
    'Tim',
    'Ty',
    'Victor',
    'Walter',
  ];

  search(val = ''): any {
    if (!val) {
      return this.names;
    }
    if (this.searchInProgress) {
      throw 'ERROR: You can only search once every 1 seconds!';
    }

    this.searchInProgress = true;
    setTimeout(() => {
      this.searchInProgress = false;
    }, 1000);

    return this.names.filter(
      (name) => name.toLowerCase().indexOf(val.toLowerCase()) > -1
    );
  }
}
