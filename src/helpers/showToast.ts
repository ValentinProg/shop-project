import { toast } from 'react-toastify';

export const showToast = (type: string, text: string) => {
    toast[type](text)
}

