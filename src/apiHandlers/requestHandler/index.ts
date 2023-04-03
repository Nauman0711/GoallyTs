import { instance } from "../instance";
import { error, success } from "../responseConstant";

const getRequest = async ({ target, params }: { target: string, params?: object }) => {
    try {
        const response = await instance.get(target, { params });
        if (response?.status === success) {
            return response;
        } else {
            // you can pass custom method here to handle different type of errors
            return error;
        }
    } catch (e) {
        // you can pass custom method here to handle different type of errors
        console.error(e);
        return error
    }
};

export { getRequest };