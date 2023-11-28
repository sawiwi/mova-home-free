import api from "../../api";


const EmailSend = {
    postEmail: async (data)=>{
        const response = await api.post(`https://pages-api.panal.house/contact`, data )
        return response.data;
    
    }

}

export default EmailSend;