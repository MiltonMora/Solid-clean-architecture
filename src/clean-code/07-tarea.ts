(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio'
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) {}
    }

    class InputEvents {
        setFocus()      {return true}
        getValue()      {return true}
        isActive()      {return true}
        removeValue()   {return true}
    }

    interface InputElementProps {
        id          : string,
        placeholder : string
        type        : HtmlType,
    value       : string,
    }

    class InputElement {

        public htlmElemnt       : HtmlElement
        public inputAttributes  : InputAttributes
        public inputEvents      : InputEvents

        constructor({ id, placeholder, type, value }: InputElementProps) {
            this.htlmElemnt = new HtmlElement( id, type )
            this.inputAttributes = new InputAttributes( value, placeholder )
            this.inputEvents = new InputEvents()
        }
    }

    const nameField = new InputElement( {
        id: 'txtName',
        placeholder: 'Enter first name',
        type: 'input',
        value: 'Fernando'
    })

    console.log( nameField )

})()