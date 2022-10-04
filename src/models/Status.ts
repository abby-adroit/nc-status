export interface StatusTypes {
    displayName: string,
    statusName: string,
    bgColor: string
}

export const statusTypes: StatusTypes[] = 
[
    {
        displayName: "Vacant",
        statusName: "VACANT",
        bgColor: "success"
    },
    {
        displayName: "Occupied",
        statusName: "OCCUPIED",
        bgColor: "error"
    },
    {
        displayName: "Cleaning",
        statusName: "CLEANING",
        bgColor: "warning"
    }
]