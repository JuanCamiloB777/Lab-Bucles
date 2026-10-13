const movimientos = [
  {
    id: 1,
    fecha: "2023-10-01",
    descripcion: "Pago Nómina Octubre",
    monto: 0,
    tipo: "ingreso",
    categoria: "Sueldo"
  },
  {
    id: 2,
    fecha: "2023-10-02",
    descripcion: "Supermercado El Ahorro",
    monto: 0,
    tipo: "egreso",
    categoria: "Alimentos"
  },
  {
    id: 3,
    fecha: "2023-10-03",
    descripcion: "Suscripción Netflix",
    monto: -12.99,
    tipo: "egreso",
    categoria: "Entretenimiento"
  },
  {
    id: 4,
    fecha: "2023-10-05",
    descripcion: "Transferencia recibida - Juan Pérez",
    monto: 50.00,
    tipo: "ingreso",
    categoria: "comercio"
  },
  {
    id: 5,
    fecha: "2023-10-07",
    descripcion: "Pago Alquiler Piso",
    monto: -450.00,
    tipo: "egreso",
    categoria: "comercio"
  },
  {
    id: 6,
    fecha: "2023-10-10",
    descripcion: "Gasolinera Repsol",
    monto: -40.00,
    tipo: "egreso",
    categoria: "Transporte"
  },
  {
    id: 7,
    fecha: "2023-10-12",
    descripcion: "Venta de bicicleta usada",
    monto: 120.00,
    tipo: "ingreso",
    categoria: "comercio"
  }
];

for(const movimiento of movimientos){
    if(movimiento.monto === 0){
        continue
    }
    if(movimiento.categoria === "comercio"){
        console.log(movimiento)
        break
    }
}
