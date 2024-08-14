# useEffect Polyfill :

    Whenever the state changes it causes the whole component to re-render.

### Polyfill : 
```javascript
import { useRef } from "react";

const useCustomEEffect = (effect, deps) => {
  const isFirstRender = useRef(true); // For case 1
  const prevDeps = useRef([]); // For case 2

  // Cases to be handled
  // Case 1 : First render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
        if (cleanup && typeof cleanup === 'function') {
            cleanup();
        }
    };
  }

  // Case 2 : Dependency changes and no dependency array
  const depsChanged = JSON.stringify(deps) !== JSON.stringify(prevDeps.current);

  if (depsChanged) {
    const cleanup = effect();
    // Cleanup
    if (cleanup && typeof cleanup === 'function' && deps) {
        cleanup();
    }
  }

  // Case 3 : Cleanup : It runs either when the dependency array changes or the component is unmounted. We cannot simulate the functionality of the component unmount because this is something React does under the hood using fibre tree algorithm and reconciliation.

  //   But what we can implement is invoking the cleanup function when the dependency array changes

  prevDeps.current = deps || [];
};

export default useCustomEEffect;
```

### Breakdown of useEffect Hook polyfill :
    Step 1 :  First render
```javascript
const useCustomEEffect = (effect, deps) => {
    const isFirstRender = useRef(true);

    if (isFirstRender.current) {
        isFirstRender.current = false;
        effect();
        return;
    }
}
```

    Step 2 : Dependency changes and no dependency array
```javascript
const useCustomEEffect = (effect, deps) => {
    const prevDeps = useRef([]);

    const depsChanged = JSON.stringify(deps) !== JSON.stringify(prevDeps.current);

    if (depsChanged) {
        effect();
    }

    prevDeps.current = deps || [];
}
```

    Step 3 : Cleanup : It runs either when the dependency array changes or the component is unmounted. We cannot simulate the functionality of the component unmount because this is something React does under the hood using fibre tree algorithm and reconciliation.

    But what we can implement is invoking the cleanup function when the dependency array changes

```javascript
const useCustomEEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    // Cleanup
    const cleanup = effect();
    return () => {
        if (cleanup && typeof cleanup === 'function') {
            cleanup();
        }
    };
  }

  const depsChanged = JSON.stringify(deps) !== JSON.stringify(prevDeps.current);

  if (depsChanged) {
    const cleanup = effect();
    // Cleanup
    if (cleanup && typeof cleanup === 'function' && deps) {
        cleanup();
    }
  }

  prevDeps.current = deps || [];
};
```