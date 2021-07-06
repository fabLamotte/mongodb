import Realm from 'realm'

// Configuration de la base de données
export function getRealmApp() {
   const appId = 'application-0-aieme' 
   const appConfig = {
     id: appId,
     timeout: 10000,
   }
  return new Realm.App(appConfig)
}