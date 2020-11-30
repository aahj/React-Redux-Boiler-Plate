


//dispatch  upon call and passing the val in it,directly will goto reducer file and run function
const setData = () => {
    return (dispatch) => {
        console.log('ruuning');
        dispatch({
            type: 'Setting_data',
            data: 'khozaima'
        })
    }
}
export {
    setData
}