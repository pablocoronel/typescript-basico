// clase padre
class Programa{
	public nombre: string;
	public version: number;

	public getNombre() : string {
		return this.nombre;
	}

	public setNombre(nombre : string) {
		this.nombre= nombre;
	}

	public getVersion() : number {
		return this.version;
	}

	public setVersion(version : number) {
		this.version = version;
	}
}

// Clase hija
class EdiorVideo extends Programa {
	public timeline: number;

	public setTimeline(timeline : number) {
		this.timeline = timeline;
	}

	public getTimeline() : number {
		return this.timeline;
	}

	public getAllData(){
		return this.getNombre()+" - "+this.getTimeline()+" - "+this.getVersion();
	}
}

// instancia
var editor = new EdiorVideo();
editor.setNombre("SublimeText");
editor.setVersion(3);
editor.setTimeline(4000);

console.log(editor.getAllData());


// Logica del formulario
var programas: Array<Programa> = [];

function guardar() {
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	// programa.setVersion(version);

	programas.push(programa);

	var list: string = "";

	for (var i = 0; i < programas.length; ++i) {
		list = list+"<li>"+programas[i].getNombre()+"</li>"
	}

	var listado = <HTMLElement> document.getElementById("listado");

	listado.innerHTML = list;
	(<HTMLInputElement>document.getElementById("nombre")).value= "";
}