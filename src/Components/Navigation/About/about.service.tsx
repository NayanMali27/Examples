import API from "../../../Utils/Api/Api";
import { API_ENDPOINT } from "../../../Utils/ApiEndPoints";

export const getSuperHeroData = ()=> API({
    url:`/superheroes`,
    method:'get',
    hideErrorMessage:'Error in getting data',
});
export const getColorsData = ()=> API({
    url:`/colors`,
    method:'get',
    hideErrorMessage:'Error in getting data',
});