'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, Firestore, getDoc } from 'firebase/firestore';

/**
 * Syncs the user profile to Firestore. 
 * Only sets default values (like accessLevel) if the document doesn't exist.
 */
function syncUserProfile(db: Firestore, user: any) {
  const userRef = doc(db, 'users', user.uid);
  getDoc(userRef).then((docSnap) => {
    if (!docSnap.exists()) {
      setDoc(userRef, {
        id: user.uid,
        email: user.email,
        displayName: user.displayName || 'User',
        profilePictureUrl: user.photoURL || '',
        accessLevel: 'free',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      setDoc(userRef, {
        updatedAt: serverTimestamp(),
      }, { merge: true });
    }
  });
}

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance);
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, db: Firestore, email: string, password: string): void {
  createUserWithEmailAndPassword(authInstance, email, password).then((result) => {
    syncUserProfile(db, result.user);
  });
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, db: Firestore, email: string, password: string): void {
  signInWithEmailAndPassword(authInstance, email, password).then((result) => {
    syncUserProfile(db, result.user);
  });
}

/** Initiate Google sign-in (non-blocking). */
export function initiateGoogleSignIn(authInstance: Auth, db: Firestore): void {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authInstance, provider).then((result) => {
    syncUserProfile(db, result.user);
  }).catch((error) => {
    console.error('Google Auth Error:', error);
  });
}
