export interface StatusTypes {
    displayName: string,
    statusName: string,
    bgColor: string,
    textColor: string,
    icon: string
}

// test icons here
// https://codesandbox.io/s/material-demo-forked-ljn6c?file=/demo.js
// if it is not readable, try to import manually on src/utils/icon.js
// see sample of manual import for CleaningServices Icon
export const statusTypes: StatusTypes[] = 
[
    // {
    //     displayName: "Unavailable",
    //     statusName: "UNAVAILABLE",
    //     bgColor: "#607D8B",
    //     textColor: "#FFF"
    // },
    {
        displayName: "Vacant",
        statusName: "VACANT",
        bgColor: "#22A447",
        textColor: "#FFF",
        icon: "KingBed"
    },
    // {
    //     displayName: "Hold",
    //     statusName: "HOLD",
    //     bgColor: "#CDDC39",
    //     textColor: "#000
    // },
    {
        displayName: "Occupied",
        statusName: "OCCUPIED",
        bgColor: "#B71C1C",
        textColor: "#FFF",
        icon: "Hotel"
    },
    // {
    //     displayName: "Reserved",
    //     statusName: "RESERVED",
    //     bgColor: "#F44336",
    //     textColor: "#FFF"
    // },
    {
        displayName: "Cleaning Needed",
        statusName: "CLEANING.NEEDED",
        bgColor: "#FF9800",
        textColor: "#FFF",
        icon: "CleaningServices"
    },
    {
        displayName: "Cleaning",
        statusName: "CLEANING.IN.PROGRESS",
        bgColor: "#FFEB3B",
        textColor: "#000",
        icon: "CleaningServices"
    }
]