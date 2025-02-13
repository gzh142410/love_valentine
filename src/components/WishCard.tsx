
import { Heart, Gift } from "lucide-react";

interface WishCardProps {
  wish: string;
  from?: string;
}

const WishCard = ({ wish, from }: WishCardProps) => {
  return (
    <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-scale-in">
      <div className="absolute -top-6 -right-6 text-valentine-pink/20">
        <Gift className="w-24 h-24" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="text-valentine-purple w-5 h-5" />
          <span className="text-sm text-valentine-purple font-medium">Lời chúc yêu thương</span>
        </div>
        <p className="text-lg text-valentine-dark leading-relaxed italic">{wish}</p>
        {from && (
          <p className="mt-4 text-right text-valentine-purple font-medium">- {from}</p>
        )}
      </div>
    </div>
  );
};

export default WishCard;
