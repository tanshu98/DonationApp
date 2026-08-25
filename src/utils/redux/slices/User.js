const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    userId:1,
    firstName: 'tanshu',
    lastName: 'allewar',

}

const User = createSlice({
    name: 'user', // this is the name which will be using
    initialState,
    reducers: { // whatevr operaitons u wanna perform, that will be inside the reducers.
// So reducers are func that update the state of the slice in respone to actions

updateFirstName: (state, action)=> {
    state.firstName = action.payload.firstName // inside payload, entire object will be there.
}
    }
});

export const {updateFirstName}  = User.actions;

export default User.reducer;