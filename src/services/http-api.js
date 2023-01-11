import httpInstance from "./http-axios";

const getAllRequest = (endpoint) => {
  return httpInstance.get(endpoint);
};

const getRequest = (endpoint, id) => {
  return httpInstance.get(`${endpoint}/${id}`);
};

const createRequest = (endpoint, payload) => {
  payload['realmName']="ORGA2";
  // console.log("payload",payload)
  return httpInstance.post(endpoint, payload);
};

// const updateRequest = (endpoint,id, payload) => {
//   payload['realmName']="ORGA2";
//   return httpInstance.put(`${endpoint}/${id}`, payload);
// };

const updateRequest = (endpoint, payload) => {
  payload['realmName']="ORGA2";
  return httpInstance.put(`${endpoint}`, payload);
};

const deleteRequest = (endpoint, id) => {
  return httpInstance.delete(`${endpoint}/${id}`);
};

const findRequestByTitle = (endpoint, title) => {
  return httpInstance.get(`${endpoint}?title=${title}`);
};

const apiService = { getAllRequest, getRequest, createRequest, updateRequest, deleteRequest, findRequestByTitle };
export default apiService;





// const getRequest = async (endpointUri) => {
// 	return await httpInstance.get(endpointUri);
// };

// const apiService = { getRequest };

// export default apiService;





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





// res.headers["accept"] = "application/json";
// res.headers["content-type"] = "application/json";
// res.config.headers["Accept"] = "application/json";
// res.config.headers["Content-Type"] = "application/json";


// axiosInstance.interceptors.response.use((response) => { // block to handle success case
//     return response
//  }, function (error) { // block to handle error case
//     const originalRequest = error.config;
//  
//     if (error.response.status === 401 && originalRequest.url ===
//  'http://dummydomain.com/auth/token') { // Added this condition to avoid infinite loop 
//         // Redirect to any unauthorised route to avoid infinite loop...
//         return Promise.reject(error);
//     }
//  
//     if (error.response.status === 401 && !originalRequest._retry) { // Code inside this block will refresh the auth token
//  
//         originalRequest._retry = true;
//         const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
//         return axios.post('/auth/token',
//             {
//                 "refresh_token": refreshToken
//             })
//             .then(res => {
//                 if (res.status === 201) {
//                     localStorage.setItem('auth_token',res.data);
//                     axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
//                     return axios(originalRequest);
//                 }
//             })
//     }
//     return Promise.reject(error);
// });








// import axios from "axios";

// // Configure outbound request interceptor logic
// axios.interceptors.request.use(request => {
//   return request;
// }, error => Promise.reject(error));

// // Configure incoming response interceptor logic
// axios.interceptors.response.use(response => {
//   return response;
// }, error => Promise.reject(error));










// import axios from 'axios';
// // const axios = require('axios');

// // Step-1: Create a new Axios instance with a custom config.
// // The timeout is set to 10s. If the request takes longer than
// // that then the request will be aborted.
// const customAxios = axios.create({
//     baseURL: `https://example.com/api`,
//     timeout: 10000, 
//     headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' }
// });

// // Step-2: Create request, response & error handlers
// const requestHandler = request => {
//     // Token will be dynamic so we can use any app-specific way to always   
//     // fetch the new token before making the call
//     request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';  
  
//     return request;
// };

// const responseHandler = response => {
//     if (response.status === 401) {
//         window.location = '/login';
//     }

//     return response;
// };

// const errorHandler = error => {
//     return Promise.reject(error);
// };

// // Step-3: Configure/make use of request & response interceptors from Axios
// // Note: You can create one method say configureInterceptors, add below in that,
// // export and call it in an init function of the application/page.
// customAxios.interceptors.request.use(
//     (request) => requestHandler(request),
//     (error) => errorHandler(error)
// );

// customAxios.interceptors.response.use(
//     (response) => responseHandler(response),
//     (error) => errorHandler(error)
//  );


// // Step-4: Export the newly created Axios instance to be used in different locations.
// export default customAxios;
// ===============================================================================================

// // updated initSimpleCalls.js
// import axios from './customAxios'; // importing axios from customAxios

// // Here we're just passing the relative url path instead of full url.
// axios.get('/getData')
//    .then(response => console.log(response))
//    .catch(error => console.log(error));

// // Changed earlier get call with post
// axios.post('/postData', {
//     name: 'Sample',
//     contact: '0123456789'
// }).then(response => console.log(response))
// .catch(error => console.log(error));


// // Note: If you don't want to intercept the request & response, you can always make use of axios instead of customAxios.