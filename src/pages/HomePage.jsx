import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { toast } from 'sonner';
import { API_URL } from '../config/api';

export default function HomePage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch(`${API_URL}/health`).then(r => r.json()).then(d => setStatus(d.status || 'ok')).catch(() => setStatus('down'));
  }, [API_URL]);

  // Show toast notification for authenticated users
  useEffect(() => {
    if (!loading && user) {
      toast.success('Welcome back! Click "Go to Dashboard" to start making predictions.', {
        duration: 5000,
        action: {
          label: 'Go to Dashboard',
          onClick: () => navigate('/dashboard')
        }
      });
    }
  }, [user, loading, navigate]);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-cyan-100 relative overflow-hidden">
      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px),
                           radial-gradient(circle at 50% 50%, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px',
          backgroundPosition: '0 0, 30px 30px, 15px 15px'
        }}></div>
      </div>
        {/* Hero Section */}
        <section className="relative py-20 px-5 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <img src="/images/hospital-logo-detailed.svg" className="h-20 w-20 object-contain" alt="Foresight Care Logo" />
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                      Foresight Care
                  </h2>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    Intelligent Foresight. Proactive Patient Care.
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                    Our AI-powered platform provides healthcare providers with intelligent foresight, 
                    accurately identifying <span className="text-emerald-600 font-semibold">high-risk patients</span> to empower healthcare teams, 
                    prevent readmissions, and deliver exceptional, proactive care.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => user ? navigate('/dashboard') : navigate('/sign-up')}
                    className="px-10 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 shadow-lg text-lg"
                  >
                    Discover Proactive Care
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-8 text-sm text-slate-700">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="font-medium">AI-Powered</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-medium">Real-time</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="font-medium">Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Content - Only show for non-logged in users */}
        {!user && (
          <>
            {/* The Problem Section */}
            <section className="py-16 px-5 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="glass-effect rounded-2xl shadow-xl p-10 border border-slate-200/50">
                  <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                    The Hidden Dangers After Discharge
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed text-center">
                    For many patients, the recovery journey is fragile. Without knowing who is most vulnerable, caregivers can't effectively focus their resources. This uncertainty is why so many patients, especially those with hidden risk factors, end up back in the hospital.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Solution Section */}
            <section className="py-16 px-5 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
                  How We Identify High-Risk Patients
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1: Data Analysis */}
                  <div className="glass-effect rounded-2xl shadow-xl p-8 border border-slate-200/50 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Data Analysis</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      Our system securely analyzes key, anonymized data points from a patient's record to build a complete health profile.
                    </p>
                  </div>

                  {/* Step 2: Core Prediction */}
                  <div className="glass-effect rounded-2xl shadow-xl p-8 border border-slate-200/50 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">The Core Prediction</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      The heart of our AI is its ability to process this profile and make a single, crucial prediction: Is this patient high risk or low risk for readmission?
                    </p>
                  </div>

                  {/* Step 3: Actionable Insight */}
                  <div className="glass-effect rounded-2xl shadow-xl p-8 border border-slate-200/50 text-center">
                    <div className="mb-6">
                      <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Actionable Insight for Clinicians</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      This clear classification—knowing a patient is high risk—is the most important tool we provide. It allows medical teams to immediately focus their attention and resources on those who need it most, preventing complications before they start.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Readmission Risk Analysis Visualization */}
            <section className="py-16 px-5 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="glass-effect rounded-2xl shadow-xl p-8 border border-slate-200/50">
                      <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Readmission Risk Analysis</h3>
                    <p className="text-slate-600">AI-powered prediction model in action</p>
                      </div>
                      
                      {/* Chart Visualization */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-700">Low Risk</span>
                          <div className="flex-1 mx-4">
                            <div className="bg-emerald-200 rounded-full h-3">
                              <div className="bg-emerald-500 h-3 rounded-full" style={{width: '25%'}}></div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-600">25%</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-700">Medium Risk</span>
                          <div className="flex-1 mx-4">
                            <div className="bg-amber-200 rounded-full h-3">
                              <div className="bg-amber-500 h-3 rounded-full" style={{width: '45%'}}></div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-600">45%</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-700">High Risk</span>
                          <div className="flex-1 mx-4">
                            <div className="bg-red-200 rounded-full h-3">
                              <div className="bg-red-500 h-3 rounded-full" style={{width: '30%'}}></div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-600">30%</span>
                        </div>
                      </div>
                      
                      {/* Patient Icons */}
                      <div className="mt-6 flex justify-center space-x-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
            </section>

            {/* The Vision Section */}
            <section className="py-16 px-5 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="glass-effect rounded-2xl shadow-xl p-10 border border-slate-200/50 text-center">
                  <h2 className="text-4xl font-bold text-slate-900 mb-8">
                    A Future Where Every High-Risk Patient Gets Proactive Care
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our vision is simple: a healthcare system where no high-risk patient goes unnoticed. By providing this critical foresight, we empower hospitals to transform their standard of care, ensuring a safer, healthier recovery for everyone.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Status Indicator - Hidden */}
        {/* <div className="fixed bottom-4 right-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'ok' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
          }`}>
            API: {status}
          </div>
        </div> */}
      </div>
    );
  }