import { useEffect } from "react";

const useMount = (cb) => {
  useEffect(() => {
    cb();
  }, [cb]);
};

export default useMount;
