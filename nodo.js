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
  
    // Agregar elemento
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
  
    // Mostrar lista
    mostrar() {
      let actual = this.cabeza;
      while (actual) {
        console.log(actual.dato);
        actual = actual.siguiente;
      }
    }
  
    // Eliminar elemento
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
  
    // Modificar elemento
    modificar(viejo, nuevo) {
      let actual = this.cabeza;
  
      while (actual) {
        if (actual.dato === viejo) {
          actual.dato = nuevo;
          return;
        }
        actual = actual.siguiente;
      }
    }


  }




  const planeta = new ListaEnlazada();


  planeta.agregar("jupiter");
  planeta.agregar("saturno");
  planeta.agregar("urano");
  planeta.agregar("mercurio");
  planeta.agregar("neptuno");
  planeta.agregar("marte");
  planeta.agregar("venus");
  planeta.agregar("tierra");
  console.log("Lista original:");
  planeta.mostrar();
  
  // Modificar
  planeta.modificar("jupiter", "WASP-107b");
  planeta.modificar("saturno", "Próxima Centauri b");
  planeta.modificar("urano", "Kepler-64b");
  
  // Eliminar
  planeta.eliminar("tierra");
  console.log("planeta eliminado:");
  planeta.mostrar();
  // Mostrar final
  console.log("Lista modificada:");
  planeta.mostrar();

