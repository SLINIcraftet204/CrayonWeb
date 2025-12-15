import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_dev";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogIn, Key, Mail, ArrowLeft, Eye, EyeOff } from "lucide-react";

type FirebaseAuthError = {
  code?: string;
};

const mapAuthError = (err: FirebaseAuthError) => {
  const code = err?.code || "";
  switch (code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "E-Mail oder Passwort ist falsch.";
    case "auth/invalid-email":
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    case "auth/too-many-requests":
      return "Zu viele fehlgeschlagene Versuche. Bitte später erneut versuchen.";
    default:
      return "Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.";
  }
};

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth() as {
    user: null | { email?: string };
    loading: boolean;
  };

  useEffect(() => {
    if (!authLoading && user) {
      navigate("/admin/changelog-creator", { replace: true });
    }
  }, [user, authLoading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate("/admin/changelog-creator", { replace: true });
    } catch (err: unknown) {
      console.error(err);
      setError(mapAuthError(err as FirebaseAuthError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-900">
      <div
        className="section-card w-full max-w-md p-0 overflow-hidden shadow-xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-center pt-8 pb-3 px-8">
          <img
            src="https://crayonsmp.com/logo.png"
            alt="CrayonSMP Logo"
            className="w-16 h-16 rounded-full border-2 border-[#ff0040] mb-3 shadow-md bg-[#1e1e1e]"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/64x64/1e1e1e/e0e0e0?text=C";
            }}
          />
          <h1 className="text-3xl font-extrabold text-center accent-gradient-text mb-1 tracking-tight">
            CrayonSMP
          </h1>
          <span className="text-gray-400 text-sm mb-2">Admin Login</span>
        </div>

        <div className="border-t border-gray-800 mx-8" />

        <form
          onSubmit={handleLogin}
          className="space-y-5 p-8 bg-gray-800"
          aria-labelledby="admin-login-title"
        >
          <h2 id="admin-login-title" className="sr-only">
            Admin Login
          </h2>

          <div>
            <label
              htmlFor="email"
              className="text-gray-300 flex items-center mb-1 font-medium bg-gray-700"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>E-Mail</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-[#ff0040] focus:ring focus:ring-[#ff0040] focus:ring-opacity-40 transition placeholder:text-gray-500"
              placeholder="you@example.com"
              autoComplete="email"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-gray-300 flex items-center mb-1 font-medium"
            >
              <Key className="w-4 h-4 mr-2" />
              <span>Passwort</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-[#ff0040] focus:ring focus:ring-[#ff0040] focus:ring-opacity-40 transition placeholder:text-gray-500"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                aria-required="true"
              />
              <button
                type="button"
                aria-label={
                  showPassword ? "Passwort ausblenden" : "Passwort anzeigen"
                }
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p role="alert" className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="cta-button primary w-full mt-2 flex items-center justify-center gap-2"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? (
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              <LogIn className="w-5 h-5" />
            )}
            <span>{loading ? "Anmeldung..." : "Anmelden"}</span>
          </button>

          <div className="flex items-center my-4">
            <div className="grow border-t border-gray-800" />
            <span className="mx-3 text-gray-500 text-xs">oder</span>
            <div className="grow border-t border-gray-800" />
          </div>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
