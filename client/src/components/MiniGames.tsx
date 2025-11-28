import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Trophy, Lock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const games = [
  {
    id: "memory",
    name: "Memory Master",
    description: "Enhance your memory with card matching",
    icon: "🎮",
    difficulty: "Easy",
    reward: "50 points",
    free: true,
  },
  {
    id: "logic",
    name: "Logic Puzzle",
    description: "Solve challenging logic problems",
    icon: "🧩",
    difficulty: "Medium",
    reward: "100 points",
    free: true,
  },
  {
    id: "math",
    name: "Math Challenge",
    description: "Quick mental math training",
    icon: "🔢",
    difficulty: "Medium",
    reward: "75 points",
    free: false,
  },
  {
    id: "pattern",
    name: "Pattern Recognition",
    description: "Identify complex patterns",
    icon: "✨",
    difficulty: "Hard",
    reward: "150 points",
    free: false,
  },
];

export function MiniGames() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showPremium, setShowPremium] = useState(false);

  const handlePlayGame = (gameId: string, isFree: boolean) => {
    if (!isFree) {
      setShowPremium(true);
      trackEvent('game_premium_required', 'minigames', gameId, 0);
      return;
    }
    trackEvent('game_started', 'minigames', gameId, 50);
    setSelectedGame(gameId);
  };

  const freeGames = games.filter(g => g.free);
  const premiumGames = games.filter(g => !g.free);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Cognitive Training Games</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharpen your mind while earning rewards. Start with free games or unlock premium challenges with a subscription.
          </p>
        </div>

        {selectedGame && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                {games.find(g => g.id === selectedGame)?.name}
              </h3>
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center text-4xl">
                {games.find(g => g.id === selectedGame)?.icon}
              </div>
              <p className="text-muted-foreground mb-6">
                Coming soon! Full game implementation with scoring and leaderboards.
              </p>
              <Button
                onClick={() => setSelectedGame(null)}
                className="w-full"
                data-testid="button-close-game"
              >
                Close
              </Button>
            </Card>
          </div>
        )}

        {showPremium && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md p-8 text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Premium Content</h3>
              <p className="text-muted-foreground mb-6">
                Unlock advanced cognitive games with a Pro or Enterprise subscription.
              </p>
              <Button
                onClick={() => {
                  setShowPremium(false);
                  const pricingSection = document.querySelector('#pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full"
                data-testid="button-upgrade-plan"
              >
                View Pricing
              </Button>
            </Card>
          </div>
        )}

        {/* Free Games */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-green-500" />
            Free Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeGames.map((game) => (
              <Card
                key={game.id}
                className="p-6 hover-elevate transition-all cursor-pointer"
                onClick={() => handlePlayGame(game.id, game.free)}
                data-testid={`card-game-${game.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{game.icon}</div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    FREE
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{game.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    <strong>Difficulty:</strong> {game.difficulty}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {game.reward}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Games */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary" />
            Premium Games (Pro & Enterprise)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumGames.map((game) => (
              <Card
                key={game.id}
                className="p-6 opacity-75 cursor-pointer hover-elevate transition-all"
                onClick={() => handlePlayGame(game.id, game.free)}
                data-testid={`card-game-${game.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{game.icon}</div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    PREMIUM
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2">{game.name}</h4>
                <p className="text-muted-foreground text-sm mb-4">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    <strong>Difficulty:</strong> {game.difficulty}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {game.reward}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
