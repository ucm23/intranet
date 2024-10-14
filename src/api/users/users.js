import Fetcher from "../../libs/Petition"

export const indexUsers = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/users`
        })
        response = { data: fetch?.data?.data, status: true }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}