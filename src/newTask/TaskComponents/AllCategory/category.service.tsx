import API from "../../../Utils/Api/Api";

export const getCategoryData = ()=> API({
    url:`/category`,
    method:'get',
    hideErrorMessage:'Error in getting data',
});
