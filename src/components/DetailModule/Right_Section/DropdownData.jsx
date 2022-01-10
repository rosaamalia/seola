import React from "react";

import * as RiIcons from "react-icons/ri"

export const DropdownData = [
    {
        title: "Perkenalan",
        path: '/detailmodul/perkenalan',
        iconClosed : <RiIcons.RiArrowDownSLine/>,
        iconOpened : <RiIcons.RiArrowUpSLine/>,
        subNav: [
            {
                title: "Video: Modul 2",
                path: '/detailmodul/perkenalan/video',  
            },
            {
                title: "Tekstual: Paradigma Pendidikan Kontekstual",
                path: '/detailmodul/perkenalan/tekstual',  
            },
        ]
    },
    {
        title: "Pembelajaran Mandiri Manusia",
        path: '/Pembelajaran'
    }
];