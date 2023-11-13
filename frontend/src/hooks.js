import React from "react";
import { useLocation, useParams } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const usePathParams = () => {
    const { yourParamName } = useParams();
    return yourParamName;
  };

export { useQuery, usePathParams };
