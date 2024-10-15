import Fetcher from "../../libs/Petition";

export const indexTipoevent = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/events`
        })
        if (fetch.status == 200) {
            let data = fetch?.data?.data.map((tipo) => {
                return {
                    ...tipo,
                }
            })
            response = { data: data, status: true }
        }
    } catch (error) {
        console.error("TCL: indexTipoevent -> error", error)
    } finally {
        return response;
    }
}

