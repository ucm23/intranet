import Fetcher from "../../libs/Petition";

export const indexEvents = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/events`
        })
        if (fetch.status == 200) {
            let data = fetch?.data?.data.map((event) => {
                return {
                    ...event,
                    start: new Date(event?.start_date),
                    end: new Date(event?.end_date),
                }
            })
            response = { data: data, status: true }
        }
    } catch (error) {
        console.error("TCL: indexEvents -> error", error)
    } finally {
        return response;
    }
}

