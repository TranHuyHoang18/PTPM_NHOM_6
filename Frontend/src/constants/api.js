import AppConfig from './config'

let envConfig = AppConfig.prod

if (process.env.NODE_ENV === 'development') {
  envConfig = AppConfig.dev
}
if (process.env.NODE_ENV === 'local') {
  envConfig = AppConfig.local
}

const config = envConfig

const API = {
  REGISTER: `${config.BACKEND_ADDRESS}/api/users`,
  LOGIN: `${config.BACKEND_ADDRESS}/api/users/login`,
  FORGOT_PASSWORD: `${config.BACKEND_ADDRESS}/api/users/forgot-password`,
  GET_CODE: `${config.BACKEND_ADDRESS}/api/users/send-email-code`,
  SEND_EMAIL_REGISTER: `${config.BACKEND_ADDRESS}/api/users/send-email-register`,
  CREATE_MAIN: `${config.BACKEND_ADDRESS}/api/main`,
  UPDATE_POSITION: `${config.BACKEND_ADDRESS}/api/users/position`,
  GET_USER_BY_EMAIL: `${config.BACKEND_ADDRESS}/api/users`,
  // API word
  CREATE_WORD: `${config.BACKEND_ADDRESS}/api/word`,
  UPDATE_WORD: `${config.BACKEND_ADDRESS}/api/word`,
  DELETE_WORD: `${config.BACKEND_ADDRESS}/api/word`,
  GET_WORDS: `${config.BACKEND_ADDRESS}/api/word`,
  // API example
  CREATE_EXAMPLE: `${config.BACKEND_ADDRESS}/api/example`,
  UPDATE_EXAMPLE: `${config.BACKEND_ADDRESS}/api/example`,
  DELETE_EXAMPLE: `${config.BACKEND_ADDRESS}/api/example`,
  GET_EXAMPLES: `${config.BACKEND_ADDRESS}/api/example`,
  // API Bad word
  CREATE_BADWORD: `${config.BACKEND_ADDRESS}/api/badword`,
  UPDATE_BADWORD: `${config.BACKEND_ADDRESS}/api/badword`,
  DELETE_BADWORD: `${config.BACKEND_ADDRESS}/api/badword`,
  GET_BADWORDS: `${config.BACKEND_ADDRESS}/api/badword`,
  // RANK
  GET_RANKS: `${config.BACKEND_ADDRESS}/api/rank`
}

const SOCKET_EVENT = {
  socket: 'socket',
  urlSocket: config.SOCKET_SERVER
}

export {
  API,
  SOCKET_EVENT
}
