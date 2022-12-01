/** 
* The unit test file for the BookEntry class - BookEntry.js
*@TestFile
*/
const BookEntryClass = require('./placeholder.js')
//import {BookEntryClass} from './BookEntry.js';

//test constructor/setters
test('valid constructor', () => {

  //const testBookEntryForConstructor = new BookEntry(new Set(['Sci-fi']), new Date('November 17, 2022 03:24:00'), 9, 340, 'completed', 'I thought it was poignantly pointless.', 'A4238A53I1', 'Robert Heinlein', 'Stranger in a Strange Land')  ;  
  const testBookEntryForConstructor = BookEntryClass.bookentry(new Set(['Sci-fi', 'Fiction']), new Date('November 17, 2022 03:24:00'), 9, 340, 'completed', 'I thought it was poignantly pointless.', 'A4238A53I1', 'Robert Heinlein', 'Stranger in a Strange Land')  ;  

  expect(testBookEntryForConstructor.printBookEntry()).toBe('Stranger in a Strange Land by: Robert Heinlein, rating: 9, progress: 340, status: completed, Date read: Thu Nov 17 2022 03:24:00 GMT+0000 (Coordinated Universal Time) \nReview: I thought it was poignantly pointless., ISBN: A4238A53I1, tags: Sci-fi, Fiction');
}); 

test('empty string constructor', () => {
  const testEntryEmptyStrings = BookEntryClass.bookentry('', '', '', '', '', '', '', '', '');
  expect(testEntryEmptyStrings.printBookEntry()).toBe('undefined by: undefined, rating: undefined, progress: undefined, status: undefined, Date read: undefined \nReview: undefined, ISBN: undefined, tags: ');
});

test('only title constructor', () => {
  const testEntryOnlyTitle = BookEntryClass.bookentry('', '', '', '', '', '', 'ISBN', '', 'title');
  expect(testEntryOnlyTitle.printBookEntry()).toBe('title by: undefined, rating: undefined, progress: undefined, status: undefined, Date read: undefined \nReview: undefined, ISBN: undefined, tags: ');
});

test('empty/undefined constructor', () => {
  const testIncorrectConstructor = BookEntryClass.bookentry();
  expect(testIncorrectConstructor.ISBN).toBe(undefined);
  expect(testIncorrectConstructor.authorName).toBe(undefined);
  expect(testIncorrectConstructor.dateRead).toBe(undefined);
  expect(testIncorrectConstructor.pageProgress).toBe(undefined);
  expect(testIncorrectConstructor.rating).toBe(undefined);
  expect(testIncorrectConstructor.reviewTextBody).toBe(undefined);
  expect(testIncorrectConstructor.status).toBe(undefined);
  expect(testIncorrectConstructor.tags).toBe(undefined);
  expect(testIncorrectConstructor.title).toBe(undefined);
});

test('non-set tag constructor', () => {
  const testEntryUndefinedDate = BookEntryClass.bookentry('sci-fi, fantasy', '', '', '', '', '', '', '', '');
  expect(testEntryUndefinedDate.tags).toBe('sci-fi, fantasy');
});

test('8/9 entries constructor', () => {
  const testEntry8Entries = BookEntryClass.bookentry('', '', '', '', '', '', '', '');
  expect(testEntry8Entries.ISBN).toBe(undefined);
  expect(testEntry8Entries.authorName).toBe(undefined);
  expect(testEntry8Entries.dateRead).toBe(undefined);
  expect(testEntry8Entries.pageProgress).toBe(undefined);
  expect(testEntry8Entries.rating).toBe(undefined);
  expect(testEntry8Entries.reviewTextBody).toBe(undefined);
  expect(testEntry8Entries.status).toBe(undefined);
  expect(testEntry8Entries.tags).toBe("");    //should be empty set
  expect(testEntry8Entries.title).toBe(undefined);
});

test('space string constructor', () => {
  const testEntryEmptyStrings = BookEntryClass.bookentry(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
  expect(testEntryEmptyStrings.printBookEntry()).toBe('  by:  , rating: undefined, progress: undefined, status: undefined, Date read: undefined \nReview:  , ISBN: undefined, tags:  ');
});
/*
test('random undefined constructor', () => {
  const testEntryRandomUndefined = BookEntryClass.bookentry('', undefined, '', undefined, undefined, '', undefined, undefined, undefined);
  expect(testEntryRandomUndefined.printBookEntry()).toBe('undefined by: undefined, rating: , progress: undefined, status: undefined, Date read: undefined \nReview: , ISBN: undefined, tags: ');
});

test('null constructor', () => {
  const testEntryNull = BookEntryClass.bookentry(null);
  expect(testEntryNull.ISBN).toBe(undefined);
  expect(testEntryNull.authorName).toBe(undefined);
  expect(testEntryNull.dateRead).toBe(undefined);
  expect(testEntryNull.pageProgress).toBe(undefined);
  expect(testEntryNull.rating).toBe(undefined);
  expect(testEntryNull.reviewTextBody).toBe(undefined);
  expect(testEntryNull.status).toBe(undefined);
  expect(testEntryNull.tags).toBe(undefined);
  expect(testEntryNull.title).toBe(undefined);
});

test('all null constructor', () => {
  const testEntryAllNull = BookEntryClass.bookentry(null,null,null,null,null,null,null,null,null);
  expect(testEntryAllNull.ISBN).toBe(undefined);
  expect(testEntryAllNull.authorName).toBe(undefined);
  expect(testEntryAllNull.dateRead).toBe(undefined);
  expect(testEntryAllNull.pageProgress).toBe(undefined);
  expect(testEntryAllNull.rating).toBe(undefined);
  expect(testEntryAllNull.reviewTextBody).toBe(undefined);
  expect(testEntryAllNull.status).toBe(undefined);
  expect(testEntryAllNull.tags).toBe(undefined);   
  expect(testEntryAllNull.title).toBe(undefined);
});
*/
