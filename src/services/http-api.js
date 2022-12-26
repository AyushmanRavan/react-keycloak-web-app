import axiosInstance from "./http-axios";

// admin/manager/user
const get = async (apiEndpoint) => {
	try {
		const res = await axiosInstance.get(apiEndpoint);
		return res
	} catch (err) {
		console.log(err);
	}
};

const ApiService = {
    get,
};

export default ApiService;




// https://medium.com/@raju.allen/a-simple-crud-application-with-login-on-react-redux-axios-nodejs-rest-api-mongodb-part-ii-376606eb67a7
// function get(apiEndpoint){
//     return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
//        return response;
//     }).catch((err)=>{
//        console.log(err);
//     })
// }
// function post(apiEndpoint, payload){
//     return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
//         return response;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function put(apiEndpoint, payload){
//     return axios.put(config.baseUrl+apiEndpoint, payload).then((response)=>{
//         return response;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
// function delete(apiEndpoint){
//     return axios.delete(config.baseUrl+apiEndpoint).then((response)=>{
//         return response;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// export const ApiService = {
//     get,
//     post,
//     put,
//     delete
// };





// https://www.geekstrick.com/view-component-based-on-user-role/
// https://blog.strongbrew.io/display-a-component-based-on-role/
// https://medium.com/@rjlopezdev/angular-permissions-based-on-roles-part-2-permissions-for-multiple-resources-d35ea97df5b7
// https://strapi.io/features/custom-roles-and-permissions
// https://medium.com/geekculture/how-to-conditionally-render-react-ui-based-on-user-permissions-7b9a1c73ffe2
// https://blog.worldline.tech/2021/06/09/render-react-ui-based-on-user-permissions.html
// https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications
// https://isamatov.com/react-permissions-and-roles/
// https://dev.to/bwca/implementing-react-check-permissions-the-component-3gjm
// https://marmelab.com/react-admin/Permissions.html