import jwt from "jsonwebtoken";


export const createToken = (payload,key,expiresIn) => {
    let token = null
    try {
        token = jwt.sign(payload, key,expiresIn);
    } catch (error) {
        console.log(error);
    }
    return token
}
export const verifyToken = (token,key) =>{
    let data = null
    try {
        const decode  = jwt.verify(token, key);
        data = decode
    } catch (error) {
        console.log(error)
    }
    return data
}