import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {

        // blogPost could be named state instead as it represents the first argument takeny by the reducer function(blogReducer) by default
        // dispatch could be named runMyReducer instead as it runs the reducer function taking an action and pass it  to
        // the reducer function as the its second argument 
        // looking like this ==>  reducure (state,action)
        const [state, dispatch] = useReducer(reducer, initialState)


        // actions === {addBlogPost: (dispatch) => { return () => {} }}
        const boundActions = {}
        // here we loop over the actions object assigning a key with a function name and its value is the function body taking in the real 
        // dispatch function this time 
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)

        }

        return <Context.Provider value={{ state, ...boundActions }} >
            {children}
        </Context.Provider >
    }

    return { Context, Provider }
};