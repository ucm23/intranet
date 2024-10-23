<<<<<<< HEAD
import Fetcher from "../../libs/Petition";
=======
import Fetcher from "../../libs/Petition"
>>>>>>> cano

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
<<<<<<< HEAD
        console.error("TCL: indexUsers -> error", error)
    } finally {
        return response;
    }
}
=======
        console.error("🚀 ~ indeDocuments ~ error:", error)
    } finally {
        return response;
    }
}
>>>>>>> cano
