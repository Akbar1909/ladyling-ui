import { useEffect } from "react";

const useDocumentVisibility = (cb) => {
  useEffect(() => {
    document.addEventListener("visibilitychange", cb);
    return () => document.removeEventListener("visibilitychange", cb);
  }, [cb]);
};

export default useDocumentVisibility;
