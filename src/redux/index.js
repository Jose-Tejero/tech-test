const INITIAL_STATE = {
    name: '',
    secondName: '',
    lastname: '',
    secondLastname: '',
    day: 0,
    month: '',
    year: 0,
    email: '',
    tel: 0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
            
        case 'SET_SECONDNAME':
            return {
                ...state,
                secondName: action.payload
            }

        case 'SET_LASTNAME':
            return {
                ...state,
                lastname: action.payload
            }

        case 'SET_SECONDLASTNAME':
            return {
                ...state,
                secondLastname: action.payload
            }

        case 'SET_DAY':
            return {
                ...state,
                day: action.payload
            }

        case 'SET_MONTH':
            return {
                ...state,
                month: action.payload
            }

        case 'SET_YEAR':
            return {
                ...state,
                year: action.payload
            }

        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }

        case 'SET_TEL':
            return {
                ...state,
                tel: action.payload
            }

        default:
            return state;
    }
}

export default reducer;