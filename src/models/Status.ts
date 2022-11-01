export interface StatusTypes {
    displayName: string,
    statusName: string,
    bgColor: string,
    textColor: string
}

export const statusTypes: StatusTypes[] = 
[
    {
        displayName: "Unavailable",
        statusName: "UNAVAILABLE",
        bgColor: "#607D8B",
        textColor: "#FFF"
    },
    {
        displayName: "Vacant",
        statusName: "VACANT",
        bgColor: "#22A447",
        textColor: "#FFF"
    },
    {
        displayName: "Hold",
        statusName: "HOLD",
        bgColor: "#CDDC39",
        textColor: "#000"
    },
    {
        displayName: "Occupied",
        statusName: "OCCUPIED",
        bgColor: "#B71C1C",
        textColor: "#FFF"
    },
    {
        displayName: "Reserved",
        statusName: "RESERVED",
        bgColor: "#F44336",
        textColor: "#FFF"
    },
    {
        displayName: "Cleaning Needed",
        statusName: "CLEANING.NEEDED",
        bgColor: "#FF9800",
        textColor: "#FFF"
    },
    {
        displayName: "Cleaning",
        statusName: "CLEANING.IN.PROGRESS",
        bgColor: "#FFEB3B",
        textColor: "#000"
    }
]