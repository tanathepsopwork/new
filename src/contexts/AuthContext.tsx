import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile as updateFirebaseProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const user: User = {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
          name: userData.name,
          username: userData.username,
          avatar: userData.avatar,
          joinDate: userData.joinDate,
          credit: userData.credit || 0
        };
        setUser(user);
      }
    } catch (error) {
      throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, username?: string) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateFirebaseProfile(userCredential.user, {
        displayName: name
      });

      const userData = {
        name,
        username: username || email.split('@')[0],
        email,
        joinDate: new Date().toISOString(),
        credit: 1000, // Welcome bonus
        avatar: null
      };

      await setDoc(doc(db, 'users', userCredential.user.uid), userData);
      
      const user: User = {
        id: userCredential.user.uid,
        email,
        name,
        username: userData.username,
        joinDate: userData.joinDate,
        credit: userData.credit
      };
      
      setUser(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('อีเมลนี้ถูกใช้งานแล้ว');
      }
      throw new Error('การสมัครสมาชิกล้มเหลว');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      
      if (!userDoc.exists()) {
        // Create new user document
        const userData = {
          name: result.user.displayName || 'User',
          username: result.user.email?.split('@')[0] || 'user',
          email: result.user.email!,
          joinDate: new Date().toISOString(),
          credit: 1000,
          avatar: result.user.photoURL
        };
        
        await setDoc(doc(db, 'users', result.user.uid), userData);
        
        setUser({
          id: result.user.uid,
          email: result.user.email!,
          name: userData.name,
          username: userData.username,
          joinDate: userData.joinDate,
          credit: userData.credit,
          avatar: userData.avatar
        });
      } else {
        const userData = userDoc.data();
        setUser({
          id: result.user.uid,
          email: result.user.email!,
          name: userData.name,
          username: userData.username,
          joinDate: userData.joinDate,
          credit: userData.credit || 0,
          avatar: userData.avatar || result.user.photoURL
        });
      }
    } catch (error) {
      throw new Error('การเข้าสู่ระบบด้วย Google ล้มเหลว');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) return;
    
    try {
      await updateDoc(doc(db, 'users', user.id), data);
      setUser({ ...user, ...data });
    } catch (error) {
      throw new Error('การอัปเดตโปรไฟล์ล้มเหลว');
    }
  };
  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  // Listen to auth state changes
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            id: firebaseUser.uid,
            email: firebaseUser.email!,
            name: userData.name,
            username: userData.username,
            joinDate: userData.joinDate,
            credit: userData.credit || 0,
            avatar: userData.avatar
          });
        }
      } else {
        setUser(null);
      }
      setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const value = {
    user,
    login,
    register,
    loginWithGoogle,
    logout,
    updateProfile,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}