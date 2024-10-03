const os = require ('node:os')

console.log('Informacion del sistema informativo')
console.log('___________________________________')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) //vamos a poder escalar procesos en node
console.log('Memoria Libre', os.freemem()/1024/1024)
console.log('Memoria Total', os.totalmem()/1024/1024)