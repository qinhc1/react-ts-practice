/*
 * @Author: qinhanci 1584225429@qq.com
 * @Date: 2022-10-19 16:51:37
 * @Description:
 */
const defaultState = {
  num: 1
}

interface IAction {
  type: string;
  value: number;
}

// eslint-disable-next-line
export default (state=defaultState, action: IAction) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type){
      case "increase":
          newState.num+=action.value;
          break;
      default:
          break;
  }
  return newState;
}
  
