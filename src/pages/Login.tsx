import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.08)_0%,transparent_60%)]">
      <div className="max-w-md w-full space-y-8 bg-bg-surface border border-border-default p-10 rounded-2xl shadow-2xl">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1 h-5 bg-accent rounded-full" />
            <span className="text-xl font-bold tracking-tight text-text-primary">StreamTime</span>
          </div>
          <h2 className="text-3xl font-extrabold text-text-primary tracking-tight">Welcome back</h2>
          <p className="text-sm text-text-muted">Please enter your details to sign in.</p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Email address</label>
              <input 
                type="email" 
                required 
                className="input-base w-full h-11" 
                placeholder="name@example.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-text-secondary">Password</label>
                <a href="#" className="text-xs font-medium text-accent hover:underline">Forgot password?</a>
              </div>
              <input 
                type="password" 
                required 
                className="input-base w-full h-11" 
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 bg-bg-elevated border-border-default rounded text-accent focus:ring-accent" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">Remember me</label>
          </div>

          <button type="submit" className="btn-primary w-full h-11 text-base font-bold shadow-lg shadow-accent/20">
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-text-muted">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-accent hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
