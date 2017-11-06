import ActivePage from './containers/ActivePage'
import AuthenticationScreen from './containers/AuthScreen'
import NextSignInForm from './containers/sign-in-next'
import SignInForm from './containers/sign-in-react'
import SignUpForm from './containers/sign-up'
import FacebookButton from './containers/facebook-button'
import GoogleButton from './containers/google-button'
import authReducer from './reducers/authReducer'
import configureReducer from './reducers/configure'
import { configure as configureAction, authUser as authUserAction, signOutUser as signOutAction, deletAuthInfo as deletAuthInfoAction, authenticateUserByToken as authUserByTokenAction } from './actions'
import { authInfoStringToObj } from './utils/responseConverter'
import { setupTokenInLocalStorage, tokenExpirationChecker } from './utils/tokenManager'
import * as keys from './config/config'
import PageContainer from './components/page-container'
import ForgetPassword from './containers/forget-password'
import ChangePassword from './containers/change-password'

export {
  ActivePage,
  AuthenticationScreen,
  NextSignInForm,
  SignInForm,
  SignUpForm,
  FacebookButton,
  GoogleButton,
  authReducer,
  configureReducer,
  configureAction,
  authUserAction,
  signOutAction,
  deletAuthInfoAction,
  authUserByTokenAction,
  authInfoStringToObj,
  setupTokenInLocalStorage,
  tokenExpirationChecker,
  keys,
  PageContainer,
  ForgetPassword,
  ChangePassword,
}

export default {
  components: {
    ActivePage,
    AuthenticationScreen,
    SignInForm,
    SignUpForm,
    FacebookButton,
    GoogleButton,
    PageContainer,
    ForgetPassword,
    ChangePassword,
  },
  reducers: {
    authReducer,
    configureReducer,
  },
  actions: {
    configureAction,
    authUserAction,
    signOutAction,
    deletAuthInfoAction,
    authUserByTokenAction,
  },
  utils: {
    authInfoStringToObj,
    setupTokenInLocalStorage,
    tokenExpirationChecker,
  },
  keys,
}
