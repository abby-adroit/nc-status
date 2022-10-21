import { createContext } from "react";

export interface IState {
    isAPI: boolean,
    setIsAPI: (c: boolean) => void,
    // isSocket: boolean,
    // setIsSocket: (c: boolean) => void
};

const initialState = {
    isAPI: false,
    setIsAPI: () => {},
    // isSocket: false,
    // setIsSocket: () => {}
};

const MainContext = createContext<IState>(initialState);

export default MainContext;