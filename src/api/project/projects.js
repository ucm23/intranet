import Fetcher from "../../libs/Petition";

export const indexProjects = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/projects`
        })
        if (fetch.status == 200) {
            response = { data: fetch?.data?.data, status: true }
        }
    } catch (error) {
        console.error("TCL: indexProjects -> error", error)
    } finally {
        return response;
    }
}