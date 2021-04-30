class zapatos{
    constructor(calzado,diseno,marca,color){
       this.calzado=calzado,
       this.diseno=diseno,
       this.marca=marca,
       this.color=color
     }
     

     mostrarZapatos(){
        return `
           <b>calzado:</b> ${this.calzado}<br />
           <b>diseno:</b>  ${this.diseno}<br />
           <b>marca:</b>   ${this.marca}<br />
           <b>color:</b>   ${this.color}<br />
           <hr />
        `;

     }

}

const juan = new zapatos('43','Mocasin','Romulo','Cafe');
document.write(juan.mostrarZapatos());




class cliente extends zapatos{
  constructor(nombre,edad,telefono,direccion,correo,calzado,marca,diseno,color){
     super(calzado,marca,diseno,color) 
    this.nombre=nombre,
    this.edad=edad,
    this.telefono=telefono,
    this.direccion=direccion,
    this.correo=correo;

  }

  mostrarDatos(){
      return `
       <b> nombre del cliente<b/> ${this.nombre} <br />
       <b> edad<b/> ${this.edad} <br />
       <b> telefono<b/> ${this.telefono} <br />
       <b> direccion <b/> ${this.direccion} <br />
       <b> correo <b/> ${this.correo} <br />
       <b> calzado <b/> ${this.calzado} <br />
       <b> marca <b/> ${this.marca} <br />
       <b> color <b/> ${this.color} <br />
       
       <hr />
      `;
  }  

  }
const user = new cliente('Juan David R',23,3136153521,'calle12A #51-77','jdruales4@misena.edu.co',43,'tenis','tenis','rojo');
document.write(user.mostrarDatos());


