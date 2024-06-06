import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialState = true) {
    const [flipped, setFlipped] = useState(initialState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [flipped, flip]
}

function useAxios(key, baseUrl) {
    const [responses, setResponses] = useState(key);
    const addResponse = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    };

    const clearResponses = () => setResponses([]);
    
    return [responses, addResponse, clearResponses];
}

export { useFlip, useAxios };