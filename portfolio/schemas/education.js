// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'qualification',
            title: 'Qualification',
            type: 'string',
        },
        {
            name: 'school',
            title: 'School Name',
            type: 'string',
        },
        {
            name: 'from',
            title: 'From',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
            },
        },
        {
            name: 'to',
            title: 'To',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
            },
        },
        {
            name: 'percentage',
            title: 'Percentage/Grade',
            type: 'number',
        },
        {
            name: 'cet',
            title: 'CET Percentile',
            type: 'number',
        },
    ],
};
