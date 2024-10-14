import Fetcher from "../../libs/Petition"

export const indexNews = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/news`
        })
        response = { data: fetch?.data?.data, status: true }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}

export const indexIMGByID = async ({ id, picture = 'body', thumbnail = false }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/news/${id}?blob=false&picture=${picture}&thumbnail=${thumbnail}`
        })
        response = { data: fetch?.data?.signedUrl, status: true }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}