import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Production Error Boundary Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">System Anomaly Detected</h2>
            <p className="text-gray-400 mb-8 font-mono text-sm max-w-md mx-auto">
              A component has encountered a critical failure. The structural integrity of the system remains intact.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all uppercase text-xs tracking-widest"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
