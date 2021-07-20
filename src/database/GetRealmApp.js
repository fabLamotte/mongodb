import Realm from 'realm'

// Configuration de la base de données
export function GetApp() {
   const appId = 'todolist-edrjw' 
   const appConfig = {
     id: appId,
     timeout: 10000,
   }
  return new Realm.App(appConfig)
}