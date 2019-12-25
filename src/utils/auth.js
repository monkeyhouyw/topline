// auth认证
const KEY = 'topline-mine'
// 用户信息的获取，设置，删除
// 获取用户信息
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(KEY) || '{}')
}
// 设置用户信息 user是对象
export const setUser = (user) => {
  window.localStorage.setItem(KEY, JSON.stringify(user))
}
// 删除用户信息
export const delUser = () => {
  window.localStorage.removeItem(KEY)
}
