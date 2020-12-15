import React from 'react';

interface Props {}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: any) {
		// You can also log the error to an error reporting service
		// logErrorToMyService(error, errorInfo);
		console.error('Error caught in boundary: ', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h5>Something went wrong.</h5>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
