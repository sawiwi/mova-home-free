import { createContext, useState, useEffect } from "react";
import EmailSend from "../../services/email/api-email";


export const EmailContext = createContext();

const EmailProvider = ({children}) => {


    return(
        <EmailContext.Provider
            value={{
                contextData:{

                }
            }}
        ></EmailContext.Provider>
    )
}

export default EmailProvider