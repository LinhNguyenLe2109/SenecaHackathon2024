import React from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle];
}
