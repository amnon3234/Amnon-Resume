import Axios from 'axios';

// create an axios connection
const connectionAxios = Axios.create({
    baseURL: process.env.REACT_APP_DEFAULT_API_URL
});

/**
 * Fetch csrf token from the api
 */
const FetchCSRF = () => {
    connectionAxios.get('/csrf-token')
        .then(({data}) => connectionAxios.defaults.headers['X-CSRF-Token'] = data.csrfToken )
        .catch((err) => console.log(err));
};

/**
 * Authenticate user with the api. 
 * 
 * @param {*} userCredentials username and password
 * @param {*} setResponse save response to
 */
const Authenticate = (userCredentials, setResponse) => {
    connectionAxios.post('/users/signin', userCredentials)
        .then( ({data}) => setResponse({
            authenticated: true,
            ...data
        }))
        .catch( ({response}) => setResponse({
            authenticated: false,
            ...response.data
        }));
};

/**
 * Sign up and authenticate user with the api. 
 * 
 * @param {*} userInformation username and password
 * @param {*} route authenticate route in the api
 */
const SignUpAndAuthenticate = (userInformation, setResponse) => {
    connectionAxios.post('/users/signup', userInformation)
        .then( ({data}) => setResponse({
            authenticated: true,
            ...data
        }))
        .catch( ({response}) => setResponse({
            authenticated: false,
            ...response.data
        }));
};

/**
 * Get data from the api and save it in
 * the corresponding state.
 * 
 * @param {*} route where in the api
 * @param {*} useState state to save the data to
 */
const Get = (route, setState) => {
    connectionAxios.get(route) 
        .then( ({data}) => setState(data))
        .catch( err => console.log(err));
};

/**
 * Post an object to the api and update
 * the corresponding state
 * 
 * @param {*} route where in the api
 * @param {*} object to post
 * @param {*} setState state to update
 */
const Post = (route, object, setState) => {
    connectionAxios.post(route, object)
        .then( (ans) => {console.log(ans)})
        .catch( ({response}) => console.log(response));
    setState( prev => [...prev, object]);
};

/**
 * Patch a change to specific object
 * in the api and update the corresponding
 * state 
 * 
 * @param {*} route where in the api
 * @param {*} objectID object to change
 * @param {*} change object contains the change
 * @param {*} setState state to update
 */
const Patch = (route, objectID, change, setState) => {
    connectionAxios.patch(route + '/' + objectID, change)
        .then( res => console.log(res))
        .catch( err => console.log(err));
    
    // get the current state from the api
    setTimeout(() => Get(route, setState), 100);
};

/**
 * Delete a specific object from
 * the api
 * 
 * @param {*} route where in the api
 * @param {*} objectID object to delete
 * @param {*} setState state to update
 */
const Delete = (route, objectID, setState) => {
    connectionAxios.delete(route + '/' + objectID)
        .then( res => console.log(res))
        .catch( err => console.log(err));
    setState( prev => prev.filter( p => p._id !== objectID ));
};

export {Get, Post, Patch, Delete, Authenticate, FetchCSRF, SignUpAndAuthenticate}