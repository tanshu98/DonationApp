const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userId: 1,
  firstName: 'Tanshu',
  lastName: 'Allewar',
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

const User = createSlice({
  name: 'user', // this is the name which will be using
  initialState,
  reducers: {
    // whatevr operaitons u wanna perform, that will be inside the reducers.
    // So reducers are func that update the state of the slice in respone to actions

    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName; // inside payload, entire object will be there.
    },
    resetToInitialState: ()=> {
        return initialState;
    }
  },
});

export const { updateFirstName, resetToInitialState } = User.actions;

export default User.reducer;

// We need to create this resetToInitialState whenever we want our app to get 
// reset to the intial state.
