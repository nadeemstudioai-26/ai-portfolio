const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export async function checkHealth() {
  const res = await fetch(`${API_BASE_URL}/health`)
  if (!res.ok) {
    throw new Error(`Health check failed: ${res.status}`)
  }
  return res.json()
}
