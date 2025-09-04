import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="text-2xl font-semibold text-indigo-600 tracking-wide">
        Pay<span className="text-amber-500">TM</span>
      </div>
      <div>
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
