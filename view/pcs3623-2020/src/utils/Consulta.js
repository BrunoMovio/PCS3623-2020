const BASE_URL = "bor.gs/db_api"

const Consulta = {
    USER: {
      USER_BY_NAME: {
        url: BASE_URL + "/user/search",
        body: {
          name: ""
        }
      },
      FOLLOWEDS: {
        url: BASE_URL + "/user/followeds",
        body: {
          currentUserId: ""
        }
      },
      FOLLOWRS: {
        url: BASE_URL + "/user/followers",
        body: {
          currentUserId: ""
        }
      },
      FEED: {
        url: BASE_URL + "/user/feed",
        body: {
          currentUserId: ""
        }
      },
      ALL_USERS: {
        url: BASE_URL + "/user/all",
        body: {}
      }
    },
    POST: {
      POST_BY_NAME: {
        url: BASE_URL + "/post/searchByName",
        body: {
          name: ""
        }
      },
      POST_BY_USER: {
        url: BASE_URL + "/post/serachByUser",
        body: {
          userId: ""
        }
      },
      POST_BY_GROUP_AND_PAGE: {
        url: BASE_URL + "/post/searchByGroupAndPage",
        body: {
          groupId: "",
          pageId: ""
        }
      },
      ALL_POSTS: {
        url: BASE_URL + "/post/all",
        body: {}
      }
    },
    PAGE: {
      PAGE_BY_NAME: {
        url: BASE_URL + "/page/search",
        body: {
          name: ""
        }
      },
      LIKES_BY_PAGE: {
        url: BASE_URL + "/page/likes",
        body: {
          pageId: ""
        }
      },
      ALL_PAGES: {
        url: BASE_URL + "/page/all",
        body: {}
      }
    },
    GROUP: {
      USER_BY_GROUP: {
        url: BASE_URL + "/group/usersByGroup",
        body: {
          groupId: ""
        }
      },
      GROUP_BY_ADMIN: {
        url: BASE_URL + "/group/getByAdmin",
        body: {
          adminId: ""
        }
      },
      ALL_GROUPS: {
        url: BASE_URL + "/group/all",
        body: {}
      }
    },
    EVENT: {
      EVENT_BY_PAGE: {
        url: BASE_URL + "/event/searchByPage",
        body: {
          pageId: ""
        }
      },
      EVENT_BY_DATE: {
        url: BASE_URL + "/event/searchByDate",
        body: {
          maxDate: ""
        }
      },
      ALL_EVENTS: {
        url: BASE_URL + "/event/all",
        body: {}
      }
    }
  }

  export default Consulta;