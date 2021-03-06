import databaseInstants from '../database/database';

export const SUBSCRIBE_FIREBASE = 'SUBSCRIBE_FIREBASE';

const subscribeFirebase = store => next => action => {
  if (action.type !== SUBSCRIBE_FIREBASE) {
    return next(action);
  }

  const { database, callType } = action;
  const databaseConnect = databaseInstants.ref(database);

  databaseConnect.on('value', snapshot => {
    const items = snapshot.val();
    
    store.dispatch({
      type: callType,
      payload: items
    });
  });
};

export const subscribeFirebaseAction = (database, callType) => ({
  type: SUBSCRIBE_FIREBASE,
  database,
  callType
});

export default subscribeFirebase;
