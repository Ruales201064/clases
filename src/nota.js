class materia{
    constructor(nombreM){
        this.nombreM=nombreM;
        
    }
    mostrarNombre(){
        return `
         <b> nombre:</b>  ${this.nombreM}<br /> 
         
         <hr />
        `;
    }
 
 }
 
 const area= new materia("matematicas");
 document.write(area.mostrarNombre());
 
 
 class areas extends materia{
     constructor(nombreA,nombreM){
         super(nombreM)
        this.nombreA=nombreA;
     }
    
     mostrarinfo(){
        return `
         <b> nombre de la materia:</b>  ${this.nombreM}<br /> 
         <b> nombre de la area:</b>  ${this.nombreA}<br /> 
         <hr />
        `;
    }
      
    }
    const materias= new areas("algoritmia","matematicas");
    document.write(materias.mostrarinfo());
 
 
 
 
 