export const customTheme = {
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // light
        root: {
          // Some CSS
          '& .MuiButton-root': {
            color: 'black',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            display: 'block!important',
          },
          borderRadius: 0,
        },
        colorPrimary: {
          color: 'black',
        },
      },
    },
  },
};
