import React, { useEffect, useState, useCallback } from "react";
import {
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../firebase_prod";
import { useAuth } from "../../context/AuthContext";
import {
  LogIn,
  Eye,
  EyeOff,
  PlusCircle,
  LogOut,
  Loader,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";
import type {
  ChangelogCategory,
  ChangelogIcon,
} from "../../interfaces/changelog";

/* ---------- Constants ---------- */
const categoryOptions: ChangelogCategory[] = [
  "Minecraft Server",
  "Website",
  "Discord",
  "Generally",
];
const iconOptions: ChangelogIcon[] = [
  "Server",
  "Globe",
  "MessageCircle",
  "Generally",
];

/* ---------- Helpers ---------- */
const mapAuthError = (err: unknown) => {
  const code =
    typeof err === "object" && err !== null && "code" in err
      ? (err as { code?: string }).code || ""
      : "";
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

const isBlockedError = (err: unknown): boolean => {
  const msg =
    err && typeof err === "object" && "message" in err
      ? String((err as { message?: unknown }).message)
      : String(err);
  return /blocked|ERR_BLOCKED_BY_CLIENT|Failed to fetch|NetworkError|unavailable/i.test(
    msg
  );
};

/* ---------- Error Banner ---------- */
const NetworkErrorBanner: React.FC<{
  message: string;
  onRetry?: () => void;
  isRetrying?: boolean;
}> = ({ message, onRetry, isRetrying }) => (
  <div className="section-card p-6 bg-gray-800 border border-yellow-600 rounded-lg mb-6">
    <div className="flex items-start gap-4">
      <AlertTriangle className="w-8 h-8 text-yellow-400 shrink-0" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-yellow-300">
          Netzwerkfehler
        </h3>
        <p className="mt-2 text-sm text-gray-300">{message}</p>
        <p className="mt-2 text-xs text-gray-400">
          Tipp: Adblocker können Anfragen an googleapis.com blockieren. Bitte
          diese Seite als Ausnahme hinzufügen.
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            disabled={isRetrying}
            className="mt-4 cta-button primary flex items-center gap-2"
          >
            {isRetrying ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
            {isRetrying ? "Wird geladen..." : "Erneut versuchen"}
          </button>
        )}
      </div>
    </div>
  </div>
);

/* ---------- Login Page ---------- */
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading: authLoading } = useAuth() as {
    user: null | { email?: string };
    loading: boolean;
  };

  useEffect(() => {
    if (
      !authLoading &&
      user &&
      location.pathname !== "/admin/changelog-creator"
    )
      navigate("/admin/changelog-creator", { replace: true });
  }, [user, authLoading, navigate, location.pathname]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate("/admin/changelog-creator", { replace: true });
    } catch (err: unknown) {
      console.error(err);
      if (isBlockedError(err)) {
        setError(
          "Netzwerk blockiert. Bitte Adblocker für diese Seite deaktivieren."
        );
      } else {
        setError(mapAuthError(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-3xl">
        <div className="section-card p-8 shadow-xl bg-gray-900 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <img
                src="/logo.png"
                alt="CrayonSMP"
                className="w-28 h-28 rounded-full border-2 border-[#ff0040] shadow bg-[#111827]"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/112x112/111827/e5e7eb?text=C";
                }}
              />
              <h2 className="mt-4 text-3xl font-extrabold accent-gradient-text">
                CrayonSMP
              </h2>
              <p className="mt-2 text-gray-400">
                Admin Bereich — bitte anmelden
              </p>
            </div>

            <div className="w-full md:w-80">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-1 block">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-[#ff0040] focus:outline-none"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-1 block">
                    Passwort
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-[#ff0040] focus:outline-none"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                      aria-label={
                        showPassword
                          ? "Passwort ausblenden"
                          : "Passwort anzeigen"
                      }
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-900/30 p-2 rounded">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="cta-button primary w-full flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    <LogIn className="w-5 h-5" />
                  )}
                  <span>{loading ? "Anmeldung..." : "Anmelden"}</span>
                </button>

                <div className="text-sm text-gray-400 text-center">
                  <Link to="/" className="hover:text-white">
                    Zurück zur Startseite
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ---------- Protected Route ---------- */
const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth() as {
    user: null | { email?: string };
    loading: boolean;
  };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user && location.pathname !== "/admin/login")
      navigate("/admin/login", { replace: true });
  }, [user, loading, navigate, location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader className="w-10 h-10 text-white animate-spin" />
      </div>
    );
  }

  return <Outlet />;
};

/* ---------- Dashboard / Changelog Creator ---------- */
const Dashboard: React.FC = () => {
  const { user } = useAuth() as { user: null | { email?: string } };
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    categories: [] as ChangelogCategory[],
    date: new Date().toISOString().slice(0, 10),
    icon: iconOptions[0],
    details: "",
  });

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login", { replace: true });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toggleCategory = (cat: ChangelogCategory) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.categories.length === 0) {
      setError("Bitte wähle mindestens eine Kategorie.");
      return;
    }
    setIsSubmitting(true);
    try {
      const details = form.details
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean);
      await addDoc(collection(db, "changelogs"), {
        title: form.title,
        description: form.description,
        category: form.categories,
        date: form.date,
        icon: form.icon,
        details,
        author: user?.email || null,
        createdAt: new Date().toISOString(),
      });
      alert("Changelog veröffentlicht.");
      setForm({
        title: "",
        description: "",
        categories: [],
        date: new Date().toISOString().slice(0, 10),
        icon: iconOptions[0],
        details: "",
      });
    } catch (err) {
      console.error(err);
      if (isBlockedError(err)) {
        setError("Netzwerk blockiert. Bitte Adblocker deaktivieren.");
      } else {
        setError("Fehler beim Speichern.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <PlusCircle className="w-7 h-7 text-[#ff0040]" /> Changelog Creator
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-400">{user?.email}</span>
            <div className="flex items-center gap-2">
              <Link to="/admin/changelogs" className="cta-button secondary">
                Changelogs
              </Link>
              <button
                onClick={handleLogout}
                className="cta-button secondary flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        </header>

        {error && (
          <div className="mb-6 bg-red-900/30 border border-red-700 p-4 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <form
            onSubmit={submit}
            className="md:col-span-2 section-card p-6 bg-gray-800 border border-gray-700"
          >
            <label className="text-sm text-gray-300">Titel</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
              required
            />

            <label className="text-sm text-gray-300">Beschreibung</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
              required
            />

            <div className="mb-4">
              <label className="text-sm text-gray-300 block mb-2">
                Kategorien
              </label>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCategory(c)}
                    className={`px-3 py-1 rounded transition-colors ${
                      form.categories.includes(c)
                        ? "bg-[#ff0040] text-white"
                        : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-300 block">Datum</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 block">Icon</label>
                <select
                  name="icon"
                  value={form.icon}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
                >
                  {iconOptions.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="text-sm text-gray-300">
              Details (Zeilen = Bullet)
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              rows={6}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
              placeholder={"Punkt 1\nPunkt 2"}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <PlusCircle className="w-5 h-5" />
              )}
              <span>
                {isSubmitting ? "Veröffentlichen..." : "Veröffentlichen"}
              </span>
            </button>
          </form>

          <aside className="section-card p-6 bg-gray-800 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3">Vorschau</h3>
            <div className="bg-gray-900 p-4 rounded">
              <h4 className="text-white font-bold">
                {form.title || "(Titel)"}
              </h4>
              <p className="text-gray-300 text-sm mt-2">
                {form.description || "(Kurzbeschreibung)"}
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-200">
                {form.details
                  .split("\n")
                  .filter(Boolean)
                  .map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

/* ---------- Changelogs List ---------- */
type Changelog = {
  id: string;
  title: string;
  description: string;
  category: ChangelogCategory[] | string;
  date: string;
  icon: ChangelogIcon;
  details: string[] | string;
  author?: string | null;
  createdAt?: string;
};

const ChangelogsList: React.FC = () => {
  const [items, setItems] = useState<Changelog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "changelogs"),
        orderBy("createdAt", "desc")
      );
      const snap = await getDocs(q);
      const docs = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as Changelog[];
      setItems(docs);
    } catch (err) {
      console.error(err);
      if (isBlockedError(err)) {
        setError(
          "Netzwerk blockiert. Bitte Adblocker für googleapis.com deaktivieren."
        );
      } else {
        setError("Fehler beim Laden der Changelogs.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleEdit = (id: string) => navigate(`/admin/changelog/editor/${id}`);

  const handleDelete = async (id: string) => {
    if (!confirm("Dieses Changelog wirklich löschen?")) return;
    try {
      await deleteDoc(doc(db, "changelogs", id));
      setItems((s) => s.filter((it) => it.id !== id));
    } catch (err) {
      console.error(err);
      alert(
        isBlockedError(err)
          ? "Löschen fehlgeschlagen: Netzwerk blockiert."
          : "Löschen fehlgeschlagen."
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen p-6 bg-gray-900 flex items-center justify-center">
        <Loader className="w-10 h-10 text-white animate-spin" />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen p-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <NetworkErrorBanner
            message={error}
            onRetry={loadData}
            isRetrying={loading}
          />
          <Link to="/admin/changelog-creator" className="cta-button secondary">
            ← Zurück
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white font-bold">Changelogs</h2>
          <div className="flex gap-2">
            <button
              onClick={loadData}
              className="cta-button secondary"
              title="Neu laden"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <Link to="/admin/changelog-creator" className="cta-button primary">
              + Neu
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {items.length === 0 && (
            <p className="text-gray-400">Keine Einträge gefunden.</p>
          )}
          {items.map((it) => (
            <div
              key={it.id}
              className="section-card p-4 flex items-center justify-between hover:border-gray-600 transition-colors"
            >
              <div>
                <div className="text-white font-semibold">{it.title}</div>
                <div className="text-gray-400 text-sm">
                  {it.date} •{" "}
                  {Array.isArray(it.category)
                    ? it.category.join(", ")
                    : it.category}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(it.id)}
                  className="cta-button secondary"
                >
                  Bearbeiten
                </button>
                <button
                  onClick={() => handleDelete(it.id)}
                  className="cta-button danger"
                >
                  Löschen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

/* ---------- Changelog Editor ---------- */
const ChangelogEditor: React.FC = () => {
  const { id } = useParams() as { id?: string };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    categories: [] as ChangelogCategory[],
    date: new Date().toISOString().slice(0, 10),
    icon: iconOptions[0],
    details: "",
  });

  const loadData = useCallback(async () => {
    if (!id) {
      navigate("/admin/changelogs", { replace: true });
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const dref = doc(db, "changelogs", id);
      const snap = await getDoc(dref);
      if (!snap.exists()) {
        setError("Changelog nicht gefunden.");
        return;
      }
      const data = snap.data() as Changelog;
      setForm({
        title: data.title || "",
        description: data.description || "",
        categories: Array.isArray(data.category)
          ? data.category
          : ([data.category].filter(Boolean) as ChangelogCategory[]),
        date: data.date || new Date().toISOString().slice(0, 10),
        icon: data.icon || iconOptions[0],
        details: Array.isArray(data.details)
          ? data.details.join("\n")
          : data.details || "",
      });
    } catch (err) {
      console.error(err);
      setError(
        isBlockedError(err)
          ? "Netzwerk blockiert. Bitte Adblocker deaktivieren."
          : "Fehler beim Laden."
      );
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toggleCategory = (cat: ChangelogCategory) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const details = form.details
        .split("\n")
        .map((d) => d.trim())
        .filter(Boolean);
      await updateDoc(doc(db, "changelogs", id), {
        title: form.title,
        description: form.description,
        category: form.categories,
        date: form.date,
        icon: form.icon,
        details,
      });
      alert("Aktualisiert");
      navigate("/admin/changelogs", { replace: true });
    } catch (err) {
      console.error(err);
      setError(
        isBlockedError(err)
          ? "Speichern fehlgeschlagen: Netzwerk blockiert."
          : "Speichern fehlgeschlagen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const remove = async () => {
    if (!id || !confirm("Dieses Changelog löschen?")) return;
    try {
      await deleteDoc(doc(db, "changelogs", id));
      alert("Gelöscht");
      navigate("/admin/changelogs", { replace: true });
    } catch (err) {
      console.error(err);
      alert(
        isBlockedError(err)
          ? "Löschen fehlgeschlagen: Netzwerk blockiert."
          : "Löschen fehlgeschlagen."
      );
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen p-6 bg-gray-900 flex items-center justify-center">
        <Loader className="w-10 h-10 text-white animate-spin" />
      </main>
    );
  }

  if (error && !form.title) {
    return (
      <main className="min-h-screen p-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <NetworkErrorBanner
            message={error}
            onRetry={loadData}
            isRetrying={loading}
          />
          <Link to="/admin/changelogs" className="cta-button secondary">
            ← Zurück
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl text-white mb-4 font-bold">
          Changelog bearbeiten
        </h2>

        {error && (
          <div className="mb-4 bg-red-900/30 border border-red-700 p-4 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <form
            onSubmit={save}
            className="md:col-span-2 section-card p-6 bg-gray-800 border border-gray-700"
          >
            <label className="text-sm text-gray-300">Titel</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
              required
            />

            <label className="text-sm text-gray-300">Beschreibung</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
              required
            />

            <div className="mb-4">
              <label className="text-sm text-gray-300 block mb-2">
                Kategorien
              </label>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCategory(c)}
                    className={`px-3 py-1 rounded transition-colors ${
                      form.categories.includes(c)
                        ? "bg-[#ff0040] text-white"
                        : "bg-gray-900 text-gray-200 hover:bg-gray-700"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-300 block">Datum</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 block">Icon</label>
                <select
                  name="icon"
                  value={form.icon}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
                >
                  {iconOptions.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="text-sm text-gray-300">
              Details (Zeilen = Bullet)
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              rows={6}
              className="w-full p-2 rounded bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff0040]"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button primary flex items-center gap-2"
              >
                {isSubmitting && <Loader className="w-4 h-4 animate-spin" />}
                {isSubmitting ? "Speichern..." : "Speichern"}
              </button>
              <button
                type="button"
                onClick={remove}
                className="cta-button danger"
              >
                Löschen
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/changelogs")}
                className="cta-button secondary"
              >
                Abbrechen
              </button>
            </div>
          </form>

          <aside className="section-card p-6 bg-gray-800 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-3">Vorschau</h3>
            <div className="bg-gray-900 p-4 rounded">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-bold">
                  {form.title || "(Titel)"}
                </h4>
                <div className="text-sm text-gray-400">{form.date}</div>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                {form.description || "(Kurzbeschreibung)"}
              </p>
              <div className="text-gray-400 text-sm mt-2">
                {form.categories.length > 0
                  ? form.categories.join(", ")
                  : "(Kategorien)"}
              </div>
              <ul className="list-disc list-inside mt-3 text-gray-200">
                {form.details
                  .split("\n")
                  .filter(Boolean)
                  .map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

/* ---------- Admin Router ---------- */
const Admin: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/admin/login" replace />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="changelog-creator" element={<Dashboard />} />
        <Route path="changelogs" element={<ChangelogsList />} />
        <Route path="changelog/editor/:id" element={<ChangelogEditor />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
};

export default Admin;
