export const newuser = (data) => {
    return {
        type: "NEWUSERDATA",
        payload: data
    }
}
export const userdata = (data) => {
    return {
        type: "USERDATA",
        payload: data
    }
}
export const deleteuserdata = (id) => {
    return {
        type: "DELETEUSERDATA",
        payload: id
    }
}