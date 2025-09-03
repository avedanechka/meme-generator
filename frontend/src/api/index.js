import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

export const generateMeme = async (templateId, topText, bottomText) => {
    try {
        const response = await apiClient.post("/generate_meme", {
            template_id: templateId,
            top_text: topText,
            bottom_text: bottomText,
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при генерации мема:", error);
        throw error;
    }
};
