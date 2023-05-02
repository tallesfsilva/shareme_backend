import {UserType, PostedByType, SaveType, CommentsType} from './index'


export default interface PinType {

    title: string,
    about: string,
    destination: string,
    category: string,
    image: string,
    user: UserType,
    postedBy: PostedByType,
    saved?: SaveType,
    comments?:CommentsType,
    data_criacao?: object,

}

export default interface PinImage{

    
}