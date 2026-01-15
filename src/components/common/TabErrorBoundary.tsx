import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  tabName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class TabErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error in ${this.props.tabName || "tab"}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          style={{
            padding: "20px",
            color: "red",
            backgroundColor: "#2d1b1b",
            border: "1px solid red",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "14px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            ⚠️ {this.props.tabName || "Tab"} Error
          </div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>
            {this.state.error?.message || "Something went wrong"}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
