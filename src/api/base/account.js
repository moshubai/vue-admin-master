const accountService = (ajaxinstance) => {
  const account = {}

  account.AccountLogin = (postData) => {
    return ajaxinstance.post('/api/web/login', postData)
  }
  account.AccountLogout = (postData) => {
    return ajaxinstance.post('/api/web/logout', postData)
  }
  return account
}

export default accountService
