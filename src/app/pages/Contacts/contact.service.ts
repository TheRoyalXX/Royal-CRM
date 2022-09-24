import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );

  constructor(private FS: Firestore) {}

  getAll(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        contacts.push({
          ...contact.data(),
          _id: contact.id,
        });
      });
    });
    return cb(contacts, unsubscribeGetAll);
  }

  add(contact: Contact, cb: Function) {
    contact.createdAt = serverTimestamp();
    addDoc(this.collectionRef, contact)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'contacts', id);
      const result = await getDoc(docRef);
      const contact = { ...result.data(), _id: result.id };
      cb(contact);
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'contacts', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(contact: Contact, id: string, cb: Function) {
    const docRef = doc(this.FS, 'contacts', id);
    updateDoc(docRef, { ...contact })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
}

// getAll(): Customer[] {
//   return this.customers;
// }

// getCustomer(id: string, cb: Function): Customer | void {
//   const customer = this.customers.find(
//     (customerFromDb: Customer) => customerFromDb._id === id
//   );
//   return cb(customer);
// }

// add(customer: Customer) {
//   customer._id =
//     String(this.customers.length + 1) + new Date() + Math.random();

//   customer.createdAt = new Date();
//   this.customers.push(customer);
//   return;
// }

// delete(id: string) {
//   let customerIndex = this.customers.findIndex(
//     (customer: Customer) => customer._id === id
//   );
//   if (customerIndex === -1) return;
//   this.customers.splice(customerIndex, 1);
// }

// edit(customer: Customer) {
//   let index = this.customers.findIndex(
//     (customerFromDb) => customerFromDb._id === customer._id
//   );
//   if (index === -1) return;
//   this.customers[index] = customer;
// }
