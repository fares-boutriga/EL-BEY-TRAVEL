import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setAuth } from '../features/authSlices';
import {jwtDecode} from 'jwt-decode';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const { username } = decodedToken;
      dispatch(setAuth(username));
      setIsAuthenticated(true);
    } else {
      dispatch(setAuth({ name: '', token: '' }));
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, [dispatch]);

  return { isAuthenticated, isLoading };
};

export default useAuth;
