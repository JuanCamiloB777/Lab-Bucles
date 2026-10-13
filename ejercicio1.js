const movimientos = [
  {
    id: 1,
    fecha: "2023-10-01",
    descripcion: "Pago Nómina Octubre",
    monto: 1500.00,
    tipo: "ingreso",
    categoria: "Sueldo"
  },
  {
    id: 2,
    fecha: "2023-10-02",
    descripcion: "Supermercado El Ahorro",
    monto: -65.20,
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
    categoria: "Transferencia"
  },
  {
    id: 5,
    fecha: "2023-10-07",
    descripcion: "Pago Alquiler Piso",
    monto: -450.00,
    tipo: "egreso",
    categoria: "Vivienda"
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
    categoria: "Otros"
  }
];

total = 0

cantidadRetiro = 0

for(const movimiento of movimientos){
    total += movimiento.monto
    if(movimiento.monto<0){
        cantidadRetiro +=1}
}

console.log(total,cantidadRetiro)