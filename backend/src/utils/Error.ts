import {response } from "express"
export const sendError = (error: Error) =>{
    return response.status(500).json({
        error
    })
}