// components/AuthProvider.jsx
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuthStore } from "../store/useAuthStore"

function AuthProvider() {
  const navigate = useNavigate()
  const { user, checkAuth } = useAuthStore()
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    const performCheck = async () => {
      await checkAuth()
      setHasChecked(true)
    }
    performCheck()
  }, [checkAuth])

  useEffect(() => {
    if (hasChecked && !user) {
      navigate('/signin')
    }
  }, [hasChecked, user, navigate])

  if (!user || !hasChecked) {
    return null
  }

  return <Outlet />
}

export default AuthProvider