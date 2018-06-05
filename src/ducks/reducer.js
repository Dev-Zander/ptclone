import gardenImg from '../style/images/garden_secret_avatar.jpg'
import ortensiaImg from '../style/images/ortensia_love_avatar.jpg'
import preciousImg from '../style/images/precious_moments_avatar.jpg'
import jasminImg from '../style/images/jasmin_lush_avatar.jpg'
import lavendarImg from '../style/images/lavendar_touch_avatar.jpg'
import infinityImg from '../style/images/touch_of_infinity_avatar.jpg'

const initialState = {
    apartments: [
        {
            name: "Garden Secret",
            price: 178,
            img: gardenImg
        },
        {
            name: "Ortensia Love",
            price: 212,
            img: ortensiaImg
        },
        {
            name: "Precious Moments",
            price: 189,
            img: preciousImg
        },
        {
            name: "Jasmin Lush",
            price: 212,
            img: jasminImg
        },
        {
            name: "Lavendar Touch",
            price: 212,
            img: lavendarImg
        },
        {
            name: "Touch of Infinity",
            price: 178,
            img: infinityImg
        },
    ],
    condosModalOpen: false
}

const OPEN_CONDO_MODAL = 'OPEN_CONDO_MODAL'

export function toggleCondoModal(bool){
    console.log('reducer hit', bool)
    return{
        type: OPEN_CONDO_MODAL,
        payload: !bool
    }
}

export default function(state = initialState, action){
    console.log('reducer been hit yo', action)
    switch(action.type){
        case OPEN_CONDO_MODAL:
            return { ...state, condosModalOpen: action.payload }
        default:
            return state
    }
}