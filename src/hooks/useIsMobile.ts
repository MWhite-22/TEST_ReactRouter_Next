import { useTheme, useMediaQuery } from '@material-ui/core';

export const useIsMobile = (): boolean => {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down('xs'));
};
