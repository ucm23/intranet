import Fetcher from "../../libs/Petition"

export const indexUsers = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/users`
        })
        if (fetch.status == 200) {
            let data = fetch?.data?.data.map((item) => {
                return {
                    label: `${item?.first_name} ${item?.last_name}`,
                    value: `${item?.id}`
                }
            })
            response = { data: data || [], status: true };
        }
    } catch (error) {
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}