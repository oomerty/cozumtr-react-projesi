import { useContext } from "react";
import { PreferencesContext } from "./../../store/preferences-context";

// This component is a floating accessibility bar that appears on the right side of the screen.
// It is designed to provide quick access to various accessibility features.
// The component uses the PreferencesContext to access user preferences and settings.
function AccessibilityBar() {
  const prefCtx = useContext(PreferencesContext);

  return (
    <div className="sticky flex flex-row gap-2 right-8 bottom-8">
      <span class="icon-[bx--universal-access]"></span>
      <span class="icon-[bx--mobile-vibration]"></span>
    </div>
  );
}

export default AccessibilityBar;
