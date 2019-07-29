class Driver {
    constructor(name) {

        this._name = name;
    }

    get myname() {
        return this._name;
    }

    set myname(val) {

        if (val.length > 6) {
            this._name = val;

        }
    }

}

let drive = new Driver('sanjai')
console.log(drive.myname)

drive.myname = 'Santheep'
console.log(drive.myname)
