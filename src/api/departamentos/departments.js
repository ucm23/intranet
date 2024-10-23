import Fetcher from "../../libs/Petition";

export const indexDepartments = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/departments`
        })
        if (fetch.status == 200) {
            response = { data: fetch?.data?.data, status: true }
        }
    } catch (error) {
        console.error("TCL: indexDepartments -> error", error)
    } finally {
        return response;
    }
}