// import auth from '@react-native-firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import store from '../utils/redux/store';
import { updateToken } from '../utils/redux/slices/User';

const auth = getAuth();

export const createUser = async (fullName, email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, { displayName: fullName });
    console.log('Created user:', user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return { error: 'The email address is already in use.' };
    } else if (error.code === 'auth/invalid-email') {
      return { error: 'Please enter a valid email address.' };
    } else {
      return { error: 'Something went wrong with your request.' };
    }
  }
};

export const LoginUser = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        const token = await response.user.getIdToken();
        return {
            status: true,
            data: {
                displayName: response.user.displayName,
                email: response.user.email,
                token,
            }
        }
    } catch (error) {
        if(error.code === 'auth/wrong-password') {
        return {status: false, error: 'Please enter correct password.'}
        } else if (error.code === 'auth/user-not-found') {
                    return {status: false, error: 'The email you entered does not exist.'}
        }
        return {status: false, error: 'Something went wrong!'}
    }
}

export const logout = async ()=> {
    await auth.signOut();
}

export const checkToken = async ()=> {
    try {
        const user = auth.currentUser;
        if(!user) {
            console.log("No user is logged in.");
            return null;
        }
        let response = await user.getIdToken(true);
        store.dispatch(updateToken(response));
        console.log("res==",response);
        
        return response;
    }catch(error) {
        console.log("error", error);
        
    }
}
