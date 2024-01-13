(() => {
    type FruitColor = 'red' | 'yellow' | 'purple'; 
    interface FruitByColor{
        color:FruitColor,
        fruitsName: string[]
    }
    const fruitsByColor : FruitByColor[] = [
        {
            color: 'red',
            fruitsName: ["manzana" ,"cereza" ,"ciruela"]
        },
        {
            color: 'yellow',
            fruitsName: ['piña','banana']
        },
        {
            color: 'purple',
            fruitsName: ['moras','uvas']
        }
    ]
        // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {        
        const redFruits =  fruitsByColor.find(fruit=>fruit.color==='red')!;
        return redFruits.fruitsName.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: FruitColor ): string[] {
        try {
            return fruitsByColor.find(fruit=>fruit.color===color)!.fruitsName;
        } catch (error) {
            throw Error('the color must be: red, yellow, purple');            
        }       
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function validateWorkingSteps() :string {
        if(!isFirstStepWorking) return 'First Step broken';

        if(!isSecondStepWorking) return 'Second step broken';

        if(!isThirdStepWorking) return 'Third step broken';

        if(!isFourthStepWorking) return 'Fourth step broken.';

        return 'Working properly!';

        }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: validateWorkingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




