const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const addNewStudent = async (payload: any) => {
  const response = await fetch(`${url}?action=addNewStudent`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return "Anda berhasil mendaftar";
  } else {
    return "Gagal Mendaftar";
  }
};
