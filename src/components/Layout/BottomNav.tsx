import { Home, Video, Coins, MessageCircle, User, Phone, Flame, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  streakCount?: number;
  hasNewProfileActivity?: boolean;
}

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "match", icon: Video, label: "Match" },
  { id: "voice", icon: Phone, label: "Voice" },
  { id: "chat", icon: MessageCircle, label: "Chat" },
  { id: "profile", icon: User, label: "Profile" },
];

export function BottomNav({ activeTab, onTabChange, streakCount = 0, hasNewProfileActivity = false }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/98 backdrop-blur-xl border-t border-border z-50">
      <div className="flex items-center justify-around py-2 sm:py-3 px-2 sm:px-4 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-300 min-w-[50px] sm:min-w-[60px] min-h-[40px] sm:min-h-[44px] relative",
                isActive 
                  ? "text-primary bg-primary/10 scale-105" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1", isActive && "animate-pulse-warm")} />
              <span className="text-[10px] sm:text-xs font-medium font-poppins">{item.label}</span>
              {item.id === "profile" && hasNewProfileActivity && (
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      <div className="safe-area-bottom" />
    </div>
  );
}