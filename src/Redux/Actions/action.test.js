import * as movie from './movies';
import * as types from './types';

describe('movie', () => {
    it('should create an action to get a movie', () => {
        const text = {
            id: "1",
            name: "test",
            description: "test1",
            rating: 10,
            genre: "demo",
            year: 1234,
            type: "test2",
            director: "test3",
            tcode: "test4",
            img: ["1", "2", "3"]
        }
        const expectedAction = {
            type: types.GET_MOVIES,
            text
        }
        expect(movie.retrieveMovie(text)).toEqual(expectedAction)
    })
})

// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from './movies'
// import * as types from './types'
// import fetchMock from 'fetch-mock'
// import expect from 'expect' // You can use any testing library

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//     afterEach(() => {
//         fetchMock.restore()
//     })

//     it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//         fetchMock.getOnce('/movie', {
//             body: {
//                 movies: [
//                     "name" = "test",
//                     "description" = "test1",
//                     "rating" = 10,
//                     "genre" = "demo",
//                     "year" = 1234,
//                     "type" = "test2",
//                     "director" = "test3",
//                     "tcode" = "test4",
//                     "img" = ["1", "2", "3"]
//                 ]
//             },
//             headers: { 'content-type': 'application/json' }
//         })

//         const expectedActions = [
//             { type: types.GET_MOVIES },
//             {
//                 type: types.GET_MOVIES, body: {
//                     movies: [
//                         "name" = "test",
//                         "description" = "test1",
//                         "rating" = 10,
//                         "genre" = "demo",
//                         "year" = 1234,
//                         "type" = "test2",
//                         "director" = "test3",
//                         "tcode" = "test4",
//                         "img" = ["1", "2", "3"]
//                     ]
//                 }
//             }
//         ]
//         const store = mockStore({ movies: [] })

//         return store.dispatch(actions.retrieveMovie()).then(() => {
//             // return of async actions
//             expect(store.getActions()).toEqual(expectedActions)
//         })
//     })
// })