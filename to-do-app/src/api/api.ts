import { db } from '../firebase';

export function getCollection(collection: any): any {
  return db.collection(collection)
  .get()
  .then((docs: any) => {
    const items = docs.docs.map((doc: any) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });
    return items;
  })
  .catch((er) => {
    console.log(er);
  });
}