import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  
   async googleLogin() {
try{
    //const result = await signInWithPopup(auth, provider);
  alert('Clicked');
      const result =
      await FirebaseAuthentication.signInWithGoogle();

alert(JSON.stringify(result));
  const idToken =
    result.credential?.idToken;

    return {
       token: result.credential?.idToken,
  name: result.user?.displayName,
  email: result.user?.email,
  photo: result.user?.photoUrl
    };
  }catch(e){
    alert(JSON.stringify(e));
    console.error(e);
  }
  return { token: null, name: null, email: null, photo: null };
  }
}
