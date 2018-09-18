 /**
 *  function(store) {
      return function(next) {
        return function(action) {
        
        }  
      }
    } 
 * @param {*} store 
 */
const loggerMiddleware = store => next => action => {
  /* 미들웨어 내용 */

  // 현재 스토어 상태 값 기록
  console.log('현재 상태', store.getState());

  // 액션 기록
  console.log('액션', action);

  // 액션을 다음 미들웨어 또는 리듀서로 넘깁니다.
  console.log(`next : ${next}`)
  const result = next(action);

  // 액션 처리 후의 스토어 상태를 기록합니다.
  console.log('다음 상태', store.getState());
  console.log('\n');  //기록을 구분하려고 비어 있는 줄 프린트

  return result;
}

export default loggerMiddleware;