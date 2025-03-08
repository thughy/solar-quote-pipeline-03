
import { Sun } from "lucide-react";

interface AppLogoIconProps {
  className?: string;
}

const AppLogoIcon = ({ className }: AppLogoIconProps) => {
  return (
    <div className={className}>
      <Sun className="h-full w-full text-solar-orange" />
    </div>
  );
};

export default AppLogoIcon;
