import { useState } from 'react'

export const UseForm = ( initialState = {  }  ) => {

const [ values, setValues ] = useState( initialState );

const reset = () => {

    setValues( initialState );

}

    const handleInpuntChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
        });

    };

    return [ values,  handleInpuntChange, reset ];


}
