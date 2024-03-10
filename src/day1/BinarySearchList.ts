export default function bs_list(haystack: number[], needle: number): boolean {
  
  let lo = 0
  let hi = haystack.length
  
  do {
    let m = Math.floor((lo + hi) / 2)
    let val = haystack[m]
    if (val === needle) {
      return true
    } else if (val > needle) {
      hi = m
    } else {
      lo = m + 1
    }
  } while (lo < hi)
  
  return false
}