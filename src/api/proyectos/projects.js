import Fetcher from "../../libs/Petition";

export const indexProjects = async () => {
    let response = { status: false };
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/projects` 
        });
        
        if (fetch.status === 200) {
            let data = fetch?.data?.data.map((project) => {
                return {
                    ...project,
                    start: new Date(project?.start_date), 
                    end: new Date(project?.end_date),    
                };
            });
            response = { data: data, status: true };
        }
    } catch (error) {
        console.error("Error en indexProjects:", error);
    } finally {
        return response;
    }
};

export const detalleProjects = async (id) => {
    let response = { status: false };
    try {
        const fetch = await Fetcher({
            method: 'GET',
            url: `/projects/${id}`  // segun el proyecto que queremos ver
        });
        
        if (fetch.status === 200) {
            const projectDetails = {
                ...fetch.data.data,
                start: new Date(fetch.data.data.start_date),  
                end: new Date(fetch.data.data.end_date),
            };
            response = { data: projectDetails, status: true };
        }
    } catch (error) {
        console.error("Error en detalleProyecto:", error);
    } finally {
        return response;
    }
};
