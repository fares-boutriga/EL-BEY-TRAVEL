import axios from 'axios'

export const uploadCloudianry=async(file)=>{
    const formData= new FormData()
    formData.append('file',file)
    formData.append("upload_preset", "walidcloud");
    const {data}=await axios.post("https://api.cloudinary.com/v1_1/dt7t7wjql/upload", formData)
    return {publicId: data?.public_id, url: data?.secure_url}
}