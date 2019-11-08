interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number;

	constructor(modelo:any = null){
		this.velocidad = 0;
		this.color = "Blanco";

		if (modelo == null) {
			this.modelo = "BMW generico";
		}else{
			this.modelo = modelo;
		}
	}

	// *** getters y setters
	public getColor() : string {
		return this.color;
	}

	public setColor(v : string) {
		this.color = v;
	}

	public getModelo() : string {
		return this.modelo;
	}

	public setModelo(v : string) {
		this.modelo = v;
	}

	public getVelocidad() : number {
		return this.velocidad;
	}

	public setVelocidad(v : number) {
		this.velocidad = v;
	}

	//*** metodos
	public acelerar() {
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

}

var coche = new Coche("Ford Ka");
var coche_dos = new Coche();
var coche_tres = new Coche();



coche.setColor("Rojo");
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El color del coche 1 es "+coche.getColor());
console.log("La velocidad del coche 1 es "+coche.getVelocidad());
console.log("El modelo por es "+coche.getModelo());

coche.frenar();
console.log("la velocidad despues de frenar es "+coche.getVelocidad());

// coche_dos.setColor("Azul");
// coche_tres.setColor("Verde");

// console.log("El color del coche 2 es "+coche_dos.getColor());
// console.log("El color del coche 3 es "+coche_tres.getColor());