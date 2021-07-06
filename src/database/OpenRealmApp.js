import Realm from 'realm'
import { UserSchema } from '../schema/UserSchema'
import { getRealmApp } from './GetReamlApp'

async function anonymousLogin() {
    let user
    try {
      const app = getRealmApp() // pass in the appConfig variable that you created earlier
      const credentials = Realm.Credentials.anonymous() // create an anonymous credential
      user = await app.logIn(credentials)
      return user
    } catch (error) {
      throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`
    }
}

async function openRealm() {
    let user
    let realm
    const app = getRealmApp();
    try {
        user = await anonymousLogin() // Appel de la fonction de login du dessus

        // console.log(`Logged in with the user: ${user.identity}`)
        const config = {
            schema: [UserSchema],
            sync: {
                user: app.currentUser,
                partitionValue: '60e417320478171d7bdd59f8',
            },
        }
        
        return realm = await Realm.open(config)
    } catch (error) {
        throw `Error opening realm: ${JSON.stringify(error, null, 2)}`
    }
}

export default openRealm
