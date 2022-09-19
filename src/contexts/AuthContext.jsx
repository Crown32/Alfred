import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          name: user.displayName,

        });
      }else{
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup  = (email, password) => createUserWithEmailAndPassword(auth,email, password);
  const login  = (email, password) => signInWithEmailAndPassword(auth,email, password);
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  }
  const updateName = async (name) => {
    await updateProfile(auth.currentUser, {displayName: name});
    setUser({
      ...user,
      name
    });
  }

  return <AuthContext.Provider value={{ user, login, logout, signup, updateName }}>{loading ? null : children}</AuthContext.Provider>;
}