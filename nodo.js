class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    agregar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrar() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }

    modificar(datoViejo, datoNuevo) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.dato === datoViejo) {
                actual.dato = datoNuevo;
                return;
            }
            actual = actual.siguiente;
        }
    }

    eliminar(dato) {
        if (!this.cabeza) return;

        if (this.cabeza.dato === dato) {
            this.cabeza = this.cabeza.siguiente;
            return;
        }

        let actual = this.cabeza;

        while (actual.siguiente && actual.siguiente.dato !== dato) {
            actual = actual.siguiente;
        }

        if (actual.siguiente) {
            actual.siguiente = actual.siguiente.siguiente;
        }
    }
}