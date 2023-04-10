(() => {

    function isRedFruit( fruit: string ): boolean {

        const redFruits = ['manzana', 'cereza', 'ciruela'];

        return redFruits.includes(fruit);
    }

    type fruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: fruitColor ): string[] {

        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas'] 
        }

        if (Object.prototype.hasOwnProperty.call(fruitsByColor, color)) return fruitsByColor[color];
        
        throw Error('the color must be: red, yellow, purple');
    }

    const isFirstStepWorking  = true;
    const isSecondStepWorking = true;
    const isThirdStepWorking  = true;
    const isFourthStepWorking = true;

    function workingSteps() {

        if (!isFirstStepWorking) return 'First step broken.';

        if (!isSecondStepWorking) return 'Second step broken.';

        if (!isThirdStepWorking) return 'Third step broken.';

        if (!isFourthStepWorking) return 'Fourth step broken.';

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
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();