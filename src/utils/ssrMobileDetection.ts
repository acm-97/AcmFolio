export const isMobileView = (req: any) => {
  let _isMobileView = req.headers['user-agent']?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  // Returning the _isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(_isMobileView),
  };
};
