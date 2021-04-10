/* ------------------------- */
/*  Fonctions                */
/* ------------------------- */
function add(x,y){
    if(isNaN(y)){
        return x;
    }
    return x+y;
}

function substract(x,y){ 
    if(isNaN(y)){
        return x;
    }
    return x-y;
}

function multiply(x,y){
    if(isNaN(y)){
        return x;
    }
    return x*y;
}

function divide(x,y){
    if(isNaN(y)){
        return x;
    }
    return x/y;
}

/* --------------- */
/*  Vars globales  */
/* --------------- */
const result = document.querySelector('.results-row');
var buffer = '0';

/* ------------------------- */
/*  Listeners sur les clics  */
/* ------------------------- */
document.querySelector('.calculator').addEventListener('click', function(event) { 

    switch(event.target.innerText){
        // Clic sur un des chiffres
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(result.innerText === '0' || result.innerText.includes('%') || result.innerText.includes('x') || result.innerText.includes('-') || result.innerText.includes('+')){      // Si + est affiché et que j'appuie sur un nombre
                result.innerText = event.target.innerText;      // Afficher le nombre
            }
            else {  // Ensuite, afficher les chiffres à la suite
                result.innerText += event.target.innerText;
            }
            break;
        
        // Clic sur C = Réinitialiser tout
        case 'C':
            result.innerText = '0';
            buffer = '0';
            break;
        
        // Clic sur DEL = Effacer la dernière saisie si non vide, sinon réafficher 0
        case 'DEL':
            console.log("Delete");
            if(result.innerText.length > 1){
                result.innerText = result.innerText.slice(0, -1);
            } else {
                result.innerText = '0'
            }
            break;

        // Clic sur % = Préparer une division
        case '%':
            console.log("Divide");
            calculation = "Divide";
            buffer = result.innerText;
            result.innerText = event.target.innerText;
            break;

        // Clic sur x = Préparer une multiplication
        case 'x':
            console.log("Multiply");
            calculation = "Multiply";
            buffer = result.innerText;
            result.innerText = event.target.innerText;
            break;
    
        // Clic sur - = Préparer une soustraction
        case '-':
            console.log("Substract");
            calculation = "Substract";
            buffer = result.innerText;
            result.innerText = event.target.innerText;
            break;

        // Clic sur + = Préparer une addition
        case '+':
            console.log("Add");
            calculation = "Add";
            buffer = result.innerText;
            result.innerText = event.target.innerText;
            break;

         // Clic sur = = Faire calcul demandé
        case '=':
            console.log("Equals");
        
            switch(calculation){
                case 'Divide':
                    result.innerText = Math.round(divide(parseInt(buffer), parseInt(result.innerText)));
                    break;
                case 'Multiply':
                    result.innerText = multiply(parseInt(buffer), parseInt(result.innerText));
                    break;
                case 'Substract':
                    result.innerText = substract(parseInt(buffer), parseInt(result.innerText));
                    break;
                case 'Add':
                    result.innerText = add(parseInt(buffer), parseInt(result.innerText));
                    break;
                default:
                    console.log("Unknown valeur for calculation");
            }

            buffer = '0';
            calculation = '0';
            break;
        
        default:
            console.log(`No statement for event.target.innerText: ${event.target.innerText}`);
    }
});