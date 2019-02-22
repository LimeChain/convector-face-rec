import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { Barcode as BarcodeModel } from 'barcode-cc/client';

BaseStorage.current = new CouchDBStorage({
	host: process.env.COUCHDB_HOST,
	protocol: process.env.COUCHDB_PROTOCOL,
	port: process.env.COUCHDB_PORT
}, process.env.COUCHDBVIEW);


export namespace Models {
	export const Car = BarcodeModel;
}