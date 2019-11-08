var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    // *** getters y setters
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (v) {
        this.color = v;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (v) {
        this.modelo = v;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (v) {
        this.velocidad = v;
    };
    //*** metodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Ford Ka");
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 1 es " + coche.getColor());
console.log("La velocidad del coche 1 es " + coche.getVelocidad());
console.log("El modelo por es " + coche.getModelo());
coche.frenar();
console.log("la velocidad despues de frenar es " + coche.getVelocidad());
// coche_dos.setColor("Azul");
// coche_tres.setColor("Verde");
// console.log("El color del coche 2 es "+coche_dos.getColor());
// console.log("El color del coche 3 es "+coche_tres.getColor()); 
