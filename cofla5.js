class Celulares{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDeCamara = rdc;
        this.tamaño = tamaño;
        this.memoriaRam = ram;
        this.encendido = false;
        this.mostrarInfo = `<br><br>telefono de color ${this.color}, pesa unos ${this.peso}, posee un tamaño de ${this.tamaño}, su camara saca a una calidad ${this.resolucionDeCamara} y trae ${this.memoriaRam} ram `;
    }
    presionarBotonDeEncendido(){
        if(this.encendido == false){
            alert("prendiendo celular");
            this.encendido = true;
        }
        else if(this.encendido == true){
            alert("apagando celular");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        }
        else{
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada a una resolucion de ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video a una resolucion de ${this.resolucionDeCamara}`);
    }
}
class CelularesAltaGama extends Celulares{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
        this.mostrarInfoGamaAlta = `${this.mostrarInfo}, y la camara extra es ${this.resolucionDeCamaraExtra}`
    }
    grabarVideoLento(){
        alert("grabando en video lento")
    }
    reconocimientoFacial(){
        alert("iniciando reconocimiento facial")
    }
}
const celular1 = new Celulares("rojo","120g","5p","hd","2GB");
const celular2 = new Celulares("azul","100g","4p","720p","1GB");
const celular3 = new Celulares("rosa","150g","5p","hd","1GB");

// celular1.presionarBotonDeEncendido();
// celular1.tomarFoto();
// celular1.reiniciar();
// celular1.grabarVideo();
// celular1.presionarBotonDeEncendido();

document.write(celular1.mostrarInfo);
document.write(celular2.mostrarInfo);
document.write(celular3.mostrarInfo);

const celularAltaGama1 = new CelularesAltaGama("negro","190g","6,7p","hd","3.5GB","fullHD");
const celularAltaGama2 = new CelularesAltaGama("blanco","160g","4.5p","fullHD","4GB","4K");

document.write(`
${celularAltaGama1.mostrarInfoGamaAlta}
${celularAltaGama2.mostrarInfoGamaAlta}`);
    // celularAltaGama1.grabarVideoLento();
    // celularAl taGama2.reconocimientoFacial();

