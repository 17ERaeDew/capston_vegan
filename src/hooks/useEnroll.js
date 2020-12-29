import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/User';
import useRquest from './useRequest';

export default function useEnroll() {
  const dispatch = useDispatch();
  const [enroll, setEnroll] = React.useState({
    name: '',
    password: '',
    vegan: 0,
  });
  const user = useSelector((state) => state.User.user);

  const inputName = (name) => {
    setEnroll((value) => {
      return {
        ...value,
        name: name,
      };
    });
  };

  const inputPassword = (password) => {
    setEnroll((value) => {
      return {
        ...value,
        password: password,
      };
    });
  };

  const selectVegan = (vegan) => {
    setEnroll((value) => {
      return {
        ...value,
        vegan: vegan,
      };
    });
  };

  const finEnroll = () => {
    dispatch(setUser(enroll));
  };

  React.useEffect(() => {
    setEnroll(user);
  }, [user]);

  return [{ enroll }, { inputName, inputPassword, selectVegan, finEnroll }];
}
