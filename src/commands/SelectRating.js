import C from "../Utils/Constants";

export default rating => {
    console.log(rating);

    return {
        type: C.SELECT_RATING,
        payload: rating
    };
};