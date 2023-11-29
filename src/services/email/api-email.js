import {api} from "../../api/";


const EmailSend = {
    postEmail: async (data)=>{
        const response = await api.post(`/contact`, data )
        return response.data;
    
    }

}

export default EmailSend;