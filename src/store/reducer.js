let reducer = (state,action) => {

  let {type,payload} = action;

  switch (type) {

    case 'VIEW_LOADING' :
      return Object.assign({},state,{bLoading: payload });

    case 'VIEW_FOOT' :
      return Object.assign({},state,{bFoot: payload });

    case 'VIEW_SERVICE' :
      return Object.assign({},state,{bService: payload });

    case 'UPDATE_HOME' :
      return Object.assign({},state,{home: payload });

    case 'UPDATE_DETAIL' :
    console.log(Object.assign({},state,{detail: payload }))
      return Object.assign({},state,{detail: payload });

    case 'UPDATE_USER' :
      return Object.assign({},state,{user: payload });
      
    case 'UPDATE_RECOM' :
    return Object.assign({},state,{recom: payload });

    case 'UPDATE_SERVICE' :
    return Object.assign({},state,{service: payload });

    default:
      return state
  }
};

export default reducer;