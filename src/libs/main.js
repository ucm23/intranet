<<<<<<< HEAD
=======
import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';

>>>>>>> cano
export const baseURL = "https://api-metrix.victum-re.online/intranet";

export const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8; multipart/form-data"
};

export const headers2 = {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data"
<<<<<<< HEAD
};
=======
};

export const modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        ['link', 'video'],
    ]
};

export const formats = [
    'bold', 'italic', 'underline', 'blockquote',
    'link', 'video'
];

export const locales = {
    es: es
};

export const localizer = dateFnsLocalizer({
    format: (date, formatString) => format(date, formatString, { locale: es }),
    parse: (dateString, formatString) => parse(dateString, formatString, new Date(), { locale: es }),
    startOfWeek: () => startOfWeek(new Date(), { locale: es }),
    getDay: (date) => getDay(date),
    locales,
});
>>>>>>> cano
