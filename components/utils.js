/**
 * 
 * This is a temporary work aroud
 * i'm having a trouble that Date().toISOString()
 * is returning 2020-07-17T00:00:00.000Z
 * stead of 2020-07-17T00:00:00Z
 */
export function dateFormat(dateString) {
    var date = new Date(dateString)

    date.toISOString

    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, "0")
    const day = date.getDay().toString().padStart(2, "0")
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
}