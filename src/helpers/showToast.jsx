import { toast } from 'react-toastify';

export const showToast = (type, text) => {
    toast[type](text)
}

