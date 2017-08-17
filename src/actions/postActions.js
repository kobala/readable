import * as types from './actionTypes'

export function createPost (course) {
    return { type: types.CREATE_POST, course }
}