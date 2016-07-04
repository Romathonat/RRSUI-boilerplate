const reducer = (state, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return {
                ...state,
                item: action.item
              }
        default:
            return state
    }
}

export default reducer
