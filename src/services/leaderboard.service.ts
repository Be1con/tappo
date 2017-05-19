import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable()
export class LeaderboardService {  
    private _db;
    private _leaderboard;

    initDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this._db = new PouchDB('leaderboard.db', { adapter: 'cordova-sqlite' });
    }

    add(stand) {  
        return this._db.post(stand);
    }

    update(stand) {  
        return this._db.put(stand);
    }

    delete(stand) {  
        return this._db.remove(stand);
    }

    getAll() {  

        if (!this._leaderboard) {
            return this._db.allDocs({ include_docs: true})
                .then(docs => {

                    // Each row has a .doc object and we just want to send an 
                    // array of stand objects back to the calling controller,
                    // so let's map the array to contain just the .doc objects.

                    this._leaderboard = docs.rows.map(row => {
                        return row.doc;
                    });

                    // Listen for changes on the database.
                    this._db.changes({ live: true, since: 'now', include_docs: true})
                        .on('change', this.onDatabaseChange);

                    return this._leaderboard;
                });
        } else {
            // Return cached data as a promise
            return Promise.resolve(this._leaderboard);
        }
    }

    private onDatabaseChange = (change) => {  
        var index = this.findIndex(this._leaderboard, change.id);
        var stand = this._leaderboard[index];

        if (change.deleted) {
            if (stand) {
                this._leaderboard.splice(index, 1); // delete
            }
        } else {
            if (stand && stand._id === change.id) {
                this._leaderboard[index] = change.doc; // update
            } else {
                this._leaderboard.splice(index, 0, change.doc) // insert
            }
        }
    }

    // Binary search, the array is by default sorted by _id.
    private findIndex(array, id) {  
        var low = 0, high = array.length, mid;
        while (low < high) {
        mid = (low + high) >>> 1;
        array[mid]._id < id ? low = mid + 1 : high = mid
        }
        return low;
    }

}