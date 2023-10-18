const imageUpload = async (image: File) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "trip4all");
  data.append("cloud_name", "dwqb8tydq");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dwqb8tydq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const cloudData = await res.json();
    console.log(cloudData);
    return cloudData;
  } catch (error) {
    return error;
  }
};


export default imageUpload;