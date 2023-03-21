import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCsmz_jPnOI-U04eoUxcscMVN4bZ2c3az4",
  authDomain: "restaurantapp-ba827.firebaseapp.com",
  databaseURL: "https://restaurantapp-ba827-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-ba827",
  storageBucket: "restaurantapp-ba827.appspot.com",
  messagingSenderId: "55689801329",
  appId: "1:55689801329:web:9b20461158ff22bdce35d0"
};

const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,firestore,storage};