export const customStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: "var(--color-text)",
    fontSize: 12,
    lineHeight: "133%",
    letterSpacing: "-0.02em",
    margin: 0,
    "@media screen and (min-width:768px)": {
      fontSize: 14,
      lineHeight: "129%",
    },
  }),

  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "1px solid var(--color-border-hover)",
    borderRadius: 12,
    cursor: "pointer",
    width: "7.5rem",
    boxShadow: "none",
    transition: "var(--transition)",
    ":hover": { borderColor: "var(--color-text)" },
    "@media screen and (min-width:768px)": {
      width: "9.5625rem",
    },
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "0.75rem 0.875rem",
    "@media screen and (min-width:768px)": { padding: "0.875rem" },
  }),

  menu: (styles) => ({
    ...styles,
    padding: "0.875rem",
    borderRadius: "0.75rem",
    border: "none",
    backgroundColor: "var(--color-bg-item)",
  }),

  menuList: (styles) => ({
    ...styles,
    display: "flex",
    flexDirection: "column",
    gap: "0.4375rem",
    boxSizing: "content-box",
    "&::-webkit-scrollbar": {
      width: "0.25rem",
      position: "relative",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "12px",
      background: "var(--color-text-dark)",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  }),

  option: (styles, { isSelected, isFocused }) => ({
    ...styles,
    color: isSelected ? "var(--color-text)" : "var(--color-text-dark)",
    backgroundColor: "var(--color-bg-item)",
    fontSize: 12,
    lineHeight: "133%",
    letterSpacing: "-0.02em",
    cursor: isFocused && "pointer",
    ":active": {
      backgroundColor: "none",
    },
    "@media screen and (min-width:768px)": {
      fontSize: 14,
      lineHeight: "129%",
    },
    padding: 0,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
    ...styles,
    color: "var(--color-text)",
    transition: "var(--transition)",
    transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
};
