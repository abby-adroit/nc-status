import { createContext } from "react";

export interface IState {
    deviceToken: string,
    setDeviceToken: (c: string) => void,
    isAPI: boolean,
    setIsAPI: (c: boolean) => void,
    isSocket: boolean,
    setIsSocket: (c: boolean) => void
};

const initialState = {
    deviceToken: "",
    setDeviceToken: () => {},
    isAPI: false,
    setIsAPI: () => {},
    isSocket: false,
    setIsSocket: () => {}
};

const MainContext = createContext<IState>(initialState);

export default MainContext;