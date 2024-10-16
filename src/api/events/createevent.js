import Fetcher from "../../libs/Petition"; 

export const indexCreateEvents = async (eventData) => {
    let response = { status: false };
    try {
        const fetch = await Fetcher({
            method: 'POST', // Asegúrate de usar 'POST'
            url: `/events`,
            data: eventData // Envía los datos del nuevo evento aquí
        });

        if (fetch.status === 200) {
            let data = fetch?.data?.data.map((event) => {
                return {
                    ...event,
                    start: new Date(event?.start_date),
                    end: new Date(event?.end_date),
                };
            });
            response = { data: data, status: true };
        }
    } catch (error) {
        console.error("TCL: indexCreateEvents -> error", error);
    } finally {
        return response;
    }
};
