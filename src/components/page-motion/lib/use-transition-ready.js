import { useEffect, useState } from "react";

function useTransitionReady(contentBlocked, prepareWhileBlocked = false) {
  const [transitionReady, setTransitionReady] = useState(
    prepareWhileBlocked || !contentBlocked,
  );

  useEffect(() => {
    if (prepareWhileBlocked || !contentBlocked) setTransitionReady(true);
  }, [contentBlocked, prepareWhileBlocked]);

  return transitionReady;
}

export { useTransitionReady };
