const leaderboardService = (ajaxinstance) => {
  const leaderboard = {}

  leaderboard.leaderboardApi = (postData) => {
    return ajaxinstance.get('/api/super/leader-board', postData)
  }
  return leaderboard
}

export default leaderboardService
