
// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import app from "../firebase/firebase.config";


// const auth = getAuth(app);

// export const AuthContext = createContext();

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
    
//     const signIn = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     useEffect( ()=>{
//         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//             console.log('Current User :', currentUser);
//             setLoading(false);
//         });
//         return ()=>{
//             return unSubscribe();
//         }
//     }, [])

//     const createUser = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const AuthInfo = {
//         user,
//         loading,
//         createUser,
//         signIn
//     }

//     return (
//         <AuthContext.Provider value={AuthInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;