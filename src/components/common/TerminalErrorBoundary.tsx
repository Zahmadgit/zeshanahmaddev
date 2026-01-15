import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class TerminalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("TerminalTab Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "15px",
            fontFamily: "monospace",
            fontSize: "13px",
            height: "100%",
            backgroundColor: "rgb(24, 24, 24)",
            color: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ marginBottom: "8px" }}>I need more commits...</div>

          <div
            style={{
              fontSize: "10px",
              opacity: 0.5,
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Check console for details
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
