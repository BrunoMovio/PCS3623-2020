import Consulta from "./Consulta"

const mapToConsulta = (value) => {
    switch (value) {
        case "USER.USER_BY_NAME":
            return Consulta.USER.USER_BY_NAME
        case "USER.FOLLOWEDS":
            return Consulta.USER.FOLLOWEDS
        case "USER.FOLLOWRS":
            return Consulta.USER.FOLLOWRS
        case "USER.FEED":
            return Consulta.USER.FEED        
        case "USER.ALL_USERS":
            return Consulta.USER.ALL_USERS
        case "POST.POST_BY_NAME":
            return Consulta.POST.POST_BY_NAME        
        case "POST.POST_BY_USER":
            return Consulta.POST.POST_BY_USER
        case "POST.POST_BY_GROUP_AND_PAGE":
            return Consulta.POST.POST_BY_GROUP_AND_PAGE
        case "POST.ALL_POSTS":
            return Consulta.POST.ALL_POSTS
        case "PAGE.PAGE_BY_NAME":
            return Consulta.PAGE.PAGE_BY_NAME
        case "PAGE.LIKES_BY_PAGE":
            return Consulta.PAGE.LIKES_BY_PAGE
        case "PAGE.ALL_PAGES":
            return Consulta.PAGE.ALL_PAGES
        case "GROUP.USER_BY_GROUP":
            return Consulta.GROUP.USER_BY_GROUP
        case "GROUP.GROUP_BY_ADMIN":
            return Consulta.GROUP.GROUP_BY_ADMIN
        case "GROUP.ALL_GROUPS":
            return Consulta.GROUP.ALL_GROUPS
        case "EVENT.EVENT_BY_PAGE":
            return Consulta.EVENT.EVENT_BY_PAGE
        case "EVENT.EVENT_BY_DATE":
            return Consulta.EVENT.EVENT_BY_DATE
        case "EVENT.ALL_EVENTS":
            return Consulta.EVENT.ALL_EVENTS
        default:
            return Consulta.USER.USER_BY_NAME
    }
}

export default mapToConsulta