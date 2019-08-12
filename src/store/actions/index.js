export const onLogin = (data_uid, data_email) => {
   return {
      type: 'LOGIN_SUCCESS',
      payload: {
         uid: data_uid,
         email: data_email
      }
   }
}
