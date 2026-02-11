import { Fish, Users, Newspaper, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setUserRole, type UserRole } from "@/lib/userRole";

const options: { role: UserRole; icon: typeof Users; label: string; description: string }[] = [
  {
    role: "torcedor",
    icon: Users,
    label: "Torcedor Alvinegro Praiano",
    description: "Sou santista de coração e quero interagir com a torcida",
  },
  {
    role: "jornalista",
    icon: Newspaper,
    label: "Jornalista",
    description: "Sou jornalista ou veículo de mídia do Peixe",
  },
  {
    role: "rival",
    icon: ShieldAlert,
    label: "Torço pra outro clube",
    description: "Quero acompanhar o que a torcida santista está dizendo",
  },
];

export default function Welcome() {
  const navigate = useNavigate();

  const handleSelect = (role: UserRole) => {
    setUserRole(role);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-3">
          <Fish size={48} className="text-primary mx-auto" />
          <h1 className="font-display font-bold text-3xl gold-text">Vila-Talk</h1>
          <p className="text-xl font-display text-foreground">
            Caro torcedor, você é...?
          </p>
        </div>

        <div className="space-y-3">
          {options.map(({ role, icon: Icon, label, description }) => (
            <button
              key={role}
              onClick={() => handleSelect(role)}
              className="w-full flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors text-left group"
            >
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon size={24} className="text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Info sobre jornalistas */}
        <p className="text-xs text-muted-foreground">
          Jornalistas precisarão comprovar identidade por áudio e documento. O perfil de jornalista <strong>não é anônimo</strong>.
        </p>
      </div>
    </div>
  );
}
