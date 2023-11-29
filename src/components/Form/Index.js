import React, { useState } from "react";
import { companyForm } from "../../constants/company";
import EmailSend from "../../services/email/api-email";


const FormContact = ()=>{

  const [serverErrorMsg, setServerErrorMsg] = useState({
		status200: "",
		status500: "",
		status400: "",
		status404: "",
		alreadyData: {
			email: "",
		},
	});

  const sendData = {
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
    termsAndConditions: true,
    companyId:companyForm.id,
    meetingData:'No indica',
    lastName: 'No indica',
  }



const [formData, setFormData] = useState({sendData});

const handleInputChange = (e) =>{
  const inputChange = {...formData, [e.target.name]: e.target.value};
  setFormData(inputChange);
}

const onFormSubmit = async (submitData) =>{
  const {name, email, phone, subject, message} = submitData;
  let submittedData = {
    name: name,
    email: email,
    phone: phone,
    subject :subject,
    message: message
  }

  try{
    await EmailSend.postEmail(submittedData);
    setServerErrorMsg({
      status200:"Enviado correctamente"
    });
    console.log("mensaje enviado")
    resetForm()
    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }catch(error){
    console.log(error)
    if(error.response.data.statusCode === 500){
      setServerErrorMsg({
        status500: `Status (${error.response.data.statusCode}): Error de servidor`,
      });
      return;
    }
    if(error.response.data.statusCode === 400){
      setServerErrorMsg({
        status400: `Status (${
          error.response?.data?.statusCode
        }): Los campos ${error.response?.data?.message.map((msg) => msg)} deben ser completados`,
      });
      return;
    }
  }

}

const resetForm = () =>{
  setFormData({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
    lastName: '',
  })
}

    return(
        <div className="bg-gray-200 p-4 xl:p-2 xl:py-5 xl:px-6" id="ContactSectionScroll">
            <div className="text-center mb-3">
                <h2 className="font-semibold text-2xl mb-2">Contáctanos</h2>
                <hr className=" mb-2 w-18 mx-20 text-primary-default h-[2.5px] border-none bg-primary-default"></hr>
                <hr className="w-18 mx-28 text-primary-default h-[2px] border-none bg-primary-default"></hr>
            </div>
            <div className="text-center mb-2">
                <p>Envienos un mensaje y nos contactaremos a la brevedad.</p>
            </div>
            <form className="py-3" onSubmit={onFormSubmit}>
            <div className="w-full md:w-6/6 flex justify-center items-center flex-col mb-2">
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Su Nombre*"
                className="w-full p-3 rounded-md bg-gray-100 text-base text-gray-900 placeholder:text-black placeholder:font-normal outline-none"
                onChange={handleInputChange}
                value={formData?.name}
                />
            </div>
            <div className="w-full md:w-6/6 flex justify-center items-center flex-col mb-2">
                <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Su Email*"
                className="w-full p-3 rounded-md bg-gray-100 text-base text-gray-900 placeholder:text-black placeholder:font-normal outline-none"
                onChange={handleInputChange}
                value={formData?.email}

                />
            </div>
            <div className="w-full md:w-6/6 flex justify-center items-center flex-col mb-2">
                <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Teléfono o Celular"
                className="w-full p-3 rounded-md bg-gray-100 text-base text-gray-900 placeholder:text-black placeholder:font-normal outline-none"
                onChange={handleInputChange}
                value={formData?.phone}
                pattern="[0-9]{9}"
                maxLength="9"
                />
            </div>
            <div className="w-full md:w-6/6 flex justify-center items-center flex-col mb-2">
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Asunto"
                className="w-full p-3 rounded-md bg-gray-100 text-base text-gray-900 placeholder:text-black placeholder:font-normal outline-none"
                onChange={handleInputChange}
                value={formData?.subject}
                />
            </div>
            <div className="max-sm:py-2 mb-2">
                <textarea
                className="textarea w-full textarea-lg rounded-sm bg-gray-100 py-2 px-2 border-2 placeholder:text-black"
                type="text"
                placeholder="Mensaje..."
                name="message"
                id="message"
                onChange={handleInputChange}
                value={formData?.message}
                ></textarea>
            </div>
            <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-[#ff8017]/60 rounded-md border border-[#ff8017] text-white px-6 py-2 hover:bg-[#ff8017]"
          >
            <div className="text-lg font-medium capitalize mx-auto">
              <span className="max-h-10">
                Enviar
                {/* {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Cargando...</span>
                  </div>
                ) : (
                  'Enviar'
                )} */}
              </span>
            </div>
          </button>
        </div>
            
            </form>
        </div>
    )
}

export default FormContact;