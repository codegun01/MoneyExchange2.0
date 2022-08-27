class Factura{
    static contadorF = 0;
    static fecha = new Date();
    constructor(nombre, apellido, telefono, cedula, monto, cambio, dolar, pago, vuelto){
        this.id = ++Factura.contadorF;
        this.nombre   = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.cedula   = cedula;
        this.monto    = monto;
        this.cambio   = cambio;
        this.dolar    = dolar;
        this.pago     = pago;
        this.vuelto   = vuelto;
        this.fecha    = Factura.fecha.toDateString();
  

    }  

}