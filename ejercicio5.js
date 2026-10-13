const usuarios = [
  {
    nombre: "Ana",
    movimientos: [100, -50, 200, -20, -10]
  },
  {
    nombre: "Carlos",
    movimientos: [500, -100, -100, -50, 200]
  },
  {
    nombre: "Beatriz",
    movimientos: [10, 20, -5, -15, 100, -30]
  }
];

for(const usuario of usuarios){
    let totalUsuario = 0
    for(movimientos of usuario.movimientos){
        totalUsuario += movimientos
    }
    console.log(usuario.nombre,totalUsuario)
}