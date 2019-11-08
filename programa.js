var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// clase padre
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
// Clase hija
var EdiorVideo = /** @class */ (function (_super) {
    __extends(EdiorVideo, _super);
    function EdiorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdiorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EdiorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EdiorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getTimeline() + " - " + this.getVersion();
    };
    return EdiorVideo;
}(Programa));
// instancia
var editor = new EdiorVideo();
editor.setNombre("SublimeText");
editor.setVersion(3);
editor.setTimeline(4000);
console.log(editor.getAllData());
// Logica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    // programa.setVersion(version);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; ++i) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
