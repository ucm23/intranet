import Fetcher from "../../libs/Petition";

export const indexDocuments = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/documents`
        })
        if (fetch?.status == 200) response = { data: fetch?.data?.data, status: true }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}

export const indexDocumentsByID = async ({ id, blob }) => {
    let response = { status: false }
    try {
        let url = `/documents/${id}`
        if (blob) url += '?blob=true';
        const fetch = await Fetcher({
            method: 'GET',
            url
        })
        if (blob) response = { data: fetch?.data, status: true }
        else response = { data: fetch?.data?.signedUrl, status: true }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}