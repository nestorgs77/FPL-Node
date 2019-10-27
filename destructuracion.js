let Personaje = {
 Nombre :'X-Man',
 Poder :'Fuerza' , 

 getNombre : function() {

return `${this.Nombre}`;

 }

};

let {Nombre : nombreentero , Poder : poderdexman}= Personaje; 
//console.log(Personaje.getNombre());

console.log(`${nombreentero}${poderdexman}`);