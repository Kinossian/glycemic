import { auth, db } from "./firebase.config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

// ----------- AUTHENTIFICATION -------------------------

// Sign Up
export const doCreateUserWithEmailAndPassword = (
    email: string,
    password: string,
    pseudo: string
) => {
    auth.createUserWithEmailAndPassword(email, password).then(
        async (userAuth) => {
            await userAuth.user?.updateProfile({
                displayName: pseudo,
            });
            window.location.reload();
        }
    );
};

// Sign In
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email: string) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = async (password: string) => {
    if (auth.currentUser) {
        await auth.currentUser.updatePassword(password);
    }
    throw Error("No auth.currentUser!");
};

// ----------- DATA BASE -------------------------

// Add Document
export const doAddDocAliment = (collectionName: string, data: object) => {
    addDoc(collection(db, collectionName), data);
};

// Delete Document
export const doDeleteDoc = (alimentId: any) => {
    deleteDoc(doc(db, "aliments", alimentId));
};
