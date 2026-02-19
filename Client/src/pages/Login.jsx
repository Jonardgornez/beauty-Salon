import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { Mail, Lock, Eye, EyeOff, Sparkles, User, Phone } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [showPassword, setShowPassword] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (authMode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering user:", formData);
      alert("Account created successfully (check console)");
    } else {
      console.log("Signing in user:", { 
        identifier: method === 'email' ? formData.email : formData.phone, 
        password: formData.password 
      });
      alert("Logged in successfully (check console)");
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
      
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Sparkles className="text-rose-400 w-8 h-8" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Lash & Beauty Studio</h1>
        <p className="text-slate-500 italic">Your beauty journey begins here</p>
      </div>

      {/* Main Card */}
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-4xl shadow-xl w-full max-w-md border border-white/40">
        
        {/* Sign In / Create Account Toggle */}
        <div className="flex bg-slate-100/50 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setAuthMode('signin')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${authMode === 'signin' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${authMode === 'signup' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
          >
            Create Account
          </button>
        </div>

        {/* Email / Phone Toggle */}
        <div className="flex bg-rose-50/50 p-1 rounded-xl mb-8">
          <button onClick={() => setMethod('email')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${method === 'email' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}>Email</button>
          <button onClick={() => setMethod('phone')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${method === 'phone' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}>Phone</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Sign Up Exclusive: Full Name */}
          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-rose-300 outline-none transition-all"
                />
              </div>
            </div>
          )}

          {/* Email or Phone Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {method === 'email' ? 'Email Address' : 'Phone Number'}
            </label>
            <div className="relative">
              {method === 'email' ? (
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              ) : (
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              )}
              <input 
                type={method === 'email' ? 'email' : 'tel'} 
                name={method === 'email' ? 'email' : 'phone'}
                required
                value={method === 'email' ? formData.email : formData.phone}
                onChange={handleChange}
                placeholder={method === 'email' ? 'you@example.com' : '+1 (555) 000-0000'}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-rose-300 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-rose-300 outline-none transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Sign Up Exclusive: Confirm Password */}
          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="password" 
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-rose-300 outline-none transition-all"
                />
              </div>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-rose-300 hover:bg-rose-400 text-white font-semibold py-4 rounded-xl shadow-md shadow-rose-200 transition-all active:scale-[0.98] mt-4"
            onClick={()=> navigate("/home")}
          >
            {authMode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {authMode === 'signin' && (
          <p className="text-center text-xs text-slate-400 mt-6 cursor-pointer hover:text-rose-400 transition-colors">
            Forgot your password?
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;