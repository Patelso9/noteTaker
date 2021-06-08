// look up uuid (util.promisify)
const fs = require('fs');

class getNotes {
    read(n) {
        n(null, this);
    }
}

const r = new getNotes ();
const promisfied = require ('util').promisify(r.read);

const contet = await promisfied();
context;




// CLASS NOTES:
// getNotes() {
//     return read().then {
//         // parse notes to return them as parsed notes
//     }
// }
