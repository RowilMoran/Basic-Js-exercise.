/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const countChar = str => {
    if(typeof str === "string" && str.length > 0) {
        console.info(`${str} have ${str.length} character`)
    } else {
        console.warn("You should put some text in here")
    }
}

countChar('Hi everyone')






// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


const shorterText = (text, index) => 
    !text
    ? console.warn('Not cool man, put some valid text')
    : index === undefined
     ? console.warn('specify a number to cut the string')
      : console.info(text.slice(0, index)) 


shorterText("hola a todos esto es una prueba", 10);






// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


const separateStr = (strng, splitter) => 
!strng
? console.warn('hi there, type something please')
 : splitter === undefined
 ? console.warn('try some splitter please')
 : console.info(strng.split(splitter))

separateStr('hola como estas?', " ");







// 4)Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

                
        

const repeatText = (text, times) => {
    if(!text) return console.warn('Type son text in here');

    if(times === undefined) return console.warn('type a number');

    if (times === 0) return console.warn('type a number higher than 0');

    if(Math.sign(times) === -1) return console.error('Negative values canT be negative')

    let modifiedText = text + ' ';
    console.info(modifiedText.repeat(times))

}

repeatText('hola a todos', 5);






/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const backwardWord = (word) => {
    if (!word)  console.warn('Write some text in here dude');

    if (typeof word === 'number') console.error('numbers are forbidden');
    
    for (let i = word.length - 1; i >= 0; i--) {
        console.info(word[i])
    }
    
}

backwardWord("hola amigos")

                            //Segunda forma de resolverlo

                               /* function reverse(s){
                                    console.info(s.split("").reverse().join(""))
                                }

                                reverse('esto es una prueba')*/








/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

            //First Way to solve this.

                           /* const countWords = (text, word) => {
                        if (!text) console.warn('hi, try to type son text here');

                        if(!word) console.warn('hi, which word would you like to count?')


                        const textArr = text.split(/[ ,]+/); 
                        let count = 0
                        for(let i = 0; i < textArr.length; i++) {
                            if(textArr[i] === word) {
                                count++
                            }
                        }
                    console.info(count)
                    }

                    countWords('hola a todos, hola mundo', 'todos')*/

            //Second way to solve this.

const countWord = (text = "", word = "") => {
    if(!text) console.warn('hi, try to type son text here');

    if(!word) console.warn('hi, which word would you like to count?')

    let i = 0;
    let counter = 0;

    while(i !== -1) {
        i = text.indexOf(word, i);

        if(i !== -1) {
            i++;
            counter++
        }
    }
    return console.info(counter)
}  

countWord('hola a todos esto es una prueba, digo hola a todos otra vez', 'prueba')

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const polindromeFunc = word => {
    if(!word) console.warn('which word do you want to check?');

    for (i = 0; i < word.length; i++) {
        for (j = word.length -1; j > 0; j--) {
            if (word[j] === word[i]) {
                return console.info(true)
            } else {
                return console.info(false)
            }
        }
    }
}

 polindromeFunc('somos o no somos')

 /*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

 const deleteW = (textL, deleteWord) => {
   !textL
   ? console.warn('write some text here')
   :!deleteWord
    ? console.warn('type the patron to delete')
    :console.log(textL.replace(new RegExp(deleteWord, "ig"), ''));
 }

 deleteW("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")






 //9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

 const RandomNumber = ()=> console.info(Math.round(Math.random() * (600 - 501)) + 501)
 

RandomNumber()






// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


const capicuaFunc = numberC => {
    if(!numberC) return console.warn('which number do you want to check?');
    if(typeof numberC !== 'number') return console.error('imput have to be a number');
    
    
    const numbArr = Array.from(String(numberC), Number);
    if (numbArr.length <= 1) return console.warn('Number should be higher than 1');
    for (i = 0; i < numbArr.length; i++) {
        for (j = numbArr.length -1; j > 0; j--) {
            if (numbArr[j] === numbArr[i]) return console.info(true);
    
            return console.info(false)
            }
        }
    }


capicuaFunc(54)

        //Segunda forma de resolverlo.

        /*
        const capicuaFunc = (numberC)=> {

        const stringNumber = numberC.toString();
        let returnedValue = stringNumber.split('').reverse().join(''); 
        
        if (stringNumber === returnedValue) return console.info(true)
        
        return console.info(false)
        } 
        */







/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorialNumb = numberF => {
    if (!numberF) return console.warn('introduce a number');
    if (isNaN(numberF)) return console.error('Only numbers are allowed');
    if (Math.sign(numberF) === -1) return console.error('negative numbers are not allowed')

    let total = 1;
    for (let i = numberF; i > 0; i--) {
        total *= i;
    }
    return console.info(total)
}

factorialNumb(5)







//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numeroP) => {
    if (!numeroP) return console.warn('ingrese un numero');
    if(typeof numeroP !== 'number') return console.error('solo numeros son validos')

    
    for(let i = 2; i < numeroP / 2; i++) {
        if (numeroP % i === 0) return console.info(`${numeroP} NO es un numero primo` )
    }
   return console.info(`${numeroP} SI es un numero primo`)
}


numeroPrimo(29);







//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

    const parOrIm = numberIoP => {
        if (!numberIoP) return console.warn('ingrese un numero');
        if(typeof numberIoP !== 'number') return console.error('solo numeros son validos');

        let newNumber = numberIoP / 2;
        if (newNumber % 1 === 0) return console.info(`${numberIoP} es un numero par.`);

        return console.info(`${numberIoP} es un numero Impar.`)
    }

parOrIm(45)









//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const tempConversion = (temp, scale) => {
    
    
    if(temp === undefined) return console.warn('debes ingresar una temperatura a a convertir');
    if(typeof temp !== 'number') return console.error('solo numeros son validos');
    if (!scale) return console.warn('ingrese grado "C" o "F"');
    const scalesAllowed = new RegExp("^([C,F])*$", "ig");
    if (!scalesAllowed.test(scale)) return console.warn('ingrese grados Celcius "C" o fahrenheit "F"')
    
    scale = scale.toUpperCase()
    if (scale === 'C') return console.log(`${temp} C son ${temp * (9 / 5) + 32} F`)
    if (scale === 'F') return console.info(`${temp} F son ${temp - 32 * (5 / 9)} C`)
    
     
}

tempConversion(0, 'F')

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100, 2) devolverá 4 base 10.

const conversionNum = (numero, base) => {
 
   
   if (numero === undefined) return console.warn('Inserte un numero');
   if(typeof numero !== 'number') return console.warn('solo numeros son validos');
   if (base === undefined) return console.warn('Inserte un numero');
   if(typeof base !== 'number') return console.warn('solo numeros son validos');

   if (base === 2)  {
    return console.info(`el valor binario ${numero} con base ${base} es igual a ${parseInt(numero,base)} base 10`)
   } else if (base === 10)  {
    return console.info(`el valor decimal ${numero} con base ${base} es igual a ${(numero.toString(2))} base 2`)
   } else {
       return console.error('El tipo de base a convertir no es valido')
   }

}

conversionNum(452, 10);
conversionNum(111000100 , 2);








//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const descuento = (valor, descuento) => {

    if (valor === undefined) return console.warn('Inserte un valor');
    if (typeof valor !== 'number') return console.warn('solo numeros son validos');
    if (Math.sign(valor) === -1) return console.error('el valor no puede ser negativo');
    if (descuento === undefined) return console.warn('Inserte un numero');
    if (typeof descuento !== 'number') return console.warn('solo numeros son validos');
    if (descuento > valor) return console.warn('lo siento no le puedo devolver dinero');
    if (Math.sign(descuento) === -1) return console.error('el descuentono puede ser negativo')

    const totalDescuento = (valor * (descuento / 100));
    return console.info(valor - totalDescuento)
} 

descuento(1000,20)








//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const dateCalc = (dateString) => {

    if (dateString === undefined) return console.warn('Inserte una fecha');
    if (!dateString instanceof Date) return console.warn('ingrese una fecha valida')

    let currentDate = new Date().getTime() - dateString.getTime();

    let convertYearsMs = 1000 * 60 * 60 * 24 * 365; 

    let aniosHumanos = (Math.floor(currentDate / convertYearsMs));

    return Math.sign(aniosHumanos) === -1 
           ? console.info(`Faltan ${Math.abs(aniosHumanos)} para ese año`)
           : Math.sign(aniosHumanos) === 1 
           ? console.info(`Han pasado ${aniosHumanos} hasta el dia de hoy.`)
           : console.info('Estamos en el año actual')
    
}

dateCalc(new Date(2040,4,23));








//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const letterCount = stringL => {
    
    if (!stringL) console.warn('Escribe un texto');
    if (typeof stringL !== 'string') console.error('solo letras son validos')

    let vocales = 0;
    let consonantes = 0;

    for (let i of stringL) {
        if (/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(i)) {
            vocales++
        } 

        if (/[BCDFGHIJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/.test(i)) {
            consonantes++
        }
    }
    return console.info(`Hay ${vocales} vocales y Consonantes hay: ${consonantes}`)
}

letterCount('hola esto es una pruebaaa')








//19) Programa una función que valide que un texto sea un nombre y apellido válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

    const nameValidation = nombre => {

        if(!nombre) return console.warn('Inserte un nombre.');
        if (typeof nombre !== 'string') return console.warn('inserte un nombre valido');
        
        let regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/g.test(nombre);

        return regex
              ? console.info(`${nombre}, es un buen nombre.`)
              : console.warn(`${nombre} está mal, intenta otro nombre.`) 
    } 

    nameValidation('Rowil Moran')







//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const mailValidation = email => {

    if(!email) return console.warn('Inserte un nombre.');
    if (typeof email !== 'string') return console.warn('inserte un nombre valido');
    
    let regexEmail = /^[a-zA-Z0-9?\.?_?-?]+@[a-zA-Z0-9?]+(\.[a-zA-Z]{2,15})$/gi.test(email);

    return (regexEmail)
    ? console.info(`${email}, es un correo valido`)
    : console.warn(`${email} está mal, no es un correo valido`) 
} 

mailValidation('RowilMoran@gmail.com')







//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const squareFunc = array => {

    if(!array)  return console.warn('inserte un array')
    if(array.length === 0) return console.warn('inserte numeros en el array')
    if(!(array instanceof Array)) return console.error('inserte un array valido.')

    let squareArr = array.map(numb => {
        if (typeof numb !== 'number') return console.error('el array tienen que contener numeros')
        return numb ** 2
    })

    return console.info(squareArr);
}

squareFunc([5, 5, 4, 7])







//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const higherAndLower = numberss => {

    if(!numberss)  return console.warn('inserte un array');
    if(numberss.length === 0) return console.warn('inserte numeros en el array');
    if(!(numberss instanceof Array)) return console.error('inserte un array valido.');

    for (const numb of numberss) {
        if (typeof numb !== 'number') return console.error('el array tiene que contener numeros')  
    }

   let sortNumbers = numberss.sort((a,b) => {
        return a - b
    })

   let hiAndLoArr = [] 

   hiAndLoArr.push(sortNumbers[sortNumbers.length - 1]);
   hiAndLoArr.push(sortNumbers[0]);

   return console.info(hiAndLoArr)
} 

higherAndLower([5, 3, 7, 8, 9, 4, 7]);







// //23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}

const paresOimpares = parOImpar => {
    if(!parOImpar)  return console.warn('inserte un array');
    if(parOImpar.length === 0) return console.warn('inserte numeros en el array');
    if(!(parOImpar instanceof Array)) return console.error('inserte un array valido.');

    let par = [];
    let impar = [];
    for (const numb of parOImpar) {
        if (typeof numb !== 'number') return console.error('el array tiene que contener numeros');

         (numb % 2 === 0) ? par.push(numb) : impar.push(numb)
         }
    
    return console.table({
        par,
        impar
        })
    }
    
    paresOimpares([3,5,4,7,8])       


                            //segunda forma 
                            
                           /* const paresOimpares = parOImpar => {
                            if(!parOImpar)  return console.warn('inserte un array');
                            if(parOImpar.length === 0) return console.warn('inserte numeros en el array');
                            if(!(parOImpar instanceof Array)) return console.error('inserte un array valido.');

                            for (const numb of parOImpar) {
                                if (typeof numb !== 'number') return console.error('el array tiene que contener numeros');
                                }
                            
                            return console.info({
                                pares: parOImpar.filter(numb => numb % 2 === 0),
                                impares: parOImpar.filter(numb => numb % 2 === 1)
                            })
                        }
                        */
                 






//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const sortNumbers = arrNumb => {
    if(!arrNumb)  return console.warn('inserte un array');
    if(arrNumb.length === 0) return console.warn('inserte numeros en el array');
    if(!(arrNumb instanceof Array)) return console.error('inserte un array valido.');

    
    for (const numb of arrNumb) {
        if (typeof numb !== 'number') return console.error('el array tiene que contener numeros');
    }

    return console.info({
        asc: arrNumb.sort((a,b) => a-b),
        desc: arrNumb.map(nu => nu).sort((a,b) => b-a)
    })
}

sortNumbers([7, 5,7,8,6])








//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const deleteDuplicate = arreglo => {
    if (arreglo === undefined) return console.warn('Ingrese un valor en un arreglo');
    if (arreglo.length < 2) return console.log('ingrese dos o mas elementos en el array');

    let deletion = arreglo.filter((element, index) => {
        return  arreglo.indexOf(element) === index;
    })
   
    return console.info(deletion);
}

deleteDuplicate(["x", 10, "x", 2, "10", 10, true, true]);








//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

/*const average = numbArray => {
    if(!numbArray)  return console.warn('inserte un array');
    if(numbArray.length === 0) return console.warn('inserte numeros en el array');
    if(!(numbArray instanceof Array)) return console.error('inserte un array valido.');
    if (numbArray.length < 2) return console.log('ingrese dos o mas elementos en el array');

    let suma = 0;
    for (const num of  numbArray) {
       suma += num
    }
    
   return console.info(suma / numbArray.length)
 
}

average([9,8,7,6,5,4,3,2,1,0])*/

                        



                            //Segunda forma
                            /*const average = numbArray => {
                                if(!numbArray)  return console.warn('inserte un array');
                                if(numbArray.length === 0) return console.warn('inserte numeros en el array');
                                if(!(numbArray instanceof Array)) return console.error('inserte un array valido.');
                                if (numbArray.length < 2) return console.log('ingrese dos o mas elementos en el array');

                                for (numb of numbArray) {
                                    if (typeof numb !== 'number') return console.warn('solo numeros son admitidos')
                                }

                                let sum = 0;
                                let averageArray =  numbArray.forEach(number => sum =  number + sum );

                                return console.info(sum / numbArray.length)

                            }
                            
                            average([9,8,7,6,5,4,3,2,1,0])
                            */



                            // 3ra forma 
                            

                            const average = numbArray => {
                                if(!numbArray)  return console.warn('inserte un array');
                                if(numbArray.length === 0) return console.warn('inserte numeros en el array');
                                if(!(numbArray instanceof Array)) return console.error('inserte un array valido.');
                                if (numbArray.length < 2) return console.log('ingrese dos o mas elementos en el array');

                                for (numb of numbArray) {
                                    if (typeof numb !== 'number') return console.warn('solo numeros son admitidos')
                                }

                           
                                let averageArray =  numbArray.reduce((acc, curr) => {return acc + curr});


                                return console.info(averageArray / numbArray.length)

                            }

                            average([9,8,7,6,5,4,3,2,1,0])





            
/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
      - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
      - Valida que el título no rebase los 100 caracteres.
      - Valida que el director no rebase los 50 caracteres.
      - Valida que el año de estreno sea un número entero de 4 dígitos.
      - Valida que el país o paises sea introducidos en forma de arreglo.
      - Valida que los géneros sean introducidos en forma de arreglo.
      - Valida que los géneros introducidos esten dentro de los géneros 
       aceptados*.
      - Crea un método estático que devuelva los géneros aceptados*.
      - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
     - Crea un método que devuelva toda la ficha técnica de la película.
      - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor({id, titulo, director, anioEstreno, pais, genero, calificacion}) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validateIBM(id);
        this.validateTitulo(titulo);
        this.validateDirector(director);
        this.validateAnioEstreno(anioEstreno);
        this.validatePais(pais);
        this.validateGenero(genero)
        this.validateCalificacion(calificacion)
    }

    static get listaDeGeneros() {
        return["Action","Adult", "Adventure", "Animation", "Biography","Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.info('los generos aceptados son: ' + this.listaDeGeneros.join(', '))
    }
     
    validateCadena(propiedad, valor) {
        if (!valor) return console.warn(`inserte un valor en ${propiedad}`);
        if (typeof valor !== 'string') return console.warn (`el valor de ${propiedad} solo tiene que ser una cadena de texto`);

        return true
    }

    validateLongitud(propiedad, valor, longitud) {
        if (!valor) return console.warn(`inserte un valor en ${propiedad}`);
        if (typeof valor !== 'string') return console.warn (`el valor de ${propiedad} solo tiene que ser una cadena de texto`);
        if (valor.length > longitud) return console.warn (`el valor ${valor} de ${propiedad} tiene que ser menor a ${longitud}`);

        return true;
    }

    validateArreglo(propiedad, arreglo){

        if (!arreglo) return console.warn(`inserte un arreglo en ${propiedad}`);
        if (!(arreglo instanceof Array)) return console.warn(`solo arreglos son aceptados en ${propiedad}`)
        if (arreglo.length === 0) return console.warn(`el arreglo en ${propiedad} tiene que tener al menos un valor en forma de cadena`);

        for (let element of arreglo) {
          if (typeof element !== 'string') return console.warn('Solo datos en formas de cadenas son aceptados en el arreglo');
          if (element.length === 0) return console.warn(`inserte un nombre de un ${propiedad}`)
        }

        return true
        
    }

    validateIBM(id) {
    
        if (this.validateCadena('IBM ID', id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.warn('Este ID es invalido');
            }
        }
    }
    
    validateTitulo(titulo) {
       this.validateLongitud('Titulo', titulo, 100);
    }

    validateDirector(director) {
        this.validateLongitud('Director', director, 50);
    }

    validateAnioEstreno(anioEstreno){
        if (!(/^[0-9]{4}$/g.test(anioEstreno))) {
            return console.warn(`${anioEstreno} invalido, debe contener solo 4 numeros enteros`)
        }
    }

    validatePais(pais) {
        this.validateArreglo('Pais', pais);
    }


    validateGenero(genero) {
       if (this.validateArreglo('Generos', genero)) {

            for (let gen of genero){
                if (!(Pelicula.listaDeGeneros.includes(gen))) { 
                   console.warn(`${genero.join(', ')} no es un genero valido`);
                   Pelicula.generosAceptados();
                 } 
            }
        }
    }  
    
    validateCalificacion(calificacion) {
        
        if(!(/^[0-9]{1}(\.[0-9]{1})?$/.test(calificacion))) {
            return console.warn('Inserterte una calificacion valida.')
        }
    }

    fichaTecnica(){
       return console.info(`Fichas Técnica de ${this.titulo}: \nTitulo: ${this.titulo} \nDirector: ${this.director} \nAnio de Estreno: ${this.anioEstreno} \nPais: ${this.pais} \nGenero: ${this.genero} \nCalificacion: ${this.calificacion}`)
    }
}


const peliculas = [{
    id: "tt4651466",
    titulo: "Good Joe Bell",
    director: 'Reinaldo Marcus Green',
    anioEstreno: 2020,
    pais: ['Brasil', 'mongolia'],
    genero: ["Biography", "Drama"],
    calificacion: 5.2
    },
    {
    id: "tt5439812",
    titulo: "Zola",
    director: 'Janicza Bravo',
    anioEstreno: 2020,
    pais: ['Canada', 'USA'],
    genero: ["Comedy", "Crime", "Drama"],
    calificacion: 5.4 
    },
    {
    id: "tt0111161",
    titulo: "Cadena Perpetua",
    director: 'Frank Darabont',
    anioEstreno: 1995,
    pais: ['USA'],
    genero: ["Drama"],
    calificacion: 9.3
    }
]


peliculas.forEach(el=> new Pelicula(el).fichaTecnica());