import Fetcher from "../../libs/Petition";

export const indexUsers = async ({ }) => {
    let response = { status: false }
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/users`
        })
        if (fetch.status == 200) {
            let data = fetch?.data?.data.map((users) => {
                return {
                    ...users,
                    name: users.name,  
                    lastname: users.lastname,
                    mail: users.mail,

                }
            })
            response = { data: data, status: true }
        }
    } catch (error) {
        console.error("TCL: indexUsers -> error", error)
    } finally {
        return response;
    }
}
