import { db } from '../firebase';

export function getCollection(collection: string, collectionId: string = ''): any {
  const requst = collectionId.length ? 
    db.collection(collection).where('listId', '==', collectionId) :
    db.collection(collection);

    return requst.get()
      .then((docs: any) => {
        const items = docs.docs.map((doc: any) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        console.log(items);
        return items;
      })
      .catch((er) => {
        console.log(er);
      });
}