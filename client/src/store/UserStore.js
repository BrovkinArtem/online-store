import {makeAutoObservable} from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false          // _ - переменная изменяться не должна

    this._user = {}
    makeAutoObservable(this)      // Чтобы mobx следила за изменениями этих переменных
  }

  setIsAuth(bool) {                   // action, функция которая как-то изменяет состояние
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  get isAuth() {                   // computed функция, вызывается только если переменная была изменена
    return this._isAuth
  }

  get user() {
    return this._user
  }
}