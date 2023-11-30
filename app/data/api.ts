
export function api(path: string, init?: RequestInit) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const apiPrefix = "/fipe/api/v1/carros"
    const url = new URL(apiPrefix.concat(path), baseUrl)

    return fetch(url)
}