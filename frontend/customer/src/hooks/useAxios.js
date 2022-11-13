/* eslint-disable react/forbid-prop-types */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useAxios = (method, api, body, options, deps, axiosHooks) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const axiosController = new AbortController();

  useEffect(() => {
    if (isLoading === false) {
      setLoading(true);

      axiosHooks[method](api, body, {
        ...options,
        signal: axiosController.signal
      }).then((response) => {
        setResponse(response);
      }).catch((error) => {
        setError(error);
      }).then(() => {
        setLoading(false);
      });
    }

    return () => {
      if (isLoading === true) {
        axiosController.abort();
        setLoading(false);
      }
    };
  }, [...deps]);

  return [response, error, isLoading];
};

useAxios.propTypes = {
  method: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  body: PropTypes.object,
  options: PropTypes.object,
  deps: PropTypes.array.isRequired,
  axiosHooks: PropTypes.any.isRequired
};

useAxios.defaultProps = {
  body: {},
  options: {}
};

export default useAxios;
