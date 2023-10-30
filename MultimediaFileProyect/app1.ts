class MultimediaFile 
{
  protected checkSum:string = "";

  protected validateChechSum():boolean
  {
    return true;
  }

  get isValid():boolean
  {
    if(this.checkSum.length > 10)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  set newCheckSum(value:string)
  {
    this.checkSum = value;
  }
  
  ObtenerTipo():void
  {
    console.log("Multifile");
  }
}
  
class DynamicFile extends MultimediaFile
{
  ObtenerTipo():void
  {
    console.log("Dinamico");
  }
}
  
class StaticFile extends MultimediaFile
{
  ObtenerTipo():void
  {
    console.log("Estatico");
  }
}
  
class OtherFile extends MultimediaFile 
{
  ObtenerTipo(): void 
  {
    console.log("Estatico");
  }
}
  
var mFile:MultimediaFile = new MultimediaFile();

const dFile:DynamicFile = new DynamicFile();
  
const sFile:StaticFile = new StaticFile();
  
const oFile:OtherFile = new OtherFile();


mFile =dFile;
mFile.ObtenerTipo();

mFile = sFile;
mFile.ObtenerTipo();

mFile = oFile;
mFile.ObtenerTipo();

