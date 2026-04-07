import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';

import { loginApi } from '../services/auth';
import { setToken } from '../utils/auth';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ 校验
    if (!form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError('');

      // ✅ 调接口
      const res = await loginApi(form.email, form.password);

      // ✅ 存 token
      setToken(res.token);

      // ✅ 跳转
      navigate('/explore');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-soft">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">PureUs ❤️</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="test@test.com"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="123456"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full">
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-textSecondary">
          Don’t have an account?{' '}
          <Link to="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
