"use strict";
class MultimediaFile {
    constructor() {
        this.checkSum = "";
    }
    validateChechSum() {
        return true;
    }
    get isValid() {
        if (this.checkSum.length > 10) {
            return true;
        }
        else {
            return false;
        }
    }
    set newCheckSum(value) {
        this.checkSum = value;
    }
    ObtenerTipo() {
        console.log("Multifile");
    }
}
class DynamicFile extends MultimediaFile {
    ObtenerTipo() {
        console.log("Dinamico");
    }
}
class StaticFile extends MultimediaFile {
    ObtenerTipo() {
        console.log("Estatico");
    }
}
class OtherFile extends MultimediaFile {
    ObtenerTipo() {
        console.log("Estatico");
    }
}
var mFile = new MultimediaFile();
const dFile = new DynamicFile();
const sFile = new StaticFile();
const oFile = new OtherFile();
mFile = dFile;
mFile.ObtenerTipo();
mFile = sFile;
mFile.ObtenerTipo();
mFile = oFile;
mFile.ObtenerTipo();
