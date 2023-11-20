import { useEffect, useState } from "react";
import { getTVShow } from '../api/tmdb-api';

const useShow = id => {
  const [show, setShow] = useState(null);
  useEffect(() => {
    getTVShow(id).then(show => {
      setShow(show);
    });
  }, [id]);
  return [show, setShow];
};

export default useShow;