

const INITIAL_STATE = {
    users: {
        name: 'aamir',
        email: 'aamiralihussain53@gmail.com'
    }
}
//we update our state and return in this function
//the return in switch will directly save data in (INITIAL_STATE function)
export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'Setting_data':
            return ({
                ...state,
                users: [state.users,action.data]
            })
    }
    return state;
}