
//Reject o Solicitud Rechazada

const solicitud = new Promise((resolve, reject) => {
	const response = "resolvsse"

    if(response == "resolve" ){
        resolve("La promesa se cumplió")
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitud)


//Fullfilled o Solicitud Atendida

const solicitudFull = new Promise((resolve, reject) => {
	const response = "resolve"

    if(response == "resolve" ){
        resolve("La promesa se cumplió")
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitudFull)

//Pending o Solitud Pendiente

const solicitudPending = new Promise((resolve, reject) => {
	const response = "resolve"

    if(response == "resolve" ){
      
    }
    else {
        reject("La promesa no se cumplio")
    }

})

console.log(solicitudPending)