const cloudPreset = "ml_default";
const cloudUrl = "	https://api.cloudinary.com/v1_1/duf68yakp/upload";

export const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append("upload_preset", cloudPreset);
    formData.append("file", archivoSubir);
  
    try {
      const resp = await fetch(cloudUrl, {
        method: "POST",
        body: formData,
      });
      if (resp.ok) {
        const cloudResp = await resp.json();
        console.log(cloudResp);
        return cloudResp.secure_url;
      } else {
        throw await resp.json();
      }
    } catch (error) {
      throw error;
    }
  };